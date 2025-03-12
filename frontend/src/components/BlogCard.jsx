import React from "react";

import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    minRead: "min read",
    author: "Maviyom Aviation",
  },
  hi: {
    minRead: "मिनट पढ़ें",
    author: "मावियोम एविएशन",
  },
};

// Function to format a date string into "Month Day, Year" format
function formatDate(dateStr) {
  var parts = dateStr.split("-");
  var year = parseInt(parts[0]);
  var month = parseInt(parts[1]);
  var day = parseInt(parts[2]);

  var date = new Date(year, month - 1, day);

  var options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const BlogCard = ({ blog, locale }) => {
  const { minRead, author } = translations[locale];

  const imageUrl =
 blog?.banner?.formats?.small?.url || 
  blog?.banner?.url || 
  null;


  const blogData =
    locale === "en" ? blog : blog?.localizations[0];
    console.log(blogData);
    
    
   

  return (
    <Link
      href={`/blog/${blog?.slug}`}
      className="card group relative flex flex-col w-full rounded-2xl overflow-hidden z-[1] shadow-blog-card-shadow-1  custom-transition hover:scale-[1.015] hover:shadow-blog-card-shadow-2 "
    >
      <div className="image-container   ">
        <img
          src={imageUrl}
          alt="blog"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="content-wrapper flex flex-col flex-grow px-4 md:px-8 py-4">
        <h2 className=" text-xl text-secondary font-semibold mb-2  static font-sans before:content-[''] before:cursor-inherit before:block before:z-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full group-hover:underline">
          {blogData?.title}
        </h2>
        <p className="font-sans text-lg  text-[#5d6165] flex-grow line-clamp-4">
          {blogData?.description}
        </p>

        <div className="author-details flex items-center w-full mt-4">
          <Image
            src="/maviyom_aviation_logo_circle.png"
            width={50}
            height={50}
            alt="author"
            className="author-image w-[50px] h-[50px] object-cover  rounded-[50%] "
          />

          <div className="author-info ml-4">
            <p className="font-semibold text-secondary">{author}</p>
            <div className="flex gap-x-[5px] gap-y-5 text-sm text-gray-600 flex-wrap">
              <p className="">
                {/* {blog?.date} */}
                {formatDate(blog?.date)}
                <span className="mx-[6px]">·</span>
                {blog?.expected_reading_time} {minRead}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
