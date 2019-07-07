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
router.get('/:post_id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    res.json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE SPECIFIC POST
router.delete('/:post_id', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.post_id });
    res.json(removedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//UPDATE SPECIFIC POST
router.patch('/:post_id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.post_id },
      { $set: { title: req.body.title } }
    );

    res.json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
