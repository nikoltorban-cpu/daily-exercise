const postsModel = require('../models/postsModel');

const getPosts = async (req, res) => {
  const posts = await postsModel.getAllPosts();
  res.json(posts);
};

const getPost = async (req, res) => {
  const post = await postsModel.getPostById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
};

const addPost = async (req, res) => {
  const { title, content } = req.body;

  const post = await postsModel.createPost(title, content);

  res.status(201).json(post);
};

const editPost = async (req, res) => {
  const { title, content } = req.body;

  const post = await postsModel.updatePost(
    req.params.id,
    title,
    content
  );

  res.json(post);
};

const removePost = async (req, res) => {
  await postsModel.deletePost(req.params.id);

  res.json({ message: 'Post deleted' });
};

module.exports = {
  getPosts,
  getPost,
  addPost,
  editPost,
  removePost,
};