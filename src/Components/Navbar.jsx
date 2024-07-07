import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, togglesidebar, setSearchSuggestion } from "../utils/appSlice";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../Constant/Youtube";

function Navbar() {
  const [input, setInput] = useState("");
  const [suggestionVisible, setSuggestionVisible] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion, open } = useSelector((store) => store.app);

  const searchVideo = () => {
    if (input.trim() !== "") {
      dispatch(setCategory(input));
      setInput("");
      setSuggestionVisible(false);
    }
  };

  const toggleSidebar = () => {
    console.log('Toggle sidebar clicked'); // Debug statement
    dispatch(togglesidebar());
  };

  const showSuggestion = async () => {
    if (input.trim() === "") {
      setSuggestionVisible(false);
      return;
    }
    try {
      const res = await axios.get(`${SEARCH_SUGGESTION_API}${input}`);
      dispatch(setSearchSuggestion(res.data[1] || []));
      setSuggestionVisible(true);
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  const openSuggestion = () => {
    setSuggestionVisible(true);
    showSuggestion();
  };

  useEffect(() => {
    showSuggestion();
  }, [input]);

  return (
    <div className="fixed top-0 z-10 flex flex-col sm:flex-row justify-center items-center w-full bg-white shadow-md">
      <div className="px-5 flex justify-between w-full max-w-7xl items-center">
        <div className="flex items-center">
          <GiHamburgerMenu
            onClick={toggleSidebar}
            size={"24px"}
            className="cursor-pointer"
          />
          <img
            width={"115px"}
            src="../assets/naved1.png"
            alt="Logo"
            className="ml-3"
          />
        </div>
        <div className="flex w-[40%] items-center hidden sm:flex relative">
          <div className="flex w-full">
            <input
              onFocus={openSuggestion}
              className="w-full outline-none py-2 px-4 border-2 border-gray-400 rounded-l-full"
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && searchVideo()}
            />
            <button
              onClick={searchVideo}
              className="py-2 border px-4 border-gray-400 rounded-r-full"
            >
              <CiSearch size={25} />
            </button>
          </div>
          {suggestionVisible && searchSuggestion.length > 0 && (
            <div className="absolute top-12 z-50 bg-white w-full shadow-lg rounded-lg border border-gray-200">
              <ul>
                {searchSuggestion.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center px-4 hover:bg-gray-200"
                    onClick={() => {
                      setInput(text);
                      searchVideo();
                    }}
                  >
                    <CiSearch size="24px" />
                    <li className="px-3 py-1 cursor-pointer text-md font-medium">
                      {text}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex w-[10%] justify-between items-center">
          <IoIosNotificationsOutline size={25} className="cursor-pointer" />
          <RiVideoAddLine size={25} className="cursor-pointer" />
          <Avatar
            src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="cursor-pointer"
            size={35}
            round={true}
          />
        </div>
      </div>
      <div className="flex w-full items-center sm:hidden px-5 py-2">
        <div className="w-full py-2 px-4 border-2 border-gray-400 rounded-full">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && searchVideo()}
          />
        </div>
        <button
          onClick={searchVideo}
          className="py-2 border px-4 border-gray-400 rounded-full"
        >
          <CiSearch size={25} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

