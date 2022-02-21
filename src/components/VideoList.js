import React from "react";

const VideoList = ({ videos, selectVideo }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <div
        key={video.id.videoId}
        onClick={() => {
          selectVideo(video);
        }}
      >
        <h2>{video.snippet.title}</h2>
        <img src={video.snippet.thumbnails.medium.url} alt="" />
      </div>
    );
  });

  return <div>{renderedVideos}</div>;
};

export default VideoList;
