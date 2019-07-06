const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', (req, res) => {
  res.send('We are on POST!');
});

router.post('/', (req, res) => {
  console.log(req.body.title);
});

module.exports = router;
