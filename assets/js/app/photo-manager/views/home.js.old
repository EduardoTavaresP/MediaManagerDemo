// Filename: photo-manager/views/home.js
//
var WebSocket = require('MediaManagerApi/lib/NotificationsWsLike');

define([
  'jquery',
  'underscore',
  'backbone',
  'foundationClearing',
  'app/models/image',
  'app/collections/last-import',
  'text!/html/photo-manager/templates/home.html',
  'text!/html/photo-manager/templates/last-import-image.html'],
       function($, _, Backbone, FoundationClearing, ImageModel, LastImportCollection, homeTemplate, lastImportImageTemplate) {

         var ws = undefined;

         //
         // HomeView: The photo-manager/home view.
         //
         //  Notes:
         //
         //    Last Import: The last import can changes as a result of an active local import, or a sync between peer applications.
         //
         //      * active local import: The lastImport is replaced and incrementally updated.
         //        On import.started:
         //          state = STATUS_INCREMENTALLY_RENDERING
         //        On import.image.saved:
         //          if state === STATUS_INCREMENTALLY_RENDERING then
         //            - add or update image in collection.
         //            - update view with image in collection.
         //        On import.completed
         //          state = STATUS_RENDERED
         //
         //      * sync with peer applications: 
         //        When a doc.importers.created or doc.importers.updated event is detected from a foreign instance of the application:
         //          - if the importers document should supercede the current lastImport's lastImporter then
         //            state = STATUS_OBSOLETE
         //        When a sync.completed event is detected and state === STATUS_OBSOLETE:
         //          - render or re-render the view.
         //          state = STATUS_RENDERED
         //
         var HomeView = Backbone.View.extend({

           el: $('#content'),

           //
           //  STATUS_UNRENDERED: view has not be rendered.
           //  STATUS_RENDERED: the view has been rendered.
           //  STATUS_INCREMENTALLY_RENDERING: the view is being incrementally rendered one image at a time.
           //  STATUS_OBSOLETE: the view is rendered by obsolute. For example, may have seen an importer document from another
           //    app instance via the changes feed that will require re-rendering.
           //  
           STATUS_UNRENDERED: 0,
           STATUS_RENDERED: 1,
           STATUS_INCREMENTALLY_RENDERING: 2,
           STATUS_OBSOLETE: 3,
           status: undefined,
           
           initialize: function() {
             this.status = this.STATUS_UNRENDERED;
             this.lastImport = new LastImportCollection();
           },

           render: function() {
             var that = this;
             var onSuccess = function(lastImport, 
                                      response, 
                                      options) {
               console.log('photo-manager/views/home: successfully loaded recent uploads...');
               that._doRender();
               that._respondToEvents();
               that.status = that.STATUS_RENDERED;
             };
             var onError = function(lastImport, xhr, options) {
               console.log('photo-manager/views/home: error loading recent uploads.');
             };
             this.lastImport.fetch({success: onSuccess,
                                    error: onError});
           },

           //
           // _doRender: We have loaded the data, its safe to render.
           //
           _doRender: function() {
             console.log('photo-manager/views/home._doRender: Will render ' + _.size(this.lastImport) + ' images...');
             if (this.lastImport.importer === undefined) {
               PLM.showFlash('You have not yet imported any images!');
             }
             else if (this.lastImport.length === 0) {
               PLM.showFlash('You\' most recent import has no images!');
             }
             else {
               this.lastImport.each(function(image) {
                 console.log('photo-manager/views/home._doRender: Have image - ' + image.get('name'));
                 var variants = image.get('variants');
                 console.log('photo-manager/views/home._doRender:   have ' + variants.length + ' variants...');               
                 var filteredVariants = _.filter(image.get('variants'), function(variant) { return variant.name === 'thumbnail.jpg'; });
                 console.log('photo-manager/views/home._doRender:   have ' + filteredVariants.length + ' thumbnail variants...');
               });
             }
             var compiledTemplate = _.template(homeTemplate, { lastImportImages: this.lastImport,
                                                               _: _ });
             this.$el.html(compiledTemplate);
             $('#content-top-nav a.import').click(function(el) {
               console.log('photo-manager/views/home: clicked import!');
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
               console.log('photo-manager/views/home: clicked sync!');
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
             if (_.size(this.lastImport)) {
               $(document).foundationClearing();
             }
           },

           //
           // _startIncrementalRender: Initialize the view to a new importer which will be incrementally rendered.
           //
           _startIncrementalRender: function(importer) {
             if ((this.status === this.STATUS_UNRENDERED) || (this.status === this.STATUS_RENDERED)) {
               //
               // Initialize with the new importer, but the collection will be empty.
               //
               this.lastImport = new LastImportCollection(null, {importer: importer});
               var compiledTemplate = _.template(homeTemplate, { lastImportImages: this.lastImport,
                                                               _: _ });
               this.$el.html(compiledTemplate);
               this.status = this.INCREMENTALLY_RENDERING;
             }
           },

           //
           // _addToIncrementalRender: Add an image to a view which is being incrementally rendered.
           //
           _addToIncrementalRender: function(image) {
             if (!this.lastImport.get(image.id)) {
               console.log('photo-manager/views/home._addToIncrementalRender: adding image w/ id - ' + image.id + ', to view.');
               //
               // Add to the collection.
               //
               var imageModel = new ImageModel(image);
               this.lastImport.add(imageModel);
               //
               // Also add the image to the view.
               //
               var compiledTemplate = _.template(lastImportImageTemplate, { image: imageModel });
               $('#last-import ul').append(compiledTemplate);
             }
           },

           //
           // _finishIncrementalRender: Incremental rendering of the view should be complete. 
           //
           //  Currently, only change status to STATUS_RENDERED.
           //
           _finishIncrementalRender: function() {
             if (this.status === this.STATUS_INCREMENTALLY_RENDERING) {
               this.status = this.STATUS_RENDERED;
             }
           },

           //
           // _respondToEvents: Opens a WS and listens to messages, adjusting the view as necessary.
           //
           _respondToEvents: function() {
             console.log('photo-manager/views/home._respondToEvents: Creating web-socket...');
             var that = this;
             ws = new WebSocket('ws://appjs/notifications');

             function isConnectionEstablished(parsedMsg) {
               return (parsedMsg.resource === '/notifications' && parsedMsg.event === 'connection.established');
             };

             function isImportStarted(parsedMsg) {
               return (parsedMsg.resource === '/importers' && parsedMsg.event === 'import.started');
             };

             function isImportImageSaved(parsedMsg) {
               return (parsedMsg.resource === '/importers' && parsedMsg.event === 'import.image.saved');
             };
             
             function isImportCompleted(parsedMsg) {
               return (parsedMsg.resource === '/importers' && parsedMsg.event === 'import.completed');
             };

             function isSyncStarted(parsedMsg) {
               return (parsedMsg.resource === '/storage/synchronizers' && parsedMsg.event === 'sync.started');
             };
             
             function isSyncCompleted(parsedMsg) {
               return (parsedMsg.resource === '/storage/synchronizers' && parsedMsg.event === 'sync.completed');
             };

             function doSubscriptions(ws) {
               console.log('photo-manager/views/home._respondToEvents: Subscribing to notification events');
               ws.send(JSON.stringify({
                 "resource": "_client", 
                 "event": "subscribe",
                 "data": {
                   "resource": "/storage/synchronizers" 
                 }}));
               ws.send(JSON.stringify({
                 "resource": "_client", 
                 "event": "subscribe",
                 "data": {
                   "resource": "/importers" 
                 }}));
               console.log('photo-manager/views/home._respondToEvents: Subscribed to notification events');
             };

             ws.onmessage = function(msg) {
               console.log('photo-manager/views/home._respondToEvents: ' + msg.data);
               var parsedMsg = JSON.parse(msg.data);
               if (isConnectionEstablished(parsedMsg)) {
                 doSubscriptions(ws);
               }
               else if (isImportStarted(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents: import started!');
                 $('#content-top-nav a.import').addClass('active');
                 PLM.showFlash('Media import started!');
                 that._startIncrementalRender(parsedMsg.data);
               }
               else if (isImportImageSaved(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents: import image saved!');
                 that._addToIncrementalRender(parsedMsg.data.doc);
               }
               else if (isImportCompleted(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents: import completed!');
                 that._finishIncrementalRender();
                 PLM.showFlash('Media import completed!');
                 $('#content-top-nav a.import').removeClass('active');
               }
               else if (isSyncStarted(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents: sync started!');
                 $('#content-top-nav a.sync').addClass('active');
                 PLM.showFlash('Media sync started!');
               }
               else if (isSyncCompleted(parsedMsg)) {
                 console.log('photo-manager/views/home._respondToEvents: sync completed!');
                 PLM.showFlash('Media sync completed!');
                 $('#content-top-nav a.sync').removeClass('active');
               }
             };
           }

         });

         return HomeView;
       });
