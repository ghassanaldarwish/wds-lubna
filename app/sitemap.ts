import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { default: sidebar } = await import("@/config/sidebar");

  const sites: any = [process.env.NEXT_PUBLIC_BASE_URL];
  Object.values(sidebar).forEach((el) => {
    el.navigator.forEach((el) => {
      sites.push(`${process.env.NEXT_PUBLIC_BASE_URL}/${el.path}`);
    });
  });
  return sites.map((el: string) => ({
    url: `${el}`,
  }));
}
