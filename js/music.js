//Array con las canciones disponibles
var songs = [
    "../music/Cake_by_the_Ocean.mp3",
    "../music/This_girl.mp3",
    "../music/The_Nights.mp3",
    "../music/Sunboat.mp3"
];

//Posicion de la cancion actual 
let i = 0;

//Al hacer click en el boton de siguiente
$("#btn_next").click(function(){

    //Miramos si la siguiente posicion es menor que la longitud del array. Si es menor, 
    //se le suma una posicion y se cambia el audio del elemento source de la etiqueta audio
    if((i + 1) <= songs.length - 1)
    {
        i++;
        $("#player").attr("src", songs[i]);
    }else{
        i = 0;
        $("#player").attr("src", songs[i]);
    }
});

$("#btn_previous").click(function(){

    if((i - 1) >= 0)
    {
        i--;
        $("#player").attr("src", songs[i]);
    }else{
        i = songs.length - 1;
        $("#player").attr("src", songs[i]);
    }
});

document.getElementById("player").addEventListener("ended", function(){

    if((i + 1) <= songs.length - 1)
    {
        i++;
        $("#player").attr("src", songs[i]);
    }else{
        i = 0;
        $("#player").attr("src", songs[i]);
    }
});


$(window).on("scroll", function () {
    if( $(window).scrollTop() > ($(".footer").offset().top - (($(window).height() - $(".footer").height()))))
    {
        $(".music-container").css("bottom", $(".footer").height() + 15);
    }else{
        $(".music-container").css("bottom", "0");
    }
    
});