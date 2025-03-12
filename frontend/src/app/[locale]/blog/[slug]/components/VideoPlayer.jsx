"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative pt-[50%]">
      {isClient && (
        <ReactPlayer
          url={url}
          controls={true}
          width="100%"
          height="100%"
          playing={false}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
