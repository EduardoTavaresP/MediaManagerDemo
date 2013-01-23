// Filename: photo-manager/views/home.js
//
var WebSocket = require('MediaManagerApi/lib/NotificationsWsLike');

define([
  'jquery',
  'underscore',
  'backbone',
  'foundationClearing',
  'app/collections/recent-uploads',
  'text!/html/photo-manager/templates/home.html'],
       function($, _, Backbone, FoundationClearing, RecentUploadsCollection, homeTemplate) {

         var ws = undefined;

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
               that._respondToEvents();
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
             $('#content-top-nav a.sync').click(function(el) {
               console.log('photo-manager/views/home - clicked sync!');
               $.ajax({url: 'http://appjs/api/media-manager/v0/storage/synchronizers',
                       type: 'POST',
                       contentType: 'application/json',
                       data: "",
                       processData: false,
                       success: function(data, textStatus, jqXHR) {
                         console.log('photo-manager/views/home._doRender: sync triggered...');
                       },
                       error: function() {
                         console.log('photo-manager/views/home._doRender: sync request error!');
                       }
                      });
             });
             if (_.size(this.recentUploads)) {
               $(document).foundationClearing();
             }
           },

           //
           // _respondToEvents: Opens a WS and listens to messages, adjusting the view as necessary.
           //
           _respondToEvents: function() {
             console.log('photo-manager/views/home._respondToEvents - Creating web-socket...');
             ws = new WebSocket('ws://appjs/notifications');

             function isConnectionEstablished(parsedMsg) {
               return (parsedMsg.resource === '/notifications' && parsedMsg.event === 'connection.established');
             };

             function isSyncStarted(parsedMsg) {
               return (parsedMsg.resource === '/storage/synchronizers' && parsedMsg.event === 'sync.started');
             };
             
             function isSyncCompleted(parsedMsg) {
               return (parsedMsg.resource === '/storage/synchronizers' && parsedMsg.event === 'sync.completed');
             };

             function doSubscriptions(ws) {
               console.log('photo-manager/views/home._respondToEvents - Subscribing to notification events');
               ws.send(JSON.stringify({
                 "resource": "_client", 
                 "event": "subscribe",
                 "data": {
                   "resource": "/storage/synchronizers" 
                 }}));
               console.log('photo-manager/views/home._respondToEvents - Subscribed to notification events');
             };

             ws.onmessage = function(msg) {
               console.log('photo-manager/views/home._respondToEvents - ' + msg.data);
               var parsedMsg = JSON.parse(msg.data);
               if (isConnectionEstablished(parsedMsg)) {
                 doSubscriptions(ws);
               }
               else if (isSyncStarted(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents - sync started!');
                 PLM.showFlash('Media sync started!');
               }
               else if (isSyncCompleted(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents - sync completed!');
                 PLM.showFlash('Media sync completed!');
               }
             };
           }

         });

         return HomeView;
       });
