//obtenemos todos los elementos que tengan la clase faq-trigger
let btns = document.querySelectorAll(".course__h6");

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
btns.forEach((el) => el.addEventListener("click", mostrar));
