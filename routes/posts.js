const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// SUBMITS A POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST
router.get('/:post_id', (req, res) => {
  console.log(req.params.post_id);
});

module.exports = router;
