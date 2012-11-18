// Filename: router.js
//
// Our photo-manager router.
//
define([
  'jquery',
  'underscore',
  'backbone',
  'app/views/home'],
       function($, _, Backbone, HomeView) {
         console.log('photo-manager.router is loading, jquery type - ' + typeof($) + ', backbone type - ' + typeof(Backbone) + ', home view type - ' + typeof(HomeView));
         var debug = true;
         var Router = Backbone.Router.extend({
           routes: {
             "home": "home"
           },
           //
           // Initialization
           //
           initialize: function(options) {
             !debug || console.log('photo-manager.router.initialize: initializing...');
           },
           home: function() {
             !debug || console.log('photo-manager.router.initialize: home, home view type - ' + typeof(HomeView));
             var view = new HomeView();
             view.render();
           }
         });
         var initialize =  function() {
           !debug || console.log('Initializing router...');
           router = new Router();
           Backbone.history.start({pushState: true,
                                   root: "/photos#"});
           router.navigate('#home', {trigger: true, replace: false});
         };
         return {
           initialize: initialize
         };
       }
      );

