(function($) {
  var debug = true;

  $(document).ready(function() {
    !debug || console.log("photo-manager.document.ready: ...");

    $.ajax({url: 'http://appjs/api/media-manager/v0/images',
            success: function(data, textStatus, jqXHR) {
              !debug || console.log('photo-manager.document.ready: got imageas -' + JSON.stringify(data));
            }});
  });
})(jQuery);
