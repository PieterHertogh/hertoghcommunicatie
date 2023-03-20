/**
 *   | .navbar-nav
 */

$(".social-media" ).on( "click", "li", function() {
	var link = $( this ).attr('class') ;
	ga('send', 'event', 'social-link', link);
});

$(".navbar-nav" ).on( "click", "a", function() {
	var link = $( this ).attr('href') ;
	ga('send', 'event', 'navigation', link);
});

$("a.tracked" ).on( "click", function() {
	var link = $( this ).attr('href') ;
	ga('send', 'event', 'anchor', link);
});

