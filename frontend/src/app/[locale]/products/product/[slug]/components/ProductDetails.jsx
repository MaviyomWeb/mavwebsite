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
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* ✅ First Row: Product Image + Title + Description (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">

        {/* Left Column: Product Image */}
        {imageUrl && (
          <div className="flex justify-center md:justify-start">
            <Image
              className="rounded-lg shadow-md object-cover"
              src={imageUrl}
              alt={product?.title || "Product Image"}
              width={600}
              height={400}
            />
          </div>
        )}

        {/* Right Column: Product Title + Description */}
        <div className="text-left md:text-left">
          <h2 className="text-3xl md:text-4xl text-secondary font-dmSans font-semibold mb-4">
            {product?.title}
          </h2>
          <p className="text-lg text-[#4d535e] leading-relaxed  ">
            {product?.description}
          </p>
        </div>
      </div>

      {/* ✅ Second Row: Specifications + Applications (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

        {/* Left Column → Specifications */}
        <div>
          <h2 className="text-3xl md:text-4xl text-secondary font-dmSans font-semibold mb-5">
            {specifications}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
