import pkg from "../../package.json";
export const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost"
    : `https://${pkg.name}`;
