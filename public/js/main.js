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


    routie({
        'home': function () {
            currentPage.hide();
            currentPage = birds[0];
            currentPage.show();
        },
        'about': function () {
            currentPage.hide();
            currentPage = birds[1];
            currentPage.show();
        },

        'work_tca': function () {
            currentPage.hide();
            currentPage = birds[2];
            currentPage.show();
            window.scrollTo(0, 0);
        },
        'work_yrp': function () {
            currentPage.hide();
            currentPage = birds[3];
            currentPage.show();
           // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
        },
        'work_blm': function () {
            currentPage.hide();
            currentPage = birds[4];
            currentPage.show();
           // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
        },
        'work_afnn': function () {
            currentPage.hide();
            currentPage = birds[5];
            currentPage.show();
           // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
        },
        'work_bindingslogo': function () {
            currentPage.hide();
            currentPage = birds[6];
            currentPage.show();
            // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
        },
        'work_ui': function () {
            currentPage.hide();
            currentPage = birds[7];
            currentPage.show();
            // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
        },
        'work_lettering': function () {
            currentPage.hide();
            currentPage = birds[8];
            currentPage.show();
            // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
        },
        'frstrs': function () {
            currentPage.hide();
            currentPage = birds[9];
            currentPage.show();
            // $("html, body").animate({ scrollTop: 0 });
            window.scrollTo(0, 0);
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
        routie('work_yrp');
    });
    $('.element3').click(function () {
        routie('work_blm');
    });
    $('.element4').click(function () {
        routie('work_afnn');
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
    $('.element9').click(function () {
        routie('frstrs');
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
        pages[3].html(Handlebars.templates['work_yrp']());
        pages[4] = $(".page4");
        pages[4].html(Handlebars.templates['work_blm']());
        pages[5] = $(".page5");
        pages[5].html(Handlebars.templates['work_afnn']());
        pages[6] = $(".page6");
        pages[6].html(Handlebars.templates['work_bindingslogo']());
        pages[7] = $(".page7");
        pages[7].html(Handlebars.templates['work_ui']());
        pages[8] = $(".page8");
        pages[8].html(Handlebars.templates['work_lettering']());
        pages[9] = $(".page9");
        pages[9].html(Handlebars.templates['frstrs']());

        return pages;
    }


    /**
     * Call to get all the postsss
     */
    $.get( "/api/blog").done(function(data){
        var blogMenuEl =  $('.blog_menu');
        console.log(blogMenuEl);
        if(data && data.posts) {
            var posts = data.posts;
            for (var i = 0; i < posts.length; i++) {

                var model = {
                    blogTitle: posts[i].title,
                    blogContent: posts[i].content
                };
                var blogPostElement = Handlebars.templates['blog_post'](model);

                console.log(blogPostElement);
                blogMenuEl.append(blogPostElement);
            }
        }
    }).fail(function(){
        console.log("Blog api failed to load data")
    });

});





