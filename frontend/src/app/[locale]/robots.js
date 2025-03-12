export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy-policy", "/terms-and-conditions"],
      },
    ],
    sitemap: `https://www.maviyom.com/sitemap.xml`,
  };
}
