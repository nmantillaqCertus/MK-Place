$(document).ready(function () {
  secciones();
  fnCargarProductos();
});

//idContentProduct

function fnCargarProductos() {
  if (productos.length != 0) {
    $("#idContentProduct").empty();
    for (let p = 0; p < productos.length; p++) {
      $("#idContentProduct").append(`
            <div class="card m-3" style="max-width: 400px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${productos[p].imagenProducto}" alt="${productos[p].NombreProducto}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${productos[p].NombreProducto}</h5>
                      <p class="card-text">${productos[p].DescripcionProducto}</p>
                      <p class="card-text">
                        <small class="text-muted">Calificación</small>
                        <span class="btn btn-sm btn-success" onclick="addCart(${productos[p].ID_Producto})" style="float: right !important;height: 24px!important;padding-top: 0px!important;">Agregar al Carrito</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>            
            `);
    }
  }
}

function addCart(val){
    console.log("Valor recibido "+val);
    
    let valorId = productosCart.length + 1;
    productosCart.push({
        idProductosCart: valorId,
        idProducto:val
    });

    $("#idNroCart").text(productosCart.length);

    //Operaciones X
}

function secciones() {
  $("#idBtnComenzar").on("click", function () {
    $("#idLanding").hide();
    $("#idSeccion01").show();
  });

  /*Lading*/
  $("#idSecLading").on("click", function () {
    $("#idLanding").show();
    $("#idSeccion01").hide();
    /*$("#idSeccion02").hide();
        $("#idSeccion03").hide();*/
  });

  $("#idSecUno").on("click", function () {
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
