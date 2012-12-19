// Filename: photo-manager/views/home.js
//
define([
  'jquery',
  'underscore',
  'backbone',
  'foundationClearing',
  'app/collections/recent-uploads',
  'text!/html/photo-manager/templates/home.html'],
       function($, _, Backbone, FoundationClearing, RecentUploadsCollection, homeTemplate) {
         var HomeView = Backbone.View.extend({

           el: $('#content'),
           
           initialize: function() {
             this.recentUploads = new RecentUploadsCollection();
           },

           render: function() {
             var that = this;
             var onSuccess = function(recentUploads, 
                                      response, 
                                      options) {
               console.log('photo-manager/views/home - successfully loaded recent uploads...');
               that._doRender();
             };
             var onError = function(recentUploads, xhr, options) {
               console.log('photo-manager/views/home - error loading recent uploads.');
             };
             this.recentUploads.fetch({success: onSuccess,
                                       error: onError});
           },

           //
           // _doRender: We have loaded the data, its safe to render.
           //
           _doRender: function() {
             console.log('photo-manager/views/home._doRender: Will render ' + _.size(this.recentUploads) + ' images...');
             this.recentUploads.each(function(image) {
               console.log('photo-manager/views/home._doRender: Have image - ' + image.get('name'));
               var variants = image.get('variants');
               console.log('photo-manager/views/home._doRender:   have ' + variants.length + ' variants...');               
               var filteredVariants = _.filter(image.get('variants'), function(variant) { return variant.name === 'thumbnail.jpg'; });
               console.log('photo-manager/views/home._doRender:   have ' + filteredVariants.length + ' thumbnail variants...');
             });
             var compiledTemplate = _.template(homeTemplate, { recentImages: this.recentUploads,
                                                               _: _ });
             this.$el.html(compiledTemplate);
             $('#content-top-nav a.import').click(function(el) {
               console.log('photo-manager/views/home - clicked import!');
               var payload = JSON.stringify({
                 "import_dir": "/Users/marekjulian/PLM/import"
               });
               $.ajax({url: 'http://appjs/api/media-manager/v0/importers',
                       type: 'POST',
                       contentType: 'application/json',
                       data: payload,
                       processData: false,
                       success: function(data, textStatus, jqXHR) {
                         console.log('photo-manager/views/home._doRender: import success, importer - ' + JSON.stringify(data));
                       },
                       error: function() {
                         console.log('photo-manager/views/home._doRender: import request error!');
                       }
                      });
             });
             $(document).foundationClearing();
           }
         });

         return HomeView;
       });
