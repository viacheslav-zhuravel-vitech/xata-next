import PropertyCard from "@/components/PropertyCard/PropertyCard";
import { FC } from "react";
import { connectDB } from "@/config/database";
import Properties from "@/models/Properties";

export const NewProperty: FC = async () => {
  await connectDB();
  const lastAdded = await Properties.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">New Property</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lastAdded.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};
