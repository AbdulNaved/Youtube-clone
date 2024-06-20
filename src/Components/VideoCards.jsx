import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';
import { API_KEY } from '../Constant/Youtube';

const VideoCards = ({ item }) => {
  const [ytIcon, setIcon] = useState("");

  const getYoutubeChannelname = async () => {
    try {
      const res = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
        params: {
          part: 'snippet',
          id: item.snippet.channelId,
          key: API_KEY
        }
      });
      setIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannelname();
  }, [item.snippet.channelId]);

  return (
    <div className='w-full cursor-pointer my-2'>
      <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
      <div className="flex mt-2">
        <img className='cursor-pointer h-8 w-8 rounded-full' src={ytIcon} size={35} round={true} />
        <div className="ml-2">
          <h1 className='font-bold text-sm md:text-base'>{item.snippet.title}</h1>
          <p className='text-xs md:text-sm text-gray-500'>{item.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;



