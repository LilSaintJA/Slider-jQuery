/*global console, document, $, jQuery */
(function ($) {
    'use strict';
    $(document).ready(function () {
        $('a').slideShow({
            //            slideContainer: '.slide-container',
            nbrSlide: 3,
            speedInterval: 5000
        });
    });
}(jQuery));