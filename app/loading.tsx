import { ClimbingBoxLoader } from "react-spinners";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <ClimbingBoxLoader
      size={35}
      color="#1fca40"
      cssOverride={{ margin: "auto auto" }}
    />
  );
};
export default Loading;
