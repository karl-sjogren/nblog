module.exports = function() {
  var express = require('express')
    , resource = require('express-resource-new')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , passport = require('passport')
    , path = require('path')
    , mongo = require('./mongo')
    , port = process.env.PORT || 5000;
  
  // Configure Expressjs middleware
  app.configure(function() {
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.bodyParser());
    app.use(passport.initialize());
    app.use(express.favicon());
    
    console.log('Looking for controllers in ' + path.join(__dirname, 'controllers'));
    app.set('controllers', path.join(__dirname, 'controllers'));
  });
  
  // Connect to mongo-server and setup everything
  mongo();

  // Setup routes as resources (uses express-resource-new)
  app.resource('user');  
  app.resource('post', function() {
    resource = app.resource('comments');
  });
  
  // Load NODETIME-plugin if setup
  if(process.env.NODETIME_ACCOUNT_KEY) {
    require('nodetime').profile({
      accountKey: process.env.NODETIME_ACCOUNT_KEY,
      appName: 'nBlog Development'
    });
  }
  
  // Starts the server
  server.listen(port, function() {
    console.log('http server listening on %d', port);
  });
  
  // Start socket.io
  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
  
  // Things only needed during development
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    console.log(app.routes);
  }
};