(function($) {
  var debug = true;

  $(document).ready(function() {
    !debug || console.log("photo-manager.document.ready: ...");

    $.ajax({url: 'http://appjs/api/media-manager/v0/images',
            success: function(data, textStatus, jqXHR) {
              if (debug) {
                console.log('photo-manager.document.ready: got ' + data.images.length + ' images!');
                //
                //  Try and get each image.
                //
                _.each(data.images,
                       function(image) {
                         console.log('photo-manager.document.ready: getting image w/ id - ' + image.id);
                         $.ajax({url: 'http://appjs/api/media-manager/v0/images/' + image.id,
                                 success: function(data, textStatus, jqXHR) {
                                   console.log('photo-manager.document.ready: got image w/ id - ' + image.id);
                                 }});
                       });
              }
            }});
  });
})(jQuery);
