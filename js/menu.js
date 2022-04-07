$("#nav__menu").click(function () {
    $(".nav-showed").width(450).css("z-index", 300);
    $(".header__logo-container" > img).css("opacity", 1);
});

$(".btn__close").click(function () {
    $(".nav-showed").width(0).css("z-index", 0);
})