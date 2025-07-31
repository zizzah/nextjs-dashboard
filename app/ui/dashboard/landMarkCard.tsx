import React from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

const LandmarkCard = ({ post }: { post: Post }) => {
  return (
    <div className=" text-white p-4 rounded-xl shadow hover:shadow-lg bg-sky-600" >
      <div className="text-xs text-white">{post.category}</div>
      <h2 className="text-lg font-bold text-white">{post.title}</h2>
      <p className="text-sm text-white mt-1 line-clamp-2">{post.content}</p>
      <div className="text-xs text-white mt-2 flex justify-between">
        <span>By {post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default LandmarkCard;
