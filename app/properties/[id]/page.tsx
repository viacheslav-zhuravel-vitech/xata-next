import { FC } from "react";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

const PropertyPage: FC<PropertyPageProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Property Details{id}</h1>
    </div>
  );
};
export default PropertyPage;
