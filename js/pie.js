$(".footer__slideup").click(function () {
    $(".footer").css("height", 200)

    $(".footer__slideup").attr("class", "fa-solid fa-circle-chevron-down footer__down");
});


$(".footer__down").click(function () {
alert("ali")

    $(".footer__down").attr("class", "fa-solid fa-circle-chevron-up footer__slideup");

    $(".footer").css("height", "auto");

});

