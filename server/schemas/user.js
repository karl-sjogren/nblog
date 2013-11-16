var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    username: { type: String, trim: true },
    password: { type: String, trim: true },
    token: { type: String, trim: true },
    type: { type: String, trim: true }
});

module.exports = mongoose.model('Post', schema);