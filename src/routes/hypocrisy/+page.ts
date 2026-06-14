import {
  contributors as fallbackContributors,
  teamMembers as fallbackTeam,
  type TeamMember,
} from "./6-JoinCTA/team-data";

// Shape returned by the public GET /people endpoint (services backend).
type ApiPerson = {
  id: string;
  name: string;
  role: string | null;
  imageUrl: string | null;
  linkedin: string | null;
  currentStatus: "working" | "inactive" | "vacation" | null;
  wasActive: boolean;
};

const PEOPLE_ENDPOINT = "https://api.atmagaming.com/people";

function toMember(person: ApiPerson): TeamMember {
  const linkType = person.linkedin ? (person.linkedin.includes("artstation") ? "artstation" : "linkedin") : null;
  return { name: person.name, role: person.role ?? "", image: person.imageUrl, link: person.linkedin, linkType };
}

// Founder/CEO leads the active team; everything else falls back to alphabetical for a stable order.
function teamOrder(a: TeamMember, b: TeamMember) {
  const lead = (member: TeamMember) => (/founder|ceo/i.test(member.role) ? 0 : 1);
  return lead(a) - lead(b) || a.name.localeCompare(b.name);
}

// Prerendered at build time: the roster is baked into the static HTML, so there is no client request,
// no loading flash, and crawlers see the real team. team-data.ts is the fallback if the API is briefly
// unavailable during a build.
export async function load({ fetch }) {
  try {
    const response = await fetch(PEOPLE_ENDPOINT);
    if (!response.ok) throw new Error(`GET /people responded ${response.status}`);
    const people = (await response.json()) as ApiPerson[];
    if (!Array.isArray(people) || people.length === 0) throw new Error("GET /people returned no people");

    const active = people.filter((person) => person.currentStatus !== "inactive");
    const past = people.filter((person) => person.currentStatus === "inactive" && person.wasActive);

    return {
      team: active.map(toMember).sort(teamOrder),
      contributors: past.map(toMember).sort((a, b) => a.name.localeCompare(b.name)),
    };
  } catch (error) {
    console.error("hypocrisy: falling back to bundled team data — could not load /people:", error);
    return { team: [...fallbackTeam], contributors: [...fallbackContributors] };
  }
}
