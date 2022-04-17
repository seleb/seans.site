import fs from 'fs';
import sizeof from "image-size";
import { ISizeCalculationResult } from 'image-size/dist/types/interface';
import path from "path";
import sanitizeFilename from "sanitize-filename";
import db from "./db";

export function titleToSlug(title: string) {
  return `${sanitizeFilename(title).trim()}`
}

export async function getProjects() {
  return db.map((project) => {
    let urlPreview = path.resolve(__dirname, `../../../public/${project.preview}`);
    const urlThumbnail = path.resolve(__dirname, `../../../public/${project.thumbnail}`);
    let urlPreviewVid = urlPreview.replace('.gif', '.mp4');
    if (!fs.existsSync(urlPreviewVid)) {
      urlPreviewVid = '';
    }
    let sizePreview: Partial<ISizeCalculationResult>;
    let sizeThumbnail: Partial<ISizeCalculationResult>;
  try {
      sizePreview = sizeof(urlPreviewVid || urlPreview);
      sizeThumbnail = sizeof(urlThumbnail);
    } catch {
      sizePreview = {};
      sizeThumbnail = {};
    }
    return {
      ...project,
      slug: titleToSlug(project.title),
      preview: {
        url: `/${urlPreviewVid ? project.preview.replace('.gif', '.mp4') : project.preview}`,
        ...sizePreview,
      },
      thumbnail: {
        url: `/${project.thumbnail}`,
        ...sizeThumbnail,
      },
    }
  })
}

export async function getProject(slug: string) {
  const projects = await getProjects()
  const project = projects.find((project) => project.slug === slug)
  return project
}
