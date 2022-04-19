$("#nav__menu").click(function () {
    $(".nav-showed").width(370).css("z-index", 300);
});

$(".btn__close").click(function () {
    $(".nav-showed").width(0).css("z-index", 0);
})