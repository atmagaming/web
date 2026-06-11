locals {
  github_full = "${var.github_owner}/${var.github_repo}"
}

# Static SvelteKit site (adapter-static -> build/). framework is null ("Other")
# so Vercel does NOT apply the SvelteKit preset and just serves the prerendered
# build output. Routing/headers live in ../vercel.json.
resource "vercel_project" "web" {
  name      = "atma-web"
  framework = null

  install_command  = "bun install --frozen-lockfile"
  build_command    = "bun run build"
  output_directory = "build"

  git_repository = {
    type              = "github"
    repo              = local.github_full
    production_branch = "main"
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "vercel_project_domain" "apex" {
  project_id = vercel_project.web.id
  domain     = var.production_domain
}

resource "vercel_project_domain" "www" {
  project_id           = vercel_project.web.id
  domain               = "www.${var.production_domain}"
  redirect             = var.production_domain
  redirect_status_code = 308

  # apex must be attached before it can be a redirect target
  depends_on = [vercel_project_domain.apex]
}
