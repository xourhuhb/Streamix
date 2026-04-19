import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const watchId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-5">
      <iframe
        width="1350"
        height="750"
        src={`https://www.youtube.com/embed/${watchId}?si=9SA-1SVY7aZXCA4q`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
