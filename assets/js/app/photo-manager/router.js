// Filename: router.js
//
// Our photo-manager router.
//
define(
  [
    'jquery',
    'underscore',
    'backbone',
    'app/views/home'
  ],
  function($, _, Backbone, HomeView) {
    console.log('photo-manager.router is loading, jquery type - ' + typeof($) + ', backbone type - ' + typeof(Backbone) + ', home view type - ' + typeof(HomeView));
    var debug = true;
    var Router = Backbone.Router.extend({

      routes: {
        "home/*path": "home"
      },

      //
      // Initialization
      //
      initialize: function(options) {
        !debug || console.log('photo-manager.router.initialize: initializing...');
      },

      home: function(path) {
        !debug || console.log('photo-manager.router.initialize: about to render home, path - ' + path);
        var view = new HomeView({path: path});
        view.once(view.id + ":rendered",
                  function() {
                    $('#right-column').html(view.$el);
                  });
        view.render();
      }

    });
    var initialize =  function() {
      !debug || console.log('Initializing router...');
      router = new Router();
      Backbone.history.start({pushState: true,
                              root: "/photos#home/library/all-photos"});
      router.navigate('#home/library/all-photos', {trigger: true, replace: false});
    };
    return {
      initialize: initialize
    };
  }
);
