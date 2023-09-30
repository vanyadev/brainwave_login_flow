import Image from "next/image";
import React, { FC } from "react";
import avatar from "public/images/avatar-1.jpg";

export const Avatar: FC = () => {
  return (
    <div className="relative">
      <Image
        src={avatar}
        alt="avatar"
        width={60}
        height={60}
        className="rounded"
      />
      <div className="w-4 h-4 rounded-full bg-green-400 absolute top-[-5px] left-[-5px]" />
    </div>
  );
};
