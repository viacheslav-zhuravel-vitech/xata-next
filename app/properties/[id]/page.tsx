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
          <div>
            <span className="font-bold">Type: </span>
            {property.type}
          </div>
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <span className="font-bold">Location:</span>
            <FaMapMarker className="text-green-600 mt-1" />
            <span className="text-green-600">
              {`${property.location.street}, ${property.location.city}, ${property.location.state}, ${property.location.zipcode}`}
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
      <div className="p-4 mb-4 bg-gray-200 shadow-md text-gray-600">
        <h3 className="font-bold">Rates & Options</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3">
          {Object.entries(property.rates).map(([key, value], index) => (
            <li key={index}>
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span> {" - "}
              <span className="text-green-600 font-bold">${value}</span>
            </li>
          ))}
        </ul>
      </div>
      {property?.amenities?.length > 0 && (
        <div className="p-4 bg-green-50 shadow-md text-gray-600">
          <h3 className="font-bold">Amenities</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3">
            {property.amenities.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default PropertyPage;
