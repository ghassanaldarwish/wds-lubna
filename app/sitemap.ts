import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { default: navbar } = await import("@/config/navbar");

  const sites = [...navbar.navigator];
  return sites.map((el) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${el.path}`,
  }));
}
