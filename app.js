const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Middleware - execute when a route being hit
// app.use('/posts', () => {
//   console.log('Middleware');
// });

// Routes
app.get('/', (req, res) => {
  res.send('We are on home!');
});

app.get('/posts', (req, res) => {
  res.send('We are on POST!');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('MongoDB connected')
);

app.listen(3000, () => console.log('Server is running on port 3000'));
