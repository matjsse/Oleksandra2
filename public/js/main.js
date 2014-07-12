/**
 * javascript basics
 * jquery basics
 * handlebars basics
 * Created by matisse on 7/10/2014.
 */
/*$(function () {
    var defaultContent = "This is Hello World by JQuery"
    //var homeContent = "this is home";
    var about = Handlebars.templates['about'];
    var home = Handlebars.templates['home']();
    var work_mindandbody = Handlebars.templates['work_mindandbody']();

    $(".page").html(home);

    $(".maintitle").click(function () {
        console.log("main title");
        $(".page").html(home);
    });

    $(".element1").click(function () {
        $(".page").html(work_mindandbody);
    });

    $(".nav-contacts").click(function(){
        $(".content").html(home);
    });

});*/

$ (function () {

    var pages = initPages();
    hide(pages);
    pages[0].show();
    var currentPage = pages[0];

    $('.nav-portfolio').click(function(){
        //hide(pages);
        currentPage.hide();
        currentPage = pages[0];
        currentPage.show();
        //pages[0].show();
    });

    $('.nav-about').click(function(){
        currentPage.hide();
        currentPage = pages[0];
        currentPage.show();
    });



    $('.nav-contacts').click(function(){
        currentPage.hide();
        currentPage = pages[1];
        currentPage.show();
    });

    $('.element1').click(function(){
        currentPage.hide();
        currentPage = pages[2];
        currentPage.show();
    });


    function hide(pages) {
        pages.forEach(function(page) {
            page.hide();
        })
    }


    function initPages() {
        var about = Handlebars.templates['about']();
        var home = Handlebars.templates['home']();
        var work_mindandbody = Handlebars.templates['work_mindandbody']();

        var page1 = $(".page1");
        page1.html(home);
        var page2 = $(".page2");
        page2.html(about);
        var mindbody = $(".page3");
        mindbody.html(work_mindandbody);

        var pages = [];

        pages[0] = page1;
        pages[1] = page2;
        pages[2] = mindbody;

        return pages;
    }

});



