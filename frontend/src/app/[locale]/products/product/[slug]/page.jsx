import Container from "@/components/Container";
import ProductDetails from "./components/ProductDetails";

// Helper to fetch product data from Strapi API
const fetchProductsDetails = async (slug) => {
  const apiUrl = `${process.env.STRAPI_API_URL}/products?populate=*&filters[slug][$eq]=${slug}`;

  const res = await fetch(apiUrl, { cache: "no-store" }); // Prevent stale data
  const product = await res.json();

  if (!product?.data || product.data.length === 0) {
    throw new Error("Product not found");
  }

  return product;
};

const ProductPage = async ({ params }) => {
  const { locale, slug } = params;

  const res = await fetchProductsDetails(slug);

  const product =
    locale === "en"
      ? res.data[0]
      : res.data[0]?.attributes.localizations?.data[0]; // Use localized version if available

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="relative isolate z-0 pb-10 md:pb-20 mt-10 pt-10">
      <Container>
        <ProductDetails data={product} locale={locale} />
      </Container>
    </div>
  );
};

export default ProductPage;
