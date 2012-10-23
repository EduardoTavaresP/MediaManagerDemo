(function() {
    var root = this;

    var PLM = root.PLM = {};

    PLM.VERSION = '0.1';
})(this);

$(document).ready(function() {
    console.log("Document is ready!");
    $(document).foundationTopBar();
    $(document).foundationNavigation();

    $('.top-bar section li.top-nav-icon').click(function() {
        console.log('Have top bar click event!');
	$('.top-bar li').removeClass('active');
	$('.side-nav li').removeClass('active');
        $(this).addClass('active');
    });
    $('.side-nav li').click(function() {
	$('.top-bar li').removeClass('active');
	$('.side-nav li').removeClass('active');
        $(this).addClass('active');
    });
});
