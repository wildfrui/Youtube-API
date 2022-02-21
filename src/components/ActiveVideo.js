import React from "react";

const ActiveVideo = ({ video }) => {
  console.log(video);
  if (!video) {
    return null;
  }

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default ActiveVideo;
