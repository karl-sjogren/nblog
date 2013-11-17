var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    username: { type: String, trim: true },
    password: { type: String, trim: true },
    token: { type: String, trim: true },
    type: { type: String, trim: true }
});

module.exports = mongoose.model('User', schema);