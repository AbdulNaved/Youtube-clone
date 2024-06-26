import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { API_KEY } from "../Constant/Youtube";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Livechat from "./Livechat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/ChatSlice";

function Watch() {
  const [input, setInput] = useState("");
  const [singlevideo, setSinglevideo] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const getSinglevideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
      );
      setSinglevideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    dispatch(setMessage({ name: "naved", message: input }));
    setInput("");
  };

  useEffect(() => {
    if (videoId) {
      getSinglevideo();
    }
  }, [videoId]);

  return (
    <div className="flex flex-col  lg:flex-row mx-4 md:mt-4 mt-28 h-screen w-screen">
      <div className="lg:w-[70%]  w-screen h-[70%]   mt-12">
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-13">
          <h1 className="font-bold text-lg lg:text-xl">
            {singlevideo?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <Avatar
                src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="cursor-pointer"
                size={35}
                round={true}
              />
              <h1 className="font-bold ml-2">
                {singlevideo?.snippet?.channelTitle}
              </h1>
              <button className="px-3 py-1 font-medium bg-black text-white rounded-full ml-2">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-2 mt-3">
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <AiOutlineLike size="20px" className="mr-2" />
                <span>Like</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <AiOutlineDislike size="20px" className="mr-2" />
                <span>Dislike</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <PiShareFat size="20px" className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                <GoDownload size="20px" className="mr-2" />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] w-full border-gray-300 lg:ml-8 rounded-lg h-fit p-4 mt-36 lg:mt-10">
        <div className="flex justify-between items-center">
          <h1>Top Chat</h1>
          <BsThreeDotsVertical />
        </div>
        <div className="overflow-y-auto h-[28rem] flex flex-col-reverse">
          <Livechat />
        </div>
        <div className="flex items-center justify-between border-t p-2 mt-4">
          <div className="flex items-center w-full">
            <Avatar
              src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="cursor-pointer"
              size={35}
              round={true}
            />
           
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-300 outline-none ml-3 flex-grow"
              type="text"
              placeholder="Send Message..."
            />
            <div
              className="bg-gray-200 rounded-full p-2 cursor-pointer"
              onClick={sendMessage}
            >
              <IoMdSend size="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
