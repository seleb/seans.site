import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import { siteUrl } from "./src/content/url";
import generateRssFeed from "./src/generateRSSFeed";

export default defineConfig({
	site: siteUrl,
	trailingSlash: "always",
	integrations: [
		react(),
		{
			name: "rss",
			hooks: {
				"astro:server:start": generateRssFeed,
				"astro:build:start": generateRssFeed,
			},
		},
	],
});
