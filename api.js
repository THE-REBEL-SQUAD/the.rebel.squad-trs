const express = require("express");
const axios = require("axios");
const router = express.Router();

// Proxy endpoint
router.get("/media", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.json({ success: false, message: "No URL provided" });

  try {
    const apiRes = await axios.get(
      `https://rebel-api-server-ld11.onrender.com/media?url=${encodeURIComponent(url)}`
    );
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

module.exports = router;

