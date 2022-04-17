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
    let sizePreview: ISizeCalculationResult;
    let sizeThumbnail: ISizeCalculationResult;
  try {
      sizePreview = sizeof(urlPreviewVid || urlPreview);
      sizeThumbnail = sizeof(urlThumbnail);
    } catch {
      sizePreview = {width:0,height:0};
      sizeThumbnail = {width:0,height:0};
    }
    return {
      ...project,
      slug: titleToSlug(project.title),
      preview: {
        url: `/${urlPreviewVid ? project.preview.replace('.gif', '.mp4') : project.preview}`,
        w: sizePreview.width,
        h: sizePreview.height,
      },
      thumbnail: {
        url: `/${project.thumbnail}`,
        w: sizeThumbnail.width,
        h: sizeThumbnail.height,
      },
    }
  })
}

export async function getProject(slug: string) {
  const projects = await getProjects()
  const project = projects.find((project) => project.slug === slug)
  return project
}
