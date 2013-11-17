var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  title: { type: String, trim: true },
  slug: { type: String, trim: true },
  content: { type: String, trim: true },
  author: {type : mongoose.Schema.ObjectId, ref : 'User' },
  comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date },
  modifiedAt: { type: Date }
});

module.exports = mongoose.model('Post', schema);