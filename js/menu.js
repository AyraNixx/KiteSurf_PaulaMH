$("#nav__menu").click(() => {
    $(".nav-showed").css("z-index", 300).delay(40).queue(function() {
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