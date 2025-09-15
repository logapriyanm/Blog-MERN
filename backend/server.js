require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/posts.js");
const categoryRoutes = require("./routes/categories.js");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*" // Replace * with your frontend URL in production
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ DB error:", err));

mongoose.connection.once("open", async () => {
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("Collections in DB:", collections.map(c => c.name));
});

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Blog MERN Backend is running!");
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
 