var Post = require('../schemas/post');

module.exports = {
  all: function(req, res, next) {
    // do some preloading or user authentication here
    next();
  },
  index: function(req, res) {
    console.log(Post.find());
    Post.find().exec(function(err, posts) {
      res.send(posts);
    });
    // Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
  },
  show: function(req, res) {
    Post.findOne({ _id: req.params.post }).exec(function(err, posts) {
      res.send(posts);
    });
  },
  new: function(req, res) {
    res.send('new post');
  },
  create: function(req, res) {
    Post.create(req.body).exec(function(err, posts) {
      res.send(posts);
    });
  },
  edit: function(req, res) {
    res.send('edit post ' + req.params.article);
  },
  update: function(req, res) {
    Post.findOne({ _id: req.body._id }).exec(function(err, post) {
      post.content = req.body.content;
      
      Post.update()
      res.send(posts);
    });
  },
  destroy: function(req, res) {
    res.send('delete post ' + req.params.article);
  }
};