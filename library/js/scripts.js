/*
Joints Scripts File

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        };
        return this;
    };
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
    	
        // detect css3 animation feature
		var animation = false,
			animationStr = 'animation',
			keyframePrefix = '',
			domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
			pfx = '',
			elem = document.getElementById('footer-container');
		
		if (elem.style.animationName !== undefined) {
			animation = true;
		}
		
		if (animation === false) {
			for (var i = 0; i < domPrefixes.length; ++i) {
				if (elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
					pfx = domPrefixes[i];
					animationStr = pfx + 'Animation';
					keyframePrefix = '-' + pfx.toLowerCase() + '-';
					animation = true;
					break;
				}
			}
		}
		
		// if css3 animation not present, proceed w/ javascript method
		if (!animation) {
			// make planet rotate - jQuery perpetual callback method
			function animate_footer() {
				$('#footer-container').animate({'background-position-y': '-611px'}, 60000, 'linear', function() {
					animate_footer();
				});
			}
			
			animate_footer();
		}
		
    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
		/* Bind asteroids game and show button to launch it */
		$('#asteroids-start').show().on('click', function() {
			var KICKASSVERSION = '2.0',
				s = document.createElement('script');
			
			s.type = 'text/javascript';
			document.body.appendChild(s);
			s.src = '//hi.kickassapp.com/kickass.js';
		});
		
		/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
			$(this).attr('src',$(this).attr('data-gravatar'));
		});
	}
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
	// add all your scripts here
	
	// active menu border fix
	$('.top-bar-section > ul > .current-menu-item, .top-bar-section .current-menu-parent').prev().children().css('border-right-color', '#2d2d2d');
	
	// registration page fixes
	$('strong').filter(':contains("Categories"), :contains("Location"), :contains("Date/Time")').closest('p').remove();
	$('i:contains("Map Unavailable")').remove();
	$('.em-location-map-container').parent('div').css('float', 'left').insertBefore('h3:contains("Bookings")').after('<br style="clear:both">');
	$('.em-map-balloon-content > a').remove();
	
	// chrome footer fix
	if (navigator.appVersion.indexOf("Chrome/") != -1) {
		$('#footer-container').css('border', '1px solid #6877b0');
	}
 
}); /* end of as page load scripts */

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );

/*
 * Load up Foundation
 */
(function(jQuery) {
  jQuery(document).foundation();
})(jQuery);
