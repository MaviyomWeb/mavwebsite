import Container from "@/components/Container";
import { fetchDataFromApi } from "../../../../../../utils/api";
import Applications from "./components/Applications";
import Payload from "./components/Payload";
import ProductDetails from "./components/ProductDetails";

const fetchProductsDetails = async (slug) => {
  try {
    const apiUrl = `/api/products?populate=*&filters[slug][$eq]=${slug}`;

    const product = await fetchDataFromApi(apiUrl);

    if (!product) {
      throw new Error("Products Not Found");
    }

    return product;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};

const Product = async ({ params }) => {

  const { locale, slug } = params;

  const res = await fetchProductsDetails(slug);

  const product =
    locale === "en"
      ? res?.data[0]
      : res?.data[0]?.localizations[0];

  const productAllDetails = res?.data[0];
  


  return (
    <div className="relative isolate z-0 pb-10 md:pb-20  mt-10 ">
      <>
        <Container>
          <ProductDetails
            data={product}
            locale={locale}
            productAllDetails={productAllDetails}
          />
        </Container>
      </>

      {/* VTOL */}

      {productAllDetails?.payload_image && (
        <div className="content md:w-9/12 md:mx-auto mt-10">
          <Payload
            data={product}
            locale={locale}
            productAllDetails={productAllDetails}
          />
        </div>
      )}

      <Container>
        <Applications data={product} locale={locale} />
      </Container>
    </div>
  );
};

export default Product;
