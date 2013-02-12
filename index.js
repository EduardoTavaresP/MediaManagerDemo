//
//  PLM Media Manager Demo:
//
//    This is the main entry point.
//

process.on('uncaughtException', function(err) {
  var msg = 'index.js: Uncaught exception - ' + err;
  if (app && app.logger) {
    app.logger.error(msg);
  } else {
    console.log(msg);
  }
});

var path = require('path');
var _ = require('underscore');

//
//  The following requires of node-uuid through MediaManagerApi/lib/NotificationsWsLike are performed here to get these modules
//  cached. They are latter required in browser context. If they are not cached here, then the app
//  crashes in browser context when the require is executed. This appears to be some sort of bug in the sense that
//  node.js's require does NOT run properly in browser context.
//
var uuid = require('node-uuid');
var WebSocket = require('MediaManagerApi/lib/NotificationsWsLike');
require('ImageService/lib/plm-image/ImageService');

var appjs = module.exports = require('appjs');

var assetDir = __dirname + '/assets';
appjs.serveFilesFrom(assetDir);

//
//  Define routes for various paths. Note, based upon the browserver router
//  we are using, ie:
//
//    * http://github.com/jed/browserver-router or
//    * https://npmjs.org/package/browserver-router. 
//
var routes = {
  '/': {
    GET: function(req, res) {
      var showPath = path.join(assetDir, '/html/dashboard/show.html');
      app.logger.info('index.js: Handling - GET /, path = ' + showPath);
      res.sendFile(200, showPath);
      app.logger.info('index.js: Handled - GET /, status code = ' + res.statusCode);
    }
  },

  '/photos': {
    GET: function(req, res) {
      var showPath = path.join(assetDir, '/html/photo-manager/show.html');
      app.logger.info('index.js: Handling - GET /photos, path = ' + showPath);
      res.sendFile(200, showPath);
      app.logger.info('index.js: Handled - GET /photos, status code = ' + res.statusCode);
    }
  },

  '/coming-soon': {
    GET: function(req, res) {
      var showPath = path.join(assetDir, '/html/static-pages/coming-soon.html');
      app.logger.info('index.js: Handling - GET /coming-soon, path = ' + showPath);
      res.sendFile(404, showPath);
      app.logger.info('index.js: Handled - GET /coming-soon, status code = ' + res.statusCode);
    }
  }
};

//
//  Init the application which implies starting TouchDB.
//
var app = require('MediaManagerAppSupport').init(appjs, routes);
var querystring = require('querystring');

app.on('localStorageExit', function() {
  app.logger.error('index.js: Local storage sub-process has exited. APP will now shut down.');
  process.exit(-1);
});

var window = appjs.createWindow({
    width: appjs.screenWidth(),
    height: appjs.screenHeight(),
    resizable: true
});

window.on('create', function(){
  app.logger.info("index.js: Window Created");
  window.frame.show();
  window.frame.center();
  window.appReady = false;
});

window.on('ready', function(){
  app.logger.info("index.js: Window Ready");
  window.require = require;
  // window.requirejs = requirejs;
  window.process = process;
  window.module = module;
  window.appReady = true;
  window.processedAppReady = false;

  window.dispatchEvent(new window.Event('app-ready'));

  app.logger.info('index.js: Dispatched app-ready event');

  function F12(e){ return e.keyIdentifier === 'F12';}
  //
  // e.metaKey -> Command
  // e.altKey -> Option
  // e.ctrlKey -> Option
  //
  function Command_Control_F(e){ return e.keyCode === 70 && e.metaKey && e.ctrlKey; }
  function Command_Option_J(e){ return e.keyCode === 74 && e.metaKey && e.altKey; }
  function Escape(e){ return e.keyCode === 27; }

  window.addEventListener('keydown', function(e){
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
    else if (Command_Control_F(e)) {
      if (window.frame.state === 'fullscreen') {
        app.logger.info('index.js: Fullscreen - Restoring!');
        window.frame.restore();
      }
      else if (window.frame.state === 'normal') {
        app.logger.info('index.js: Normal - Going full screen!');
        window.frame.fullscreen();
      }
      else if (window.frame.state === 'maximized') {
        app.logger.info('index.js: Maximized - Going full screen!');
        window.frame.fullscreen();
      }
      else if (window.frame.state === 'minimized') {
        app.logger.info('index.js: maximizing!');
        window.frame.maximize();
      }
    }
    else if (Escape(e)) {
      app.logger.info('index.js: Got escape');
      window.frame.restore();
    }
  });
});

window.on('close', function(){
  app.logger.info("index.js: Window Closed");
  app.shutdown();
});

