const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

router.get('/posts', postsController.getPosts);

router.get('/posts/:id', postsController.getPost);

router.post('/posts', postsController.addPost);

router.put('/posts/:id', postsController.editPost);

router.delete('/posts/:id', postsController.removePost);

module.exports = router;