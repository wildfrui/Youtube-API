import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import ActiveVideo from "./ActiveVideo";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  useEffect(() => {
    handleSubmit("Cats");
    setSelectedVideo(videos[0]);
  }, [videos]);

  const handleSubmit = async (term) => {
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: term,
          maxResults: 5,
          key: "AIzaSyDNe8x1Ocdiw9uhhJJ2pPcbn_A3jGcr_mE",
        },
      }
    );
    setVideos(data.items);
  };

  return (
    <div>
      <SearchBar onSearch={handleSubmit}></SearchBar>
      <ActiveVideo video={selectedVideo}></ActiveVideo>
      <VideoList videos={videos} selectVideo={setSelectedVideo}></VideoList>
    </div>
  );
};

export default App;
