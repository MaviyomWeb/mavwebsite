import Container from "@/components/Container";
import ProductCard3 from "@/components/ProductCard3";
import { fetchDataFromApi } from "../../../../utils/api";

const fetchProducts = async () => {
  try {
    const products = await fetchDataFromApi(`/api/products?populate=*`);

    if (!products) {
      throw new Error("Products Not Found");
    }

    return products;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};

const Products = async ({ params }) => {
  const { locale } = params;
  const products = await fetchProducts();


  return (
    <div className="relative isolate z-0 bg-white pb-10 md:pb-20 pt-10">
      <Container>
        <div className="mb-10">
          <h2 className="text-[32px] sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
            {locale === "en" ? "Our Products" : "हमारे उत्पाद"}
          </h2>
          <div className="text-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>
        </div>

        <div className="bg-gray">
          <div className="grid md:grid-cols-2 gap-y-5 xs:gap-y-10 md:gap-y-8 gap-x-16 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            {products?.data?.map((product) => (
              <ProductCard3 key={product?.documentId} data={product} locale={locale} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
