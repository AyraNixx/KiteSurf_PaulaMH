"use strict";


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