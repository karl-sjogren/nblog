var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  content: { type: String, trim: true },
  posted: { type: Date },
  author: { type: String, trim: true },
  email: { type: String, trim: true },
  gravatar: { type: String, trim: true }
});

module.exports = mongoose.model('Comment', schema);