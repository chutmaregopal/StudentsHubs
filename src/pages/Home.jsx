import React, { useState, useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground.jsx";
import AgeVerification from "../AgeVerification.jsx";
import CookiePopup from "../components/CookiePopup.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import VideoThumbnail from "../components/VideoThumbnail.jsx";

function Home() {
	const [isVerified, setIsVerified] = useState(false);
	const [showCookiePopup, setShowCookiePopup] = useState(false);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/videos");
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
		sessionStorage.setItem("isAgeVerified", "true");
		setShowCookiePopup(true);
	};

	useEffect(() => {
		if (sessionStorage.getItem("isAgeVerified") === "true") {
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
						<h2 className="text-2xl text-white font-bold mb-4">
							Recently Uploaded
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
							{videos.map((video) => (
								<VideoThumbnail key={video.id} video={video} />
							))}
						</div>
					</main>
				</div>
				<Footer />
			</div>

			{showCookiePopup && (
				<CookiePopup onAccept={() => setShowCookiePopup(false)} />
			)}
		</div>
	);
}

export default Home;
