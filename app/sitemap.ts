import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...services.map((service) => `/usluge/${service.slug}`)];
  const base = siteUrl ?? "";

  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
