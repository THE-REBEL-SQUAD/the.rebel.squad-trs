const axios = require("axios");

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ success: false, message: "No URL provided" });

  try {
    const apiRes = await axios.get(`https://rebel-api-server-ld11.onrender.com/media?url=${encodeURIComponent(url)}`);
    const data = apiRes.data;

    if (data.success && data.result) {
      res.status(200).json({ success: true, result: data.result });
    } else {
      res.status(200).json({ success: false, message: "Failed to fetch video link" });
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Error fetching video" });
  }
}
