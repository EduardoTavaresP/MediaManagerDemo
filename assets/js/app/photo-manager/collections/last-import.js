// Filename: photo-manager/collections/last-import.js
define([
  'underscore',
  'backbone',
  // Grab the Importers collection as we need to get the last importer used to import images.
  'app/collections/importers',
  // Grab the Image model as last-import is just a collection of images associated with the most recent import.
  'app/models/image'
],
       function(_, Backbone, ImportersCollection, ImageModel) {
         var LastImportCollection = Backbone.Collection.extend({

           model: ImageModel,

           importers: undefined,
           lastImporter: undefined,

           initialize: function() {
             this.importers = new ImportersCollection(null, { numToImport: 1 } );
           },

           url: function() {
             if (this.lastImporter) {
               return '/api/media-manager/v0/importers/' + this.lastImporter.id + '/images';
             }
             else {
               return undefined;
             }
           },

           fetch: function(options) {
             var that = this;
             var onImportersSuccess = function(importersCollection, response) {
               if (importersCollection.length > 0) {
                 that.lastImporter = importersCollection.at(0);
                 console.log('Last importer fetched, w/ id - ' + that.lastImporter.id);
                 Backbone.Collection.prototype.fetch.call(that, options);
               }
               else {
                 console.log('We have an empty collection of importers!');
               }
             };
             var onImportersError = function(importersCollection, xhr) {
               console.log('We had an error fetching importers!');
             }
             this.importers.fetch({success: onImportersSuccess,
                                   error: onImportersError});
           },

           parse: function(response) {
             console.log('Parsing last-import response - ' + JSON.stringify(response));
             return response.importer.images;
           }
         });

         return LastImportCollection;
       });
