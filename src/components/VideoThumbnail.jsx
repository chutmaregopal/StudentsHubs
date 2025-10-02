import React from "react";
 const VideoThumbnail = ({ video }) => (
  <a href={`/video/${video.id}`} className="text-white block group">
    <div className="bg-gray-800 aspect-video rounded-lg mb-2 relative overflow-hidden">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
      />
      <span className="absolute bottom-2 right-2 bg-black/70 text-xs px-1.5 py-0.5 rounded">
        {video.duration}
      </span>
    </div>
    <h3 className="font-semibold leading-tight group-hover:text-orange-400">{video.title}</h3>
    <p className="text-gray-400 text-sm">{video.creator}</p>
    <p className="text-gray-500 text-xs">{video.views} views</p>
  </a>
);


export default VideoThumbnail