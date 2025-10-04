// Now UI Kit basics (from your share)
var transparent = true;
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    nowuiKit.initNavbarImage();
    if ($('.navbar[color-on-scroll]').length != 0) {
        nowuiKit.checkScrollForTransparentNavbar();
        $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar);
    }
    // Animate progress bars on scroll
    $('.progress-bar').each(function() {
        $(this).css('width', $(this).attr('data-value'));
    });
});
// Navbar toggle, debounce, etc. (full from your shared now-ui-kit.js)

/* Slider Script (from your share) */
var bg = document.querySelector('.item-bg');
var swiper = new Swiper('.news-slider', {
    // Full config from your shared script.js
});
// Paste the entire slider init and events from your shared script.js here
