"use client";
import Link from "next/link";
import { FC, Fragment } from "react";
import cx from "classnames";
import { Divider } from "@/components/Divider/Divider";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  afterRedirectCallbackAction?: () => void;
};

type LinkItem = {
  href: string;
  label: string;
};

export const PageLinks: FC<Props> = ({
  className,
  afterRedirectCallbackAction,
}) => {
  const pathname = usePathname();

  const linkList: Array<LinkItem> = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/properties/add", label: "Add Property" },
  ];

  return linkList.map((link, index) => {
    const activeLinkClass = "border-b-2 border-green-500";
    const linkClass = cx(
      "font-bold text-lg content-center align-end text-center",
      className,
    );

    return (
      <Fragment key={link.href}>
        <Link
          key={link.href}
          className={linkClass}
          href={{ pathname: link.href }}
          onClick={() => afterRedirectCallbackAction?.()}
        >
          <span
            className={cx("p-2", { [activeLinkClass]: pathname === link.href })}
          >
            {link.label}
          </span>
        </Link>
        {index !== linkList.length - 1 && <Divider />}
      </Fragment>
    );
  });
};
