import Link from "next/link";
import DroneSpecsTable from "@/components/DroneSpecsTable";
import Image from "next/image";

const translations = {
  en: {
    specifications: "Specifications",
    enquireNow: "Enquire Now",
  },
  hi: {
    specifications: "स्पेसिफिकेशन्स",
    enquireNow: "अभी पूछें",
  },
};

const ProductDetails = ({ data: product, locale }) => {
  const { specifications, enquireNow } = translations[locale];

  // ✅ Extract Image URL properly
  const imageUrl =
    product?.product_image?.formats?.large?.url || 
    product?.product_image?.url || 
    null;

  return (
    <div>
      <div className="max-w-[824px] mx-auto">
        {/* ✅ Display Image Only If Available */}
        {imageUrl && (
          <Image
            className={`w-full h-full bg-gray-50 object-cover ${
              product?.title === "Maviyom 25L"
                ? "w-[300px] sm:w-[600px] h-[240px] mx-auto"
                : ""
            }`}
            src={imageUrl}
            alt={product?.title || "Product Image"}
            width={600}
            height={340}
          />
        )}
      </div>

      <div className="content md:w-4/5 lg:w-4/6 2xl:w-4/5 md:mx-auto">
        {/* ✅ Product Title & Description */}
        <div className="drone-info">
          <h2 className="heading text-3xl md:text-4xl xl:text-5xl text-secondary font-dmSans md:leading-5 text-center font-semibold mt-7 mb-4">
            {product?.title}
          </h2>
          <p className="md:text-center text-lg text-[#4d535e] md:leading-8 mb-3 md:mb-4">
            {product?.description}
          </p>
        </div>

        {/* ✅ Drone Specifications */}
        <div className="drone-specifications mt-8 md:mt-16 w-full flex flex-col items-center justify-center">
          <h2 className="heading text-3xl md:text-4xl xl:text-5xl text-secondary font-dmSans leading-5 font-semibold mb-5 md:mb-7">
            {specifications}
          </h2>

          <div className="mb-10">
            <DroneSpecsTable specs={product?.specifications?.droneSpecs || []} />
          </div>

          {/* ✅ Enquire Now Button */}
          <div className="flex items-center justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center whitespace-nowrap text-white bg-primary hover:opacity-80 font-medium px-6 py-[10px] rounded-lg"
            >
              {enquireNow}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
