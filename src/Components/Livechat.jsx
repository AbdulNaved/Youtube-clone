import React, { useEffect } from "react";
//import ChatMessage from "./ChatMessage";
import ChatMessage from "./ChatMessege";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from '../utils/ChatSlice';
import { generateRandomMessage, generateRandomName } from "../utils/Helper";

const Livechat = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(16),
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="space-y-2">
        {messages.map((item, idx) => (
          <ChatMessage key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Livechat;



