// Filename: main.js
//
// We use require.js to do AMD style loading of our applications.
// First configure any aliases along with where they live.
//
requirejs.config({
  text: { env: 'xhr' },
  //
  // By default, load anything from js/libs
  //
  baseUrl: 'js/libs',
  //
  // However, anything where module ID begins w/
  // "app", load it from js/app.
  //
  paths: {
    text: 'require/text',
    jquery: 'jquery/jquery.min',
    underscore: 'underscore/underscore',
    backbone: 'backbone/backbone',
    foundationClearing: 'foundation/jquery.foundation.clearing',
    app: '../app/photo-manager'
  },
  //
  // Non-AMD modules like underscore / backbone.
  //
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    foundationClearing: {
      deps: ["jquery"]
    }
  }
});

// Load our app and pass it into our definition function.
requirejs(['app/app'],
          function(App) {
            App.initialize();
          });

