/*global console, document, $, jQuery */
(function ($) {
    'use strict';
    $(document).ready(function () {
        console.log('jQuery is ready');

        $.fn.slideShow = function (options) {

            var nbrSlide,
                intervall,
                slideContainer,
                sizeContainer,
                container = $('.sliderShow-container'),
                defaults,
                settings;

            defaults = {
                nbrSlide: 5,
                intervall: 1000
            };

            settings = {};

            $.extend(settings, defaults, options);

            nbrSlide = settings.nbrSlide;
            //            console.log(nbrSlide); 
            intervall = settings.intervall;

            slideContainer = $(settings.slideContainer);
            slideContainer.width();
            var list = container.append('<ul class="list-dots"></ul>'),
                tab = $('.slide-container img');
            var i;
            for (i = 0; i < tab.length; i += 1) {
                list.find('ul').append('<li class="items-dots"></li>');

            }
            console.log('je suis la liste');
            console.log(list);
            //            console.log(slideContainer);
            sizeContainer = parseInt(slideContainer * nbrSlide, 10);
            //            console.log(sizeContainer);

            function clickRight(evt) {
                var currentActiveImg = $('.image-show'),
                    nextActiveImg = currentActiveImg.next(),
                    lists = $('.items-dots'),
                    nextList = lists.next();

                // *** tab = $('.slide-container img');


                //                for (i = 0; i < tab.length; i += 1) {
                //                    console.log(tab[i]);
                //                    console.log(tab.length - nbrSlide);
                if (nextActiveImg.length === 0) {
                    nextActiveImg = $('.slide-container img').first();
                }
                //                }

                //Toggle
                currentActiveImg.removeClass('image-show').addClass('image-hidden');
                nextActiveImg.addClass('image-show').removeClass('image-hidden');
                $('.slide-container img').not([currentActiveImg, nextActiveImg]);
                lists.toggleClass('active');
                //                if(evt.originalEvent === this) {
                //                evt.preventDefault();
                //                }
            }

            function clickLeft(evt) {
                var currentActiveImg = $('.image-show'),
                    nextActiveImg = currentActiveImg.prev();

                if (nextActiveImg.length === 0) {
                    nextActiveImg = $('.slide-container img').last();
                }

                currentActiveImg.removeClass('image-show').addClass('image-hidden');
                nextActiveImg.addClass('image-show').removeClass('image-hidden');
                //            console.log(nextActiveImg);
                $('.slide-container img').not([currentActiveImg, nextActiveImg]);
            }



            // *** Declenchement des event
            setInterval(clickRight, intervall);
            $('.next').click(clickRight);
            $('.prev').click(clickLeft);
        };

        // *** Appel du plugin
        $('.sliderShow-container').slideShow({
            slideContainer: ".slide-container",
            nbrSlide: 3,
            intervall: 5000
        });
    });
}(jQuery));

