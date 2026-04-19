import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utlis/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch(YOUTUBE_VIDEO_URL);
      const data = await response.json();
      setVideos(data.items);
    };

    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap p-2 gap-5">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
