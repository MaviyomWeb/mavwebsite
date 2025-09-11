'use client';  // Make it a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/router";  // Import useRouter
import Container from "@/components/Container";
import { fetchDataFromApi } from "../../../../../../utils/api";
import Applications from "./components/Applications";
import Payload from "./components/Payload";
import ProductDetails from "./components/ProductDetails";

const Product = () => {
  const router = useRouter();
  const { locale, slug } = router.query;  // Get dynamic params

  const [product, setProduct] = useState(null);
  const [productAllDetails, setProductAllDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductsDetails = async (slug) => {
    try {
      const apiUrl = `/api/products?populate=*&filters[slug][$eq]=${slug}`;
      const res = await fetchDataFromApi(apiUrl);

      if (!res || !res.data || res.data.length === 0) {
        throw new Error("Product not found");
      }

      const data = locale === "en" ? res.data[0] : res.data[0].localizations[0];

      setProduct(data);
      setProductAllDetails(res.data[0]);
    } catch (err) {
      console.error(err);
      setError("Failed to load product data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchProductsDetails(slug);
    }
  }, [slug, locale]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="relative isolate z-0 pb-10 md:pb-20 mt-10 pt-10">
      <Container>
        <ProductDetails data={product} locale={locale} productAllDetails={productAllDetails} />
      </Container>

      {productAllDetails?.payload_image && (
        <div className="content md:w-9/12 md:mx-auto mt-10">
          <Payload data={product} locale={locale} productAllDetails={productAllDetails} />
        </div>
      )}

      <Container>
        {/* <Applications data={product} locale={locale} /> */}
      </Container>
    </div>
  );
};

export default Product;
