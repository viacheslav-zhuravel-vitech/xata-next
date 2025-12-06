"use client";
import Link from "next/link";
import { FC } from "react";
import cx from "classnames";
import { Divider } from "@/components/Divider/Divider";

type Props = {
  className?: string;
  afterRedirectCallbackAction?: () => void;
};
export const PageLinks: FC<Props> = ({
  className,
  afterRedirectCallbackAction,
}) => {
  const linkClass = cx(
    "font-bold text-lg content-center align-end text-center",
    className,
  );
  return (
    <>
      <Link
        className={linkClass}
        href={{ pathname: "/" }}
        onClick={() => afterRedirectCallbackAction?.()}
      >
        Home
      </Link>
      <Divider />
      <Link
        className={linkClass}
        href={{ pathname: "/properties" }}
        onClick={() => afterRedirectCallbackAction?.()}
      >
        Properties
      </Link>
      <Divider />
      <Link
        className={linkClass}
        href={{ pathname: "/properties/add" }}
        onClick={() => afterRedirectCallbackAction?.()}
      >
        Add Property
      </Link>
    </>
  );
};
