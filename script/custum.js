/*global console, document, $, jQuery */
(function ($) {
    'use strict';
    $(document).ready(function () {
        $('.slide-container').slideShow({
            nbrSlide: 3,
            speedInterval: 5000
        });
    });
}(jQuery));