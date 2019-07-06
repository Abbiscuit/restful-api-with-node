const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', (req, res) => {
  res.send('We are on POST!');
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  // post
  //   .save()
  //   .then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.json({ message: err });
  //   });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
