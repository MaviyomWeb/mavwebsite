import { fetchDataFromApi } from "../../../utils/api";

export default async function sitemap() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  const productEntries = products?.data?.map((product) => ({
    url: `https://www.maviyom.com/products/product/${product?.attributes?.slug}`,
    lastModified: new Date(product?.attributes?.updatedAt),
  }));

  return [
    {
      url: `https://www.maviyom.com`,
    },
    {
      url: `https://www.maviyom.com/about-us`,
    },
    {
      url: `https://www.maviyom.com/ground-control-station`,
    },
    {
      url: `https://www.maviyom.com/contact-us`,
    },
    ...productEntries,
  ];
}
