import Link from "next/link";
import DroneSpecsTable from "@/components/DroneSpecsTable";
import Applications from "./Applications";  // Import Applications here
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

  const imageUrl =
    product?.product_image?.formats?.large?.url ||
    product?.product_image?.url ||
    null;

  return (
    <div className="max-w-7xl mx-auto px-0 md:px-6 py-0">

      {/* ✅ First Row: Product Image + Title + Description (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">

        {/* Right Column: Product Title + Description */}
        <div className="text-left md:text-left lg:order-2">
          <h2 className="text-3xl md:text-4xl text-secondary font-dmSans font-semibold mb-4">
            {product?.title}
          </h2>
          <p className="text-[14px] md:text-lg text-[#4d535e] leading-relaxed  ">
            {product?.description}
          </p>
        </div>

        {/* Left Column: Product Image */}
        {imageUrl && (
          <div className="flex justify-center md:justify-start lg:order-1">
            <Image
              className="border rounded-lg shadow-lg object-cover py-10 px-6" style="border-color: #0f172a;"
              src={imageUrl}
              alt={product?.title || "Product Image"}
              width={600}
              height={400}
            />
          </div>
        )}

        
      </div>

      {/* ✅ Second Row: Specifications + Applications (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

        {/* Left Column → Specifications */}
        <div className="mt-8 md:mt-16 md:px-4 w-full max-w-md sm:max-w-4xl  mx-auto pb-10 md:pb-0">
          <h2 className="text-[30px] leading-[35px] xs:text-[36px] sm:text-[45px] sm:leading-[50px] text-secondary  font-dmSans  md:leading-5 font-medium text-center mb-4 md:mb-8">
            {specifications}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            <DroneSpecsTable specs={product?.specifications?.droneSpecs || []} />
          </div>
        </div>

        {/* Right Column → Applications (Embed Applications Component) */}
        <Applications data={product} locale={locale} />
      </div>
      {/* ✅ Third Row: Enquire Now Button (Centered) */}
      <div className="flex justify-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center whitespace-nowrap text-white bg-primary hover:opacity-80 font-medium px-6 py-3 rounded-lg"
        >
          {enquireNow}
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
