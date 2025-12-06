import Link from "next/link";
import { FC } from "react";
import cx from "classnames";

type Props = {
  className?: string;
};
export const PageLinks: FC<Props> = ({ className }) => {
  const linkClass = cx(
    "font-bold text-lg content-center align-end text-center",
    className,
  );
  return (
    <>
      <Link className={linkClass} href={{ pathname: "/" }}>
        Home
      </Link>
      <Link className={linkClass} href={{ pathname: "/properties" }}>
        Properties
      </Link>
      <Link className={linkClass} href={{ pathname: "/properties/add" }}>
        Add Property
      </Link>
    </>
  );
};
