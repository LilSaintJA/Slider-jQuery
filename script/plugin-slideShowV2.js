/*global console, document, $, jQuery */

(function ($) {
    'use strict';

    $(document).ready(function () {
        console.log('jQuery Is Ready');

        /**
         * [[Description]]
         * @param {[[Type]]} options [[Description]]
         */
        $.fn.slideShow = function (ele, options) {

            // Param par défauts

            var nbrSlides,
                speedInterval,
                width,
                height,
                scaleWidth,
                scaleHeight,
                makeLinks,
                defaults,
                settings,
                ele = $(ele);

            defaults = {
                nbrSlides: 5,
                speedInterval: 2000,
                width: '940px',                 // Largeur du slideShow
                height: '360px',                // Hauteur du slideShow
                scaleWidth: true,               // Largeur par défauts des images
                scaleHeight: true,              // Hauteur par défauts des images
                makeLinks: false,
                callback: null
            };

            settings = {};
            //            console.log(settings);

            // On fusionne nos objects 'defaults' et 'options' dans l'objects settings
            $.extend(settings, defaults, options);

            nbrSlides = settings.nbrSlides;
            speedInterval = settings.speedInterval;
            width = settings.width;
            height = settings.height;
            scaleWidth = settings.scaleWidth;
            scaleHeight = settings.scaleHeight;
            makeLinks = settings.makeLinks;

            // Possibilité d'appliquer le plugin sur tous les objets jQuery
            // Permet d'ajouter notre plugin à une chaine

            return this.each(function () {
                var containerSlide = $(this),
                    container = $('.slideShow-container'),
                    totalImgs = containerSlide.find('img').length,
                    directions = {prev: 'last', next: 'first'},
                    cNames = {a: 'active', s: 'slide', n: 'next', t: 'transition', r: 'reset'};

                // Set first slide
                if (!ele.find('.' + cNames.a).length) {
                    ele.find('.' + cNames.s + ':first').addClass(cNames.a);
                }

                function goRight() {
                    var dir = $(this).attr('data-slideShow-dir'),
                        next;

                    next = !ele.find('.' + cNames.a)[dir]('.' + cNames.s).length ? ele.find('.' + cNames.s + ':' + directions[dir]) : ele.find('.' + cNames.a)[dir]('.' + cNames.s);

                    transition(next);
                }

                function transition(next) {
                    if (ele.find('.' + cNames.t + ', .' + cNames.r).length) {
                        return false;
                    }

                    next.addClass('next');

                    //Start transition

                    ele.find('.' + cNames.a + ', .' + cNames.n).addClass(cNames.t);
                }
            });
        };
    });
}(jQuery));