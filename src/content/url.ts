import pkg from "../../package.json";

export const siteUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${pkg.name}`;
