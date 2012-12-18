//
//  PLM Media Manager Demo:
//
//    This is the main entry point.
//

process.on('uncaughtException', function(err) {
    console.log('index.js: Uncaught exception - ' + err);
    process.exit(-1);
});

var path = require('path');
var _ = require('underscore');

var appjs = module.exports = require('appjs');
//
//  Decided to use the browserver-router, see: 
//    * http://github.com/jed/browserver-router or
//    *https://npmjs.org/package/browserver-router. 
//  Reasons for using it:
//    * With it we could instantiate a simple router, unlike Express, we would instantiate an
//      'express server', which at a minimum feels odd even if it works.
//    * The routing is based upon backbone.js's so it will be familiar territory if we use 
//      that on the front end.
//
var Router = require('browserver-router');

var assetDir = __dirname + '/assets';
appjs.serveFilesFrom(assetDir);

var router = Router({
  '/': {
    GET: function(req, res) {
      var showPath = path.join(assetDir, '/html/dashboard/show.html');
      console.log('index.js: Handling - GET /, path = ' + showPath);
      res.sendFile(200, showPath);
      console.log('index.js: Handled - GET /, status code = ' + res.statusCode);
    }
  },

  '/photos': {
    GET: function(req, res) {
      var showPath = path.join(assetDir, '/html/photo-manager/show.html');
      console.log('index.js: Handling - GET /photos, path = ' + showPath);
      res.sendFile(200, showPath);
      console.log('index.js: Handled - GET /photos, status code = ' + res.statusCode);
    }
  },

  '/coming-soon': {
    GET: function(req, res) {
      var showPath = path.join(assetDir, '/html/static-pages/coming-soon.html');
      console.log('index.js: Handling - GET /coming-soon, path = ' + showPath);
      res.sendFile(404, showPath);
      console.log('index.js: Handled - GET /coming-soon, status code = ' + res.statusCode);
    }
  }

});

//
//  Init the application which implies starting TouchDB.
//
var app = require('MediaManagerAppSupport').init(router);
var querystring = require('querystring');

app.on('localStorageExit', function() {
    console.log('index.js: Local storage sub-process has exited. APP will now shut down.');
    process.exit(-1);
});

//
//  Make this fallback to the appjs router.
//
var fallbackHandler = appjs.router.handle;

appjs.router.handle = function(req, res) {
  var pat = /^\/(css)|(js)|(fonts)|(html)\/*$/;
  if (req.pathname.match(pat)) {
    console.log('index.js: Routing with appjs router for - ' + req.method + ' ' + req.url);
    fallbackHandler.apply(appjs.router, arguments);
  }
  else {
    req.method = req.method.toUpperCase();
    req.originalUrl = req.url;
    req.url = req.pathname;
    if (req.method === 'POST')  {
      console.log('index.js: Received request - ' + req.method + ' ' + req.url + ', original url - ' + req.originalUrl + ', headers - ' + JSON.stringify(req.headers) + ', post - ' + req.post() + ', data - ' + JSON.stringify(req.data));
      //
      //  Currently, cannot add listeners to get data. Data must be sent as URL encoded query args, and is then available via req.data.
      //  So, at least for now, the post code, is the same as the get code, but this will probably change.
      //
      console.log('index.js: Routing with browserver-router for - ' + req.method + ' ' + req.url + ', original url - ' + req.originalUrl);
      router.apply(router, arguments);
    }
    else {
      console.log('index.js: Routing with browserver-router for - ' + req.method + ' ' + req.url + ', original url - ' + req.originalUrl);
      router.apply(router, arguments);
    }
  }
};

var window = appjs.createWindow({
    width: appjs.screenWidth(),
    height: appjs.screenHeight(),
    resizable: true
});

window.on('create', function(){
  console.log("index.js: Window Created");
  window.frame.show();
  window.frame.center();
});

window.on('ready', function(){
  console.log("index.js: Window Ready");
  window.process = process;
  window.module = module;

  function F12(e){ return e.keyIdentifier === 'F12' }
  //
  // e.metaKey -> Command
  // e.altKey -> Option
  // e.ctrlKey -> Option
  //
  function Command_Control_F(e){ return e.keyCode === 70 && e.metaKey && e.ctrlKey }
  function Command_Option_J(e){ return e.keyCode === 74 && e.metaKey && e.altKey }
  function Escape(e){ return e.keyCode === 27 }

  window.addEventListener('keydown', function(e){
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
    else if (Command_Control_F(e)) {
      if (window.frame.state === 'fullscreen') {
        console.log('index.js: Fullscreen - Restoring!');
        window.frame.restore();
      }
      else if (window.frame.state === 'normal') {
        console.log('index.js: Normal - Going full screen!');
        window.frame.fullscreen();
      }
      else if (window.frame.state === 'maximized') {
        console.log('index.js: Maximized - Going full screen!');
        window.frame.fullscreen();
      }
      else if (window.frame.state === 'minimized') {
        console.log('index.js: maximizing!');
        window.frame.maximize();
      }
    }
    else if (Escape(e)) {
        console.log('index.js: Got escape');
        window.frame.restore();
    }
  });
});

window.on('close', function(){
    console.log("index.js: Window Closed");
    app.shutdown();
});

