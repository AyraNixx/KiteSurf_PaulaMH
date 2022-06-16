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
