# Infrastructure

Terraform-managed Vercel deployment for the atma marketing site.

## Stack

- **Vercel** — static hosting for the prerendered SvelteKit build (`adapter-static` → `build/`)
- **Cloudflare** — DNS for `atmagaming.com` (managed manually, outside Terraform)

State is local (`terraform.tfstate`, gitignored). Single operator.

## Prerequisites

```
brew install terraform
```

`terraform.tfvars` (gitignored) needs:

- `vercel_api_token` — create at https://vercel.com/account/tokens, scoped to the `elumixors-projects` team

## Usage

```
cd infra
terraform init
terraform plan
terraform apply
```

The project is git-connected to `atmagaming/web`; pushes to `main` auto-deploy.

## DNS cutover (manual, in Cloudflare)

After `apply`, point the domain at Vercel:

- `atmagaming.com` (apex) → `A 76.76.21.21` (or CNAME-flatten to `cname.vercel-dns.com`)
- `www.atmagaming.com` → `CNAME cname.vercel-dns.com`

Confirm the exact target shown in the Vercel project's **Domains** tab. Until DNS
flips, the site keeps serving from Render. Once verified, remove the old Render
records.

## Notes

- `framework = null` keeps Vercel from applying the SvelteKit preset; we serve the
  static `build/` output directly. Routing (clean URLs, SPA fallback) and cache
  headers live in `../vercel.json`, mirroring the old `render.yaml`.
