const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve public files

// API route
app.use("/api", apiRoutes);

// Catch-all: serve index.html for all other routes (for Vercel)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
