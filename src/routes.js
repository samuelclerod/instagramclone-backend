const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostContoller');

const routes = new express.Router();
const upload = multer();

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;