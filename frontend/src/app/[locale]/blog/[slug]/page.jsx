import Image from "next/image";
import React from "react";
import { fetchDataFromApi } from "../../../../../utils/api";
import ButtonPrevious from "./components/ButtonPrevious";
import Content from "./components/Content";

const fetchBlogDetail = async (slug) => {
  try {
    const product = await fetchDataFromApi(
      `/api/blogs?populate=*&filters[slug][$eq]=${slug}`
    );

    if (!product?.data?.length) {
      return null; // Return null if no blog found
    }

    return product;
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    return null;
  }
};

const Blog = async ({ params }) => {
  const { locale, slug } = params;

  const res = await fetchBlogDetail(slug);

  if (!res) {
    return <div className="text-center text-red-500 mt-5">Blog Not Found</div>;
  }

  const imageUrl =
  res.data[0]?.banner?.formats?.small?.url ||
  res.data[0]?.banner?.url ||
    null;

  const blog = locale === "en" ? res.data[0] : res.data[0]?.localizations[0];

console.log(imageUrl);


  return (
    <div className="relative bg-white isolate z-0 pb-10 md:pb-20">
      <div className="w-[89%] max-w-screen-md mx-auto mt-2">
        <ButtonPrevious locale={locale} />

        {imageUrl && (
          <div className="mt-2 mb-3 w-full h-96 relative">
            <Image
              src={imageUrl}
              alt="cover"
              fill
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        )}

        <Content data={blog} />
      </div>
    </div>
  );
};

export default Blog;
