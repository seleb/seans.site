import fs from "fs";
import RSS from "rss";
import pkg from "../package.json";
import { getProjects } from "./content";

const url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${pkg.name}`;

export default async function generateRssFeed() {
  const feed = new RSS({
    title: "Sean's Site",
    description: pkg.description,
    site_url: url,
    feed_url: `${url}/rss.xml`,
    image_url: `${url}/favicon-32x32.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${pkg.author.replace('&', '&#x26').replace('<', '&#x3C').replace('>', '&#x3E')}`,
    language: 'en',
  });

 (await getProjects()).forEach((i) => {
   feed.item({
     title: i.title,
     description: [
      i.tagline ? `<blockquote>${i.tagline}</blockquote>` : '',
      i.description,
      i.links?.length ? `<ul>${i.links.map(i => `<li><a href="${i}">${i}</a></li>`).join('')}</ul>` : '',
    ].filter(i => i).join(' '),
     date: new Date(i.date).toString() === "Invalid Date" ? undefined : i.date,
     url: `${url}/project/${encodeURIComponent(i.slug)}`,
     categories: i.tags,
     enclosure: i.preview.url?.endsWith('mp4') ? {
      url: `${url}${i.thumbnail.url
        .split("/")
        .map(encodeURIComponent)
        .join("/")}`,
      size: i.thumbnail.width,
      type: i.thumbnail.type
        ?.replace("png", "image/png")
        ?.replace("gif", "image/gif"),
     } : {
       url: `${url}${i.preview.url
         .split("/")
         .map(encodeURIComponent)
         .join("/")}`,
       size: i.preview.width,
       type: i.preview.type
         ?.replace("png", "image/png")
         ?.replace("gif", "image/gif"),
     },
   });
 });
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
