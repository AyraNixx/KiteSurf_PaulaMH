"use strict";

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

        //Una vez obtenido el src de la imagen, cambiamos el src de la etiqueta img que se encuentra en el modal
        $(".modal-body img").attr("src", src);
        
    });
});