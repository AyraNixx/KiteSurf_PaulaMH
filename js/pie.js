/*$(".footer__slideup").click(function () {
    $(".footer").css("height", 200)

    $(".footer__slideup").attr("class", "fa-solid fa-circle-chevron-down footer__down");
});


$(".footer__down").click(function () {
alert("ali")

    $(".footer__down").attr("class", "fa-solid fa-circle-chevron-up footer__slideup");

    $(".footer").css("height", "auto");

});*/



$("#btn__footer").click(function() {
    $(".footer__main-content").toggle(50).css("display", "flex");

    if($("#btn__footer").hasClass("fa-circle-chevron-up"))
    {
        $("#btn__footer").removeClass("fa-circle-chevron-up").addClass('fa-circle-chevron-down');
    }else{
        $("#btn__footer").removeClass("fa-circle-chevron-down").addClass('fa-circle-chevron-up');
    }
  });