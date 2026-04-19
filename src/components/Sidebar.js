import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern

  if (!isMenuOpen) return null;

  return (
    <div>
      <ul className="p-5 shadow-lg w-48">
        <li className="font-bold pt-2">
          <Link to="/">
            <h1>Home</h1>{" "}
          </Link>
        </li>
        <li className="font-bold pt-2">
          <h1>Shorts</h1>
        </li>
        <li className="font-bold pt-2">
          <h1>Subscriptions</h1>
        </li>
        <ul>
          <li>Channel 1</li>
          <li>Channel 2</li>
        </ul>
        <li className="font-bold pt-2">
          <h1>You</h1>
        </li>
        <ul>
          <li>History</li>
          <li>Playlist</li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
