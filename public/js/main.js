/**
 * javascript basics
 * jquery basics
 * handlebars basics
 * Created by matisse on 7/10/2014.
 routie('home');
 */

$(function () {

    var birds = initPages();
    hide(birds);
    birds[0].show();
    var currentPage = birds[0];

    console.log(window.location.hash);
    if (!window.location.hash) routie('home');


    /**
     * Open the page with the given index and close all other pages
     * @param index
     */
    var goToPageWithIndex = function (index) {
        currentPage.hide();
        currentPage = birds[index];
        currentPage.show();
        window.scrollTo(0, 0);
    }


    routie({
        'home': function () {
            goToPageWithIndex(0);
        },
        'about': function () {
            goToPageWithIndex(1);
        },

        'work_tca': function () {
            goToPageWithIndex(2);
        },
        'work_ss': function () {
            goToPageWithIndex(3);
        },
        'work_mnb': function () {
            goToPageWithIndex(4);
        },
        'work_lnl': function () {
            goToPageWithIndex(5);
        },
        'work_bindingslogo': function () {
            goToPageWithIndex(6);
        },
        'work_ui': function () {
            goToPageWithIndex(7);
        },
        'work_lettering': function () {
            goToPageWithIndex(8);
        }
    });


    $('.nav-title').click(function () {
        routie('home');
    });

    $('.nav-portfolio').click(function () {
        routie('home');
    });

    $('.nav-about').click(function () {
        routie('about');
    });
    $('.nav-connect').click(function () {
        $('html, body').animate({scrollTop: $(document).height()}, 'medium');
        return false;
    });

    $('.element1').click(function () {
        routie('work_tca');
    });
    $('.element2').click(function () {
        routie('work_ss');
    });
    $('.element3').click(function () {
        routie('work_mnb');
    });
    $('.element4').click(function () {
        routie('work_lnl');
    });
    $('.element5').click(function () {
        routie('work_bindingslogo');
    });
    $('.element6').click(function () {
        routie('work_ui');
    });
    $('.element8').click(function () {
        routie('work_lettering');
    });

    function hide(elementsArray) {
        elementsArray.forEach(function (element) {
            element.hide();
        });
    }


    function initPages() {
        var pages = [];

        pages[0] = $(".page0");
        pages[0].html(Handlebars.templates['home']());
        pages[1] = $(".page1");
        pages[1].html(Handlebars.templates['about']());
        pages[2] = $(".page2");
        pages[2].html(Handlebars.templates['work_tca']());
        pages[3] = $(".page3");
        pages[3].html(Handlebars.templates['work_ss']());
        pages[4] = $(".page4");
        pages[4].html(Handlebars.templates['work_mindandbody']());
        pages[5] = $(".page5");
        pages[5].html(Handlebars.templates['work_lnl']());
        pages[6] = $(".page6");
        pages[6].html(Handlebars.templates['work_bindingslogo']());
        pages[7] = $(".page7");
        pages[7].html(Handlebars.templates['work_ui']());
        pages[8] = $(".page8");
        pages[8].html(Handlebars.templates['work_lettering']());

        return pages;
    }

});





