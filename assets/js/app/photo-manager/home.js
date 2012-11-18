// Filename: views/home.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!/html/photo-manager/templates/home.html'],
       function($, _, Backbone, homeTemplate) {
         console.log('home template - ' + typeof(homeTemplate));
         var HomeView = Backbone.View.extend({
           el: $('#content'),
           render: function() {
             var compiledTemplate = _.template(homeTemplate, {});
             this.$el.append(compiledTemplate);
           }
         });
       });

       
