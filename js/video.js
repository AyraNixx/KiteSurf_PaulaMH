
$(".information__video").click(function() {

    $(".information__video-text").css({
        "display": "none"
    });

    $(".information__video").css({
        "clip-path": "circle(100vw)"
    });

    $("video").css({
        "width": "50vw",
        "height": "50vh",
        "margin": "30px auto",
        "border": "2px solid #fff",
        "outline": "4px solid #e5815d"
    });
});
