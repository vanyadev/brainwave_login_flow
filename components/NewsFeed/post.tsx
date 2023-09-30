import React, { FC } from "react";
import { Avatar } from "./avatar";
import Image from "next/image";
import post from "public/images/post-pic.jpg";

type Props = {
  name: string;
  postText: string;
};

export const Post: FC<Props> = ({ name, postText }) => {
  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <div className="flex gap-2">
        <Avatar />
        <div className="flex flex-col	justify-center items-center">
          <p className="font-bold text-[24px]">{name}</p>
          <p>Active</p>
        </div>
      </div>

      <div className="my-3">{postText}</div>
      <Image src={post} alt="postImg" className="w-full rounded-lg" />
      <div className="mt-2 flex justify-between items-center">
        <span className="font-semibold">Like</span>
        <span className="font-semibold">Comment</span>
        <span className="font-semibold">Share</span>
      </div>
    </div>
  );
};
