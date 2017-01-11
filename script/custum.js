/*global console, document, $, jQuery */
(function ($) {
    'use strict';
    $(document).ready(function () {
        $('.slide-container').slideShow({
            //            slideContainer: '.slide-container',
            nbrSlide: 3,
            speedInterval: 5000,
            makeLinks: null
        });
    });
}(jQuery));