const express = require("express");
const cors = require("cors");
const apiRoutes = require("./api");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve index.html

// API routes
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
