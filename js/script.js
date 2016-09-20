$(function () {
    var options = {
        class: '',
        positionY: 'bottom',
        positionX: 'left',
        text: 'Наверх',
        displayAlways: true
    };

    new Up( options );

    $(".link-1").bind("click", function () {
        $(".gitlink-1").fadeIn();
        $(".appear-1").fadeIn();
    });

    $(".link-2").bind("click", function () {
        $(".gitlink-1").fadeOut();
        $(".appear-1").fadeOut();
    });

    $(".link-3").bind("click", function () {
        $(".gitlink-1").fadeOut();
        $(".appear-1").fadeOut();
    });

    new Up( options );

    $(".link-2").bind("click", function () {
        $(".gitlink-2").fadeIn();
        $(".appear-2").fadeIn();
    });

    $(".link-1").bind("click", function () {
        $(".gitlink-2").fadeOut();
        $(".appear-2").fadeOut();
    });

    $(".link-3").bind("click", function () {
        $(".gitlink-2").fadeOut();
        $(".appear-2").fadeOut();
    });

    new Up( options );

    $(".link-3").bind("click", function () {
        $(".gitlink-3").fadeIn();
        $(".appear-3").fadeIn();
    });

    $(".link-2").bind("click", function () {
        $(".gitlink-3").fadeOut();
        $(".appear-3").fadeOut();
    });

    $(".link-1").bind("click", function () {
        $(".gitlink-3").fadeOut();
        $(".appear-3").fadeOut();
    });


});