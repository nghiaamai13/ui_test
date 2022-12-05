import React from "react";
import PostCard from "./PostCard";

const PostContainer = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden ">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostContainer;
