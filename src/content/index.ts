import fs from "fs";
import sizeof from "image-size";
import { ISizeCalculationResult } from "image-size/dist/types/interface";
import path from "path";
import sanitizeFilename from "sanitize-filename";
import db from "./db";

export function titleToSlug(title: string) {
  return `${sanitizeFilename(title).trim()}`;
}

const dirThumbnail = path.resolve(process.cwd(), `./public/`);

export async function getProjects() {
  return db.map((project) => {
    let urlPreview = path.join(dirThumbnail, project.preview);
    const urlThumbnail = path.join(dirThumbnail, project.thumbnail);
    let urlPreviewVid = urlPreview.replace(".gif", ".mp4");
    let filesizePreview = 0;
    let filesizeThumbnail = 0;
    if (!fs.existsSync(urlPreviewVid)) {
      urlPreviewVid = "";
    }
    filesizePreview = fs.statSync(urlPreviewVid || urlPreview).size;
    filesizeThumbnail = fs.statSync(urlThumbnail).size;
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
        url: `/${
          urlPreviewVid
            ? project.preview.replace(".gif", ".mp4")
            : project.preview
        }`,
        ...sizePreview,
        filesize: filesizePreview,
      },
      thumbnail: {
        url: `/${project.thumbnail}`,
        ...sizeThumbnail,
        filesize: filesizeThumbnail,
      },
    };
  });
}

export async function getProject(slug: string) {
  const projects = await getProjects();
  const project = projects.find((project) => project.slug === slug);
  return project;
}
