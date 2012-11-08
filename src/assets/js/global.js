(function() {
  var root = this;

  var PLM = root.PLM = {};

  PLM.VERSION = '0.1';

  PLM.NavManager = {

    onReady: function() {

      //
      // Make sure the currently loaded page is set as active.
      //
      if ($('#content').hasClass('dashboard/show')) {
        console.log('PLM.NavManager.onReady: Active content - dashboard/show');
        $('#top-nav-dashboard').addClass('active');        
      }
      else if ($('#content').hasClass('photo-manager/show')) {
        console.log('PLM.NavManager.onReady: Active content - photo-manager/show');
        $('.side-nav-photos').addClass('active');
        $.getScript('/js/photo-manager.js');
      }

      //
      // Setup click events.
      //
      $('.top-bar section li.top-nav-icon').click(function(el) {
        console.log('Have top bar click event!');
        PLM.NavManager.onTopBarClick(el);
      });

      $('.side-nav li').click(function(el) {
        PLM.NavManager.onSideBarClick(el);
      });

    },

    onTopBarClick: function(el) {
	    $('.top-bar li').removeClass('active');
	    $('.side-nav li').removeClass('active');
      $(el).addClass('active');
    },

    onSideBarClick: function(el) {
	    $('.top-bar li').removeClass('active');
	    $('.side-nav li').removeClass('active');
      $(el).addClass('active');
    }

  };

})(this);

$(document).ready(function() {
  console.log("Document is ready!");
  $(document).foundationTopBar();
  $(document).foundationNavigation();

  PLM.NavManager.onReady();

});
