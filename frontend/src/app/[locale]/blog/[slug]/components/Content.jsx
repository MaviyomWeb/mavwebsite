import React from "react";
import Markdown from "react-markdown";
import VideoPlayer from "./VideoPlayer";

const Content = ({ data: blog}) => {
  const videoUrl = "https://www.youtube.com/watch?v=LXb3EKWsInQ";

  return (
    <div className="blog-post   ">
      <div className="prose  prose-headings:font-dmSans prose-figure prose-hr:my-1  max-w-4xl rounded-md  prose-headings:mb-4 prose-headings:text-secondary prose-h1:text-3xl md:prose-h1:text-[36px] prose-h1:leading-[44px]  md:prose-h1:leading-[54px]  list-desc marker:text-black text-black  text-lg  prose-img:rounded-md   ">
        <Markdown>{blog?.content}</Markdown>
      </div>

      {/* <div className="mt-10">
        <VideoPlayer url={videoUrl} />
      </div> */}
    </div>
  );
};

export default Content;
