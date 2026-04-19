import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};

  const { title, channelTitle, thumbnails, publishedAt } = snippet || {};
  const publishedDate = publishedAt ? new Date(publishedAt) : null;

  const getTimeAgo = (date) => {
    if (!date) return "";
    const now = new Date();
    let seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 0) seconds = 0;

    const units = [
      { name: "year", seconds: 31536000 },
      { name: "month", seconds: 2592000 },
      { name: "day", seconds: 86400 },
      { name: "hour", seconds: 3600 },
      { name: "minute", seconds: 60 },
    ];

    for (const unit of units) {
      const value = Math.floor(seconds / unit.seconds);
      if (value > 0) {
        return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
      }
    }

    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  };

  const formatViewCount = (count) => {
    const views = Number(count ?? 0);
    if (!Number.isFinite(views) || views <= 0) return "0 views";
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1).replace(/\.0$/, "")}M views`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1).replace(/\.0$/, "")}K views`;
    }
    return `${views} views`;
  };

  const publishedAgo = getTimeAgo(publishedDate);

  return (
    <div className="h-45 w-80 rounded-lg p-2  hover:bg-gray-100 shadow-lg cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        className="rounded-lg"
        alt="thumbnail"
      />
      <p className="font-medium  text-md truncate w-70 py-2">{title}</p>
      <p>{channelTitle}</p>
      <span className="flex gap-7">
        <p>{formatViewCount(statistics?.viewCount)}</p>
        <li>{publishedAgo}</li>
      </span>
    </div>
  );
};

export default VideoCard;
