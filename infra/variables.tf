variable "vercel_api_token" {
  description = "Vercel API token. Create at https://vercel.com/account/tokens scoped to the team below."
  type        = string
  sensitive   = true
}

variable "vercel_team" {
  description = "Vercel team slug that owns the project."
  type        = string
  default     = "elumixors-projects"
}

variable "github_owner" {
  description = "GitHub repo owner (org connected to Vercel)."
  type        = string
  default     = "atmagaming"
}

variable "github_repo" {
  description = "GitHub repo name."
  type        = string
  default     = "web"
}

variable "production_domain" {
  description = "Apex production domain. www.<domain> 308-redirects to it."
  type        = string
  default     = "atmagaming.com"
}
