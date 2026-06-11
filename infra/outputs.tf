output "project_id" {
  value = vercel_project.web.id
}

output "vercel_url" {
  value       = "https://${vercel_project.web.name}.vercel.app"
  description = "Default Vercel production URL."
}

output "production_url" {
  value = "https://${var.production_domain}"
}
