import { FC } from "react";

type PropertyPageProps = {
  params: {
    id: string;
  };
};

const PropertyPage: FC<PropertyPageProps> = async ({ params }) => {
  return (
    <div>
      <h1>Property Details{params.id}</h1>
    </div>
  );
};
export default PropertyPage;
