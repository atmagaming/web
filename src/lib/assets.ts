// Heavy public media (audio, video, team photos) lives in the site's Devkit Cloud blob store rather than
// the git repo, served by the edge under /_blob/ on every hostname of the site. Uploaded by
// scripts/upload-blob.ts; see scripts/blob-manifest.json for the full mapping.
export const BLOB_BASE = "/_blob";

export const blob = (path: string) => `${BLOB_BASE}/${path}`;

const VERCEL_BLOB_BASE = "https://fvltcr8faoaastod.public.blob.vercel-storage.com/";

/** Image URLs stored elsewhere (the /people API) still name the old Vercel Blob store; they map onto ours. */
export const fromVercelBlob = (url: string) =>
  url.startsWith(VERCEL_BLOB_BASE) ? blob(url.slice(VERCEL_BLOB_BASE.length)) : url;
