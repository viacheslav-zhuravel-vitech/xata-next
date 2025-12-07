import { FC } from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard/PropertyCard";

const PropertiesPage: FC = () => {
  if (!properties.length) {
    return <div className="p-6">No properties available.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
