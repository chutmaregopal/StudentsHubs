import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground.jsx';
import AgeVerification from './AgeVerification.jsx';
import CookiePopup from './CookiePopup.jsx';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

// Video Thumbnail Component
const VideoThumbnail = ({ video }) => (
  <a href={`/video/${video.id}`} className="text-white block group">
    <div className="bg-gray-800 aspect-video rounded-lg mb-2 relative overflow-hidden">
      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute bottom-2 right-2 bg-black/70 text-xs px-1.5 py-0.5 rounded">23:45</span>
    </div>
    <h3 className="font-semibold leading-tight group-hover:text-orange-400">{video.title}</h3>
    <p className="text-gray-400 text-sm">{video.creator}</p>
    <p className="text-gray-500 text-xs">{video.views} views</p>
  </a>
);


function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Backend se data nahi mila:", error);
      }
    };
    if (isVerified) fetchVideos();
  }, [isVerified]);

  const handleEnter = () => {
    setIsVerified(true);
    sessionStorage.setItem('isAgeVerified', 'true');
    setShowCookiePopup(true);
  };
  
  useEffect(() => {
    if (sessionStorage.getItem('isAgeVerified') === 'true') {
      setIsVerified(true);
    }
  }, []);

  if (!isVerified) {
    return (
      <>
        <ParticleBackground />
        <AgeVerification onEnter={handleEnter} />
      </>
    );
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <ParticleBackground />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <Navbar />
        
        <div className="flex-grow max-w-screen-2xl mx-auto flex w-full">
          <Sidebar />
          <main className="flex-grow p-4">
            <h2 className="text-2xl text-white font-bold mb-4">Recently Uploaded</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {videos.map(video => (
                <VideoThumbnail key={video.id} video={video} />
              ))}
            </div>
          </main>
        </div>
        <Footer />
      </div>
      
      {showCookiePopup && <CookiePopup onAccept={() => setShowCookiePopup(false)} />}
    </div>
  );
}

export default App;