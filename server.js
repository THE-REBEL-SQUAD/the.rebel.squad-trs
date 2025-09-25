const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public")); // serve index.html and downloader.html
app.use(express.json());

// Sample video API endpoint
// Replace with real TikTok/Facebook/Instagram scraping API
app.get("/api/media", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ success: false, message: "No URL provided" });

  try {
    // Example: Replace this with your actual scraping/downloader API
    // For now we just return dummy video/audio links
    res.json({
      success: true,
      result: {
        title: "Sample Video",
        cover: "https://via.placeholder.com/300x200.png?text=Thumbnail",
        no_watermark_video: "https://www.w3schools.com/html/mov_bbb.mp4",
        audio: "https://www.w3schools.com/html/horse.mp3",
        author: { nickname: "TRS" }
      }
    });

  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Failed to fetch media" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
