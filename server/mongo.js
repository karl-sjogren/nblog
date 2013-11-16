module.exports = function() {
  var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/nblog',
      mongoose = require('mongoose');
  
  mongoose.connect(mongoUri, function (err, res) {
    if (err) {
      console.log ('ERROR connecting to: ' + mongoUri + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + mongoUri);
    }
  });
};