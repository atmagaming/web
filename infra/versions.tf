terraform {
  required_version = ">= 1.7.0"

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 3.0"
    }
  }

  # State stored locally — single operator. Migrate to a remote backend
  # (HCP Terraform, like ../../services/infra) if more people start operating this.
}
