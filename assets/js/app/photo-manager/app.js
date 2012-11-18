// Filename: app.js
//
// photo-manager app main modulie.
//
define(['jquery', 'underscore', 'backbone', 'app/router'],
       function($, _, Backbone, Router) {
         var initialize = function() {
           console.log('Loaded - /js/app/photo-manager/app.js');
           if ($('#content').hasClass('photo-manager/show')) {
             console.log('Were able to verify our view w/ jQuery which is loaded globally.');
           }
           Router.initialize();
         }

         return {
           initialize: initialize
         };
       });


