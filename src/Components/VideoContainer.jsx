import React, { useEffect } from 'react';
import axios from 'axios';
import { YOUTUBE_VIDEO_API, API_KEY } from '../Constant/Youtube';
import VideoCards from './VideoCards';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';
import { Vortex } from 'react-loader-spinner'
;

function VideoContainer() {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API, {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          key: API_KEY,
          maxResults: 50
        }
      });
      dispatch(setHomeVideo(res.data.items || []));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      dispatch(setHomeVideo(res.data.items || []));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchingYoutubeVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
      {video.length > 0 ? (
        video.map(item => (
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
            <VideoCards item={item} />
          </Link>
        ))
      ) : (
        <div className="flex justify-center items-center w-[100%] h-[100%]">
            <Vortex 
        visible={true}
        height="100%"
        width="100%"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
        </div>
        
      )}
    </div>
  );
}

export default VideoContainer;



