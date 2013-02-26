// Filename: app.js
//
// photo-manager app modulie.
//
define(
  [
    'jquery', 
    'underscore', 
    'backbone', 
    'plmCommon/msg-bus', 
    'app/router'
  ],
  function($, _, Backbone, MsgBus, Router) {
    console.log('Loading - /js/app/photo-manager/app.js');
    var initialize = function() {
      console.log('Initializing - /js/app/photo-manager/app.js');
      if ($('#content').hasClass('photo-manager/show')) {
        console.log('We\'re able to verify our view w/ jQuery which is loaded globally.');
      }

      //
      // MsgBus:
      //
      //  Note, in the future the MsgBus initialization should probably occur outside of the
      //  context of an inidivdual App like the photo-manager such that it is an entity
      //  that can be shared accross pages. But, for that to happen we'll need to figure out
      //  how to share JS modules / instances accross pages, which may be possible via the
      //  window.name hack/work around. 
      //
      //  For this, we could consider a JavaScript session using Window.name, as described here:
      //
      //    http://stackoverflow.com/questions/1981673/persist-javascript-variables-across-pages
      //    http://www.thomasfrank.se/sessionvars.html
      //
      //  This thread also discusses some useful things to consider:
      //
      //    http://stackoverflow.com/questions/6396033/how-to-share-an-object-between-two-pages
      //
      MsgBus.initialize();
      Router.initialize();
    }

    return {
      initialize: initialize
    };
  }
);



