"use client";
import { FC, useState } from "react";

export const UserMenu: FC = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      {user ? (
        <span> User icon </span>
      ) : (
        <span className="font-bold text-lg"> Login with Google</span>
      )}
    </div>
  );
};
