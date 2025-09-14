const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require('./routes/posts.js');
const categoryRoutes = require('./routes/categories.js')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/blog')
.then(()=> console.log("MongoDb connected"))
.catch(err => console.log("DB error",err));


// Routes
app.use('/api/posts',postRoutes);
app.use('/api/categories',categoryRoutes);

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));