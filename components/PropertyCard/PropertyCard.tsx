import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
import { FC } from "react";
import { getRateDisplay } from "@/services/ratesServices";

export type rateTypes = {
  nightly?: number;
  weekly?: number;
  monthly?: number;
};

export type PropertyType = {
  _id: string;
  name: string;
  type: string;
  beds: number;
  baths: number;
  square_feet: number;
  location: {
    city: string;
    state: string;
    street: string;
    zipcode: string;
  };
  images: Array<string>;
  rates: rateTypes;
  amenities: Array<string>;
};

type PropertyCardProps = {
  property: PropertyType;
};

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-2.5 right-2.5 bg-white px-4 py-2 rounded-lg text-green-600 font-bold text-right md:text-center lg:text-right">
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
            className="h-9 bg-green-600 hover:scale-105 transition-transform duration-300 ease-in-out text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
