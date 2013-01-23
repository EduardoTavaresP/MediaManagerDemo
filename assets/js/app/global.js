(function() {
  var root = window = this;

  var PLM = root.PLM = {};

  PLM.VERSION = '0.1';

  if ($('div.flash-notice').length) {
    $('div.flash-notice').hide();
  }

  var flashInprogress = false;

  PLM.showFlash = function(flashContent) {
    if ($('div.flash-notice').length === 0) {
      $('section.container').before('<div class="flash-notice"/>');
      $('div.flash-notice').html('<div class="flash-notice-inner twelve columns"/>');
      $('div.flash-notice-inner').html('<div class="flash-row row"/>');
      $('div.flash-row').html('<div class="flash-content four columns centered"/>');
    }
    $('div.flash-content').html(flashContent);
    if (flashInprogress === false) {
      flashInprogress = true;
      $('div.flash-notice').slideDown('slow');
      $('div.flash-notice').delay(5000).slideUp('slow', function() {
        flashInprogress = false;
      });
    }
  };

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

  PLM.initFoundation = function() {

    var $doc = $(document);
    var Modernizr = window.Modernizr;

    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

    // $('input, textarea').placeholder();

    // Hide address bar on mobile devices
    if (Modernizr.touch) {
      $(window).load(function () {
        setTimeout(function () {
          window.scrollTo(0, 1);
        }, 0);
      });
    }
  };

  $(document).ready(function() {
    console.log("Document is ready!");
    PLM.initFoundation();
    PLM.NavManager.onReady();
    console.log("Finished setting up document.");
  });

})(this);

