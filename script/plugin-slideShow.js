/*global console, document, $, jQuery */

(function ($) {
    'use strict';
    $(document).ready(function () {
        console.log('jQuery is ready');


        /**
         * Plugin slideShow
         * @param String options [Options par defaults du plugin]
         * @param int
         * @returns {Objects jQuery} [[Description]]
         */
        $.fn.slideShow = function (options) {
            // Param par défauts

            var nbrSlides,
                speedInterval,
                width,
                height,
                scaleWidth,
                scaleHeight,
                makeLinks,
                defaults,
                settings;

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
                var containerSlide = $(this),        // Stockage de l'élément par commodité
                    container = $('.sliderShow-container'),
                    totalImgs = containerSlide.find('img').length,
                    i,
                    dots = '<li class=\'dot active__dot\'></li>',
                    dot,
                    jsp;

                //                jsp = $('input:radio:checked').val();
                //                console.log(jsp);

                for (i = 1; i < totalImgs; i += 1) {
                    dots = dots + '<li class=\'dot disable__dot\'></li>';
                }
                //                console.log(dots);
                dot = "<ul class=\"slider__dots\">" + dots + "</ul>";

                container.append(dot);
                //                console.log(totalImgs);

                // On modifie le style du containerSlide
                containerSlide.css({
                    'width': width,
                    'height': height
                }).find('img').each(function () { // On parcours chaque imgs

                    // Si on doit adapter les dimensions des imgs
                    if (scaleWidth) {
                        $(this).css('width', '100%');
                    }

                    if (scaleHeight) {
                        $(this).css('height', '100%');
                    }

                    if (makeLinks) {
                        $(this).css({
                            'cursor': 'pointer',
                            'border': '0'
                        });
                        $(this).wrap('<a href="' + $(this).attr('alt') + '"></a>');
                    }

                });

                var interval = setInterval(goRight, speedInterval);

                function intSlide(func) {
                    if (func === 'start') {
                        interval = setInterval(goRight, speedInterval);
                    } else {
                        clearInterval(interval);
                    }
                }

                function goRight() {
                    console.log('Je suis dans goRight');
                    var currentSlide = $('.active'),
                        nextSlide = currentSlide.next(),
                        currentDot = $('.active__dot'),
                        nextDot = currentDot.next();

                    if (nextSlide.length === 0) {
                        nextSlide = containerSlide.find('img').first();
                    }

                    currentSlide.removeClass('active');
                    nextSlide.addClass('active');
                    //                    containerSlide.find('img').not([currentSlide, nextSlide]);


                    if (nextDot.length === 0) {
                        nextDot = container.find('li').first();
                    }

                    currentDot.removeClass('active__dot').addClass('disable__dot');
                    nextDot.addClass('active__dot').removeClass('disable__dot');

                }

                function goLeft() {
                    console.log('Je suis dans goLeft');
                    var currentSlide = $('.image-show'),
                        prevSlide = currentSlide.prev(),
                        currentDot = $('.active__dot'),
                        prevDot = currentDot.prev();


                    if (prevSlide.length === 0) {
                        prevSlide = containerSlide.find('img').last();
                    }

                    currentSlide.removeClass('image-show').addClass('image-hidden');
                    prevSlide.addClass('image-show').removeClass('image-hidden');
                    containerSlide.find('img').not([currentSlide, prevSlide]);

                    currentDot.removeClass('active__dot');
                    prevDot.addClass('active__dot');

                }

                $('.next').click(function () {
                    intSlide('stop');
                    goRight();
                    intSlide('start');
                });
                $('.prev').click(goLeft);
                $('.dot').click(goRight);
            });
        };
    });
}(jQuery));