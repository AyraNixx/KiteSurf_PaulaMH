$("#nav__menu").click(function () {
    $(".nav-showed").width(450);
    $(".main").css("z-index", 300);
});

$(".btn__close").click(function () {
    $(".nav-showed").width(0);
    $(".main").css("z-index", 0);
})