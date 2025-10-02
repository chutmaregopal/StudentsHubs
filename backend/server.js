import express from "express"
import cors from "cors"
const app = express();
const PORT = 5000;

app.use(cors());

// OPTION 1: PROFESSIONAL JSON RESPONSE (RECOMMENDED)
app.get('/', (req, res) => {
  res.json({ 
    status: 'running', 
    message: 'Welcome to the Video Portal API!' 
  });
});

//  video data
export const videosData = [
  {
    id: 1,
    title: "React Crash Course for Beginners",
    creator: "Dev Guru",
    thumbnail: "https://picsum.photos/300/200?random=1",
    views: "2.3K",
    duration: "12:34"
  },
  {
    id: 2,
    title: "Mastering CSS Grid in 20 Minutes",
    creator: "Design Ninja",
    thumbnail: "https://picsum.photos/300/200?random=2",
    views: "1.1K",
    duration: "08:45"
  },
  {
    id: 3,
    title: "JavaScript ES6 Features Explained",
    creator: "Code Wizard",
    thumbnail: "https://picsum.photos/300/200?random=3",
    views: "4.7K",
    duration: "15:20"
  },
  {
    id: 4,
    title: "Node.js + Express API Tutorial",
    creator: "Backend Boss",
    thumbnail: "https://picsum.photos/300/200?random=4",
    views: "3.9K",
    duration: "10:12"
  },
  {
    id: 5,
    title: "Learn TailwindCSS with Examples",
    creator: "UI Pro",
    thumbnail: "https://picsum.photos/300/200?random=5",
    views: "5.2K",
    duration: "09:10"
  },
  {
    id: 6,
    title: "MongoDB Basics Crash Course",
    creator: "Data Guru",
    thumbnail: "https://picsum.photos/300/200?random=6",
    views: "1.6K",
    duration: "11:05"
  },
  {
    id: 7,
    title: "Authentication in React + JWT",
    creator: "Auth Master",
    thumbnail: "https://picsum.photos/300/200?random=7",
    views: "8.4K",
    duration: "14:00"
  },
  {
    id: 8,
    title: "Deploying Apps with Vercel",
    creator: "Cloud Hero",
    thumbnail: "https://picsum.photos/300/200?random=8",
    views: "2.1K",
    duration: "07:34"
  },
  {
    id: 9,
    title: "Async/Await Deep Dive",
    creator: "JS Pro",
    thumbnail: "https://picsum.photos/300/200?random=9",
    views: "6.5K",
    duration: "13:59"
  },
  {
    id: 10,
    title: "Styled Components in React",
    creator: "Frontend Queen",
    thumbnail: "https://picsum.photos/300/200?random=10",
    views: "3.3K",
    duration: "05:45"
  },
  {
    id: 11,
    title: "Understanding REST APIs",
    creator: "Tech Bro",
    thumbnail: "https://picsum.photos/300/200?random=11",
    views: "9.1K",
    duration: "16:10"
  },
  {
    id: 12,
    title: "React Router v6 Tutorial",
    creator: "Routing King",
    thumbnail: "https://picsum.photos/300/200?random=12",
    views: "7.7K",
    duration: "08:55"
  },
  {
    id: 13,
    title: "Debugging JavaScript Like a Pro",
    creator: "Bug Hunter",
    thumbnail: "https://picsum.photos/300/200?random=13",
    views: "2.9K",
    duration: "12:12"
  },
  {
    id: 14,
    title: "Firebase Crash Course",
    creator: "Cloud Ninja",
    thumbnail: "https://picsum.photos/300/200?random=14",
    views: "4.2K",
    duration: "18:00"
  },
  {
    id: 15,
    title: "React Hooks Explained Simply",
    creator: "Hook Master",
    thumbnail: "https://picsum.photos/300/200?random=15",
    views: "6.0K",
    duration: "10:50"
  },
  {
    id: 16,
    title: "TypeScript for React Developers",
    creator: "TS Wizard",
    thumbnail: "https://picsum.photos/300/200?random=16",
    views: "1.8K",
    duration: "19:22"
  },
  {
    id: 17,
    title: "Building a Fullstack MERN App",
    creator: "Fullstack Hero",
    thumbnail: "https://picsum.photos/300/200?random=17",
    views: "10.2K",
    duration: "22:11"
  },
  {
    id: 18,
    title: "Next.js SSR vs SSG Explained",
    creator: "Next Guru",
    thumbnail: "https://picsum.photos/300/200?random=18",
    views: "4.5K",
    duration: "09:59"
  },
  {
    id: 19,
    title: "Redux Toolkit in Action",
    creator: "State Boss",
    thumbnail: "https://picsum.photos/300/200?random=19",
    views: "5.7K",
    duration: "13:25"
  },
  {
    id: 20,
    title: "Docker for Beginners",
    creator: "DevOps Master",
    thumbnail: "https://picsum.photos/300/200?random=20",
    views: "12.4K",
    duration: "17:08"
  }
];  


// Aapka API route
app.get('/api/videos', (req, res) => {
  res.json(videosData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

