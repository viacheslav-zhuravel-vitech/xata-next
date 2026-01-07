import { FC } from "react";
import Image from "next/image";
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
  FaAngleLeft,
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
  console.log(property);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">{property.name}</h1>
        <Link
          href="/properties"
          className="text-green-600 font-bold text-2xl flex items-center gap-1 mb-6"
        >
          <FaAngleLeft /> Back
        </Link>
      </div>
      <div className="relative">
        <Image
          src={`/images/properties/${property.images[0]}`}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-t-xl max-h-[650px] m-auto object-cover"
        />
        <h3 className="absolute top-2.5 right-2.5 bg-white px-4 py-2 rounded-lg text-green-600 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay(property.rates)}
        </h3>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-gray-600">
          <div>{`Type: ${property.type}`}</div>
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <span>Location:</span>
            <FaMapMarker className="text-green-600 mt-1" />
            <span className="text-green-600">
              {property.location.city} {property.location.state}
            </span>
          </div>
        </div>
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
      </div>
    </div>
  );
};
export default PropertyPage;
