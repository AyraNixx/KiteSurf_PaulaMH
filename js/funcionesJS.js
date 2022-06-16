"use strict";



////////////////////////////////////////////////////////////////////////
///////////////             MENU                             ///////////
////////////////////////////////////////////////////////////////////////
$("#nav__menu").click(() => {
    $(".nav-showed").css("z-index", 700).delay(40).queue(function() {
        $(this).width(370);
        $(this).dequeue();
    })
});

/*Utilizamos queue junto con delay porque delay solo funciona con elementos en la cola*/
/*Una cola, está formada por las funciones que esperan ser ejecutadas y con el método
queue podemos modiciarla*/
$(".btn__close").click(function () {
        $(".nav-showed").width(0).delay(200).queue(function() {
            $(this).css("z-index", 0);
            /*Una vez que se realice la funcion, la eliminamos de la cola*/
            $(this).dequeue();
        });
});













////////////////////////////////////////////////////////////////////////
///////////////             MUSIC                            ///////////
////////////////////////////////////////////////////////////////////////
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

$(".information__video").click(function () {
    document.getElementById('player').pause();
})

/*
$(window).on("scroll", function () {
    if( $(window).scrollTop() > ($(".footer").offset().top - (($(window).height() - $(".footer").height()))))
    {
        $(".music-container").css("bottom", $(".footer").height() + 15);
    }
    
});*/














////////////////////////////////////////////////////////////////////////
///////////////             FOOTER                           ///////////
////////////////////////////////////////////////////////////////////////
$("#btn__footer").click(function() {
    $(".footer__main-content").toggle(50).css("display", "flex");

    if($("#btn__footer").hasClass("fa-circle-chevron-up"))
    {
        $("#btn__footer").removeClass("fa-circle-chevron-up").addClass('fa-circle-chevron-down');
    }else{
        $("#btn__footer").removeClass("fa-circle-chevron-down").addClass('fa-circle-chevron-up');
    }
});












////////////////////////////////////////////////////////////////////////
///////////////             GALERIA                          ///////////
////////////////////////////////////////////////////////////////////////

//Con pageX podemos calcular la posicion relativa al extremo izquierdo del documento
//Con pageY, lo mismo pero con el extremo superior.


/*
$(function()
{
    $(".img-container").mousemove(function (e)
    {
        let x = e.clientX - 250; 
        let y = e.clientY - 150;

        $(".img-content-hover").css({
            left: (x + 10) + 'px',
            top:  (y + 10) + 'px',
            display: "block"
        });
        console.log(x + "    " + scrollY);
    });
});
*/



//NO HE SABIDO HACERLO COMO QUERÍA Y ME HE DADO CUENTA LO MALA QUE SOY CON 
//JAVASCRIPT, SOY IDIOTA


$(document).ready(function() {
    $("img").click(function (e) { 
        //Obtenermos el src de la imagen a la que hemos hecho clic
        let src = $(this).attr("src");
        let title = $(this).attr("title");

        //Una vez obtenido el src de la imagen, cambiamos el src de la etiqueta img que se encuentra en el modal
        $(".modal-body img").attr({
            "src": src,
            "alt": title,
            "title": title
        });
        
    });
});



















////////////////////////////////////////////////////////////////////////
///////////////       FOTOS DE LOS CURSOS EN LA PORTADA      ///////////
////////////////////////////////////////////////////////////////////////

let imgs = document.getElementsByClassName("section-page__img");

$(document).ready(function() {

    $("#cursoKite i").click(function(e){

        for(let i = 0; i < (imgs.length / 2); i++)
        {
            imgs[i].classList.remove("active");
        }

        if(e.target.classList.contains("first"))
        {
            imgs[0].classList.add("active");

        }else if(e.target.classList.contains("second")){

            imgs[1].classList.add("active");

        }else if(e.target.classList.contains("third"))
        {
            imgs[2].classList.add("active");
        }
    });

    $("#cursoSurf i").click(function(e){

        for(let i = 3; i < imgs.length; i++)
        {
            imgs[i].classList.remove("active");
        }

        if(e.target.classList.contains("first"))
        {
            imgs[3].classList.add("active");

        }else if(e.target.classList.contains("second")){

            imgs[4].classList.add("active");

        }else if(e.target.classList.contains("third"))
        {
            imgs[5].classList.add("active");
        }
    });
});   
 
        
    
    // alert(imgs.length)
    // for(let i=0; i < imgs.length; i++)
    // {
    //     alert(imgs[i]);
    //     console.log(imgs[i])
    // }

    // $("img").click(function (e) { 
    //     //Obtenermos el src de la imagen a la que hemos hecho clic
    //     let src = $(this).attr("src");

    //     //Una vez obtenido el src de la imagen, cambiamos el src de la etiqueta img que se encuentra en el modal
    //     $(".modal-body img").attr("src", src);
        
    // });

    



















////////////////////////////////////////////////////////////////////////
///////////////       FAQ                                    ///////////
////////////////////////////////////////////////////////////////////////
//obtenemos todos los elementos que tengan la clase faq-trigger
let btns = document.querySelectorAll(".faq-trigger");

//Creamos una funcion llamada mostrar
function mostrar() {
  
    //Con this le indicamos que la clase sobre la que se realiza la accion, 
    //va añadir la clase open con un toggle (on & off) 
    this.classList.toggle("open");

    if($(this).siblings().css("display") == "none")
    {            
        $(this).siblings().show();
    }else{
        
        $(this).siblings().hide();
    }
}

// event
btns.forEach((el) => el.addEventListener("click", mostrar));






    



















////////////////////////////////////////////////////////////////////////
///////////////       FAQ                                    ///////////
////////////////////////////////////////////////////////////////////////
//obtenemos todos los elementos que tengan la clase faq-trigger
let btnsC = document.querySelectorAll(".course__h6");

//Creamos una funcion llamada mostrar
function mostrar() {
  
    //Con this le indicamos que la clase sobre la que se realiza la accion, 
    //va añadir la clase open con un toggle (on & off) 

    if($(this).next().css("display") == "none")
    {            
        $(this).next().show();
    }else{
        
        $(this).next().hide();
    }
}

// event
btnsC.forEach((el) => el.addEventListener("click", mostrar));
