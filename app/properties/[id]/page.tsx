import { FC } from "react";
import Image from "next/image";
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
} from "react-icons/fa";
import Link from "next/link";
import { connectDB } from "@/config/database";
import Properties from "@/models/Properties";
import { getRateDisplay } from "@/services/ratesServices";
import { PropertyType } from "@/components/PropertyCard/PropertyCard";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

const PropertyPage: FC<PropertyPageProps> = async ({ params }) => {
  const { id } = await params;
  await connectDB();
  const property: PropertyType = await Properties.findById(id).lean();
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">{property.name}</h1>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-t-xl max-w-[1200px] m-auto"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-green-600 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay(property.rates)}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="lg:inline" /> {property.beds}{" "}
            <span className="lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="lg:inline" /> {property.baths}{" "}
            <span className="lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="lg:inline" />
            {property.square_feet} <span className="lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <FaMoneyBill className="lg:inline" /> Weekly
          </p>
          <p>
            <FaMoneyBill className="lg:inline" /> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-green-600 mt-1" />
            <span className="text-green-600">
              {" "}
              {property.location.city} {property.location.state}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-green-600 hover:scale-105 transition-transform duration-300 ease-in-out text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
};
export default PropertyPage;
