const express = require('express');
const cors = require('cors');
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

// Aapka video data
const videosData = [
  // ... yahan aapke videos ka data ...
];

// Aapka API route
app.get('/api/videos', (req, res) => {
  res.json(videosData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});