/*global console, document, $, jQuery */

(function ($) {
    'use strict';
    $(document).ready(function () {
        console.log('jQuery is ready');


        /**
         * Plugin slideShow
         * @param   {String, Int} options [Options par defaults du plugin]
         * @returns {Objects jQuery} [[Description]]
         */
        $.fn.slideShow = function (options) {
            // Param par défauts

            var nbrSlides,
                speedInterval,
                width,
                height,
                scaleWidht,
                scaleHeight,
                makeLinks,
                defaults,
                settings;

            defaults = {
                nbrSlides: 5,
                speedInterval: 2000,
                width: 940,                 // Largeur du slideShow
                height: 360,                // Hauteur du slideShow
                scaleWidth: true,           // Largeur par défauts des images
                scaleHeight: true,          // Hauteur par défauts des images
                makeLinks: false,
                callback: null
            };

            settings = {};
            console.log(settings);

            // On fusionne nos objects 'defaults' et 'options' dans l'objects settings
            $.extend(settings, defaults, options);

            nbrSlides = settings.nbrSlides;
            speedInterval = settings.speedInterval;

            // Possibilité d'appliquer le plugin sur tous les objets jQuery
            // Permet d'ajouter notre plugin à une chaine
            return this.each(function () {
                var container = $(this); // Stockage de l'élément par commodité

            });
        };
    });
}(jQuery));