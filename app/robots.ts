import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ruangti.varevastudio.tech";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/docs", "/share/*"],
        disallow: ["/api/*", "/chat/*"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/docs", "/share/*"],
        disallow: ["/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
