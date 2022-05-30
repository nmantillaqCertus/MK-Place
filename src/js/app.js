
$(document).ready(function(){
    secciones();
});



function secciones(){

    $("#idBtnComenzar").on("click", function(){
        $("#idLanding").hide();
        $("#idSeccion01").show();
    });


    /*Lading*/
    $("#idSecLading").on("click", function(){
        $("#idLanding").show();
        $("#idSeccion01").hide();
        /*$("#idSeccion02").hide();
        $("#idSeccion03").hide();*/
    });

    $("#idSecUno").on("click", function(){
        $("#idLanding").hide();
        $("#idSeccion01").show();
        /*$("#idSeccion02").hide();
        $("#idSeccion03").hide();*/
    });
    /*
    $("#idSecDos").on("click", function(){
        $("#idLanding").hide();
        $("#idSeccion01").hide();
        $("#idSeccion02").show();
        $("#idSeccion03").hide();
    });
    */

    
}


