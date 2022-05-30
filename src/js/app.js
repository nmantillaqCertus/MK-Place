/*window.onload = function(){
    console.log("Hola  Mundo");
};*/

$(document).ready(function(){
    //console.log( "todo listo para usar" );
    secciones();

    $(".ig").on("click", function(){
        window.location.href = "https://www.google.com.pe/";
    });
});


//Declaracion de Variables
let arrayPersonas = [];

function guardar(){
    let vNombre = $("#idNombre").val();
    let vApellido = $("#idApellido").val();
    let vEdad = $("#idEdad").val();
    let vDireccion = $("#idDireccion").val();

    arrayPersonas.push({
        aNombre: vNombre
    });
}

function secciones(){
    $("#idSecUno").on("click", function(){
        $("#idSeccion01").show();
        $("#idSeccion02").hide();
        $("#idSeccion03").hide();
    });
    
    $("#idSecDos").on("click", function(){
        $("#idSeccion01").hide();
        $("#idSeccion02").show();
        $("#idSeccion03").hide();
    });


    
}


