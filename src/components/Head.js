import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/appSlice";
import { YOUTUBE_SEARCH_URL } from "../utlis/constants";
import AppLogo from "../assets/StreamixLogoFinal.png";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const searchSuggestions = async () => {
      const response = await fetch(
        YOUTUBE_SEARCH_URL.replace("{searchQuery}", searchQuery),
      );
      const data = await response.json();
      setSuggestions(data.items);
    };

    const timer = setTimeout(() => {
      searchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 shadow-lg m-2">
      <div className="flex gap-4 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
        />
        <img className="h-12 -mt-1" src={AppLogo} alt="logo" />
      </div>

      <div className="col-span-10 flex items-center">
        <div className="relative w-full">
          <div className="w-full flex items-center px-4 py-2 border border-gray-300 rounded-l-full">
            <img
              className="h-4"
              src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/search-893.png"
              alt="search"
            />
            <input
              className="w-full pl-5 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 top-full z-10 bg-white w-full mt-1 rounded-lg shadow-lg p-2">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={
                      suggestion.id?.videoId ||
                      suggestion.id?.channelId ||
                      suggestion.etag
                    }
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
                    <img
                      className="h-4"
                      src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/search-893.png"
                      alt="search"
                    />
                    <span>{suggestion.snippet?.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button className="border hover:bg-gray-300 px-4 py-2 rounded-r-full">
          <img
            className="h-6"
            src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/search-893.png"
            alt="search"
          />
        </button>
      </div>

      <div className="col-span-1 px-5 flex items-center justify-end gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
