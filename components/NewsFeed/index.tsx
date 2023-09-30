import React, { FC } from "react";
import { Post } from "./post";

const news = [
  {
    id: 1,
    name: "Lori",
    postText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, delectus inventore modi tempore hic fuga reiciendis quae fugiat molestias repellendus?",
  },
  {
    id: 2,
    name: "Lori",
    postText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, delectus inventore modi tempore hic fuga reiciendis quae fugiat molestias repellendus?",
  },
  {
    id: 3,
    name: "Lori",
    postText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, delectus inventore modi tempore hic fuga reiciendis quae fugiat molestias repellendus?",
  },
];

export const NewsFeed: FC = () => {
  return (
    <div className="flex flex-col gap-y-5 ">
      {news.map((news) => (
        <Post name={news.name} postText={news.postText} key={news.id} />
      ))}
    </div>
  );
};
