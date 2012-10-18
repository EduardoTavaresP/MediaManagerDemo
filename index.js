var path = require('path');
var app = module.exports = require('appjs');

var assetDir = __dirname + '/assets';
app.serveFilesFrom(assetDir);

app.router.get('/photos', function(req, res) {
    var showPath = path.join(assetDir, '/html/photo-manager/show.html');
    console.log('index.js: Handling - GET /photos, path = ' + showPath);
    res.sendFile(200, showPath);
    console.log('index.js: Handled - GET /photos, status code = ' + res.statusCode);
});

var window = app.createWindow({
  width  : 640,
  height : 460,
  icons  : __dirname + '/assets/images/'
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
  function Command_Option_J(e){ return e.keyCode === 74 && e.metaKey && e.altKey }

  window.addEventListener('keydown', function(e){
    if (F12(e) || Command_Option_J(e)) {
      window.frame.openDevTools();
    }
  });
});

window.on('close', function(){
  console.log("index.js: Window Closed");
});
