import { FC } from "react";
import cx from "classnames";
import Link from "next/link";

type HeroCardProps = {
  title: string;
  description: string;
  href: string;
  className?: string;
};

export const HeroCard: FC<HeroCardProps> = ({
  title,
  description,
  href,
  className,
}) => (
  <Link
    href={href}
    className={cx(
      "p-6 shadow-md flex flex-col gap-4 hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-200 cursor-pointer",
      className,
    )}
  >
    <span className="text-xl font-semibold">{title}</span>
    <span>{description}</span>
  </Link>
);
