import type { MetadataRoute } from "next";

const base = "https://mammaluisa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/wine",
    "/photos",
    "/reservations",
    "/contact",
    "/about",
    "/private-dining",
    "/gift-certificates",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
