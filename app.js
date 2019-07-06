const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('We are on home!');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('MongoDB connected')
);

app.listen(3000, () => console.log('Server is running on port 3000'));
