import Container from "./Container";
import ProductsCarousel from "./ProductsCarousel";

import { fetchDataFromApi } from "../../utils/api";

const fetchProducts = async (locale) => {
  try {
    // noStore();
    const products = await fetchDataFromApi(
      `/api/products?populate=*`
    );

    if (!products) {
      throw new Error("Products Not Found");
    }

    return products;
  } catch (error) {
    // Handle the error here or re-throw it to be handled by the component using this function
    throw new Error("Error fetching products: " + error.message);
  }
};

const OurProducts1 = async ({ locale }) => {
  const products = await fetchProducts();

  return (
    <>
      <section className=" md:pb-20">
        <Container>
          <div className="mb-5 md:mb-10">
            <h2 className="text-[32px]  sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
              {locale === "en" ? "Our Products" : "हमारे उत्पाद"}
            </h2>

            <div className=" text-center">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>

              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>

              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
          <ProductsCarousel products={products} locale={locale} />
        </Container>
      </section>
    </>
  );
};

export default OurProducts1;
