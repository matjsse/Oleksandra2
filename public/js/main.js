/**
 * Created by matisse on 7/10/2014.
 */
$(function () {
    var defaultContent = "This is Hello World by JQuery"
    //var homeContent = "this is home";
    var aboutContent = '\<div class="testClass"\>this is about\</div\>';
    var home = Handlebars.templates['home']();

    $("body").css({color: 'red'});

    $(".nav-home").click(function () {
        $(".content").html(home);
    });

    $(".nav-about").click(function () {
        $(".content").html(aboutContent);
    });

    $(".nav-contacts").click(function(){
        $(".content").html(home);
    });

});

