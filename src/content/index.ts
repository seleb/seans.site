import sanitizeFilename from "sanitize-filename"
import db from "./db"

export function titleToSlug(title: string) {
  return `${sanitizeFilename(title).trim()}`
}

export async function getProjects() {
  return db.map((project) => ({
    ...project,
    slug: titleToSlug(project.title),
    preview: `/${project.preview}`,
    thumbnail: `/${project.thumbnail}`,
  }))
}

export async function getProject(slug: string) {
  const projects = await getProjects()
  const project = projects.find((project) => project.slug === slug)
  return project
}
