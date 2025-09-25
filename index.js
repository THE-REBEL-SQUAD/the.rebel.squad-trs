const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve frontend

// API proxy endpoint
app.get("/api/media", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ success: false, message: "No URL provided" });

  try {
    const apiRes = await axios.get(`https://rebel-api-server-ld11.onrender.com/media?url=${encodeURIComponent(url)}`);
    const data = apiRes.data;

    if (data.success && data.result) {
      res.json({ success: true, result: data.result });
    } else {
      res.json({ success: false, message: "Failed to fetch video link" });
    }
  } catch (err) {
    console.error(err.message);
    res.json({ success: false, message: "Error fetching video" });
  }
});

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve downloader.html
app.get("/downloader", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "downloader.html"));
});

// rebelchat bot.html
app.get("/rebel_bot", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "rebel_bot.html"));
});

// rebelchat bot.html
app.get("/media_to_link", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "media_to_link.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
