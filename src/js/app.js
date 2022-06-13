/*$(document).ready(function () {
  secciones();
  fnCargarProductos();
});
*/

$.when($.ready).then(function () {
  debugger
  secciones();
  fnCargarProductos();
  tablaProducto =  $("#idTablaProducto").DataTable();
});

//idContentProduct

var tablaProducto = null;

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

function addCart(val) {
  console.log("Valor recibido " + val);

  let valorId = productosCart.length + 1;
  productosCart.push({
    idProductosCart: valorId,
    idProducto: val,
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
    $("#idSeccion02").hide();
  });

  $("#idSecUno").on("click", function () {
    $("#idLanding").hide();
    $("#idSeccion01").show();
    $("#idSeccion02").hide();
  });

  $("#idLinkCart").on("click", function () {
    fnAdminCart();
  });
}

function fnAdminCart() {
  if (productosCart.length != 0) {
    $("#idLanding").hide();
    $("#idSeccion01").hide();
    $("#idSeccion02").show();

    fnPoblarTabla();

  } else {
    $("#idLanding").hide();
    $("#idSeccion01").show();
    $("#idSeccion02").hide();
  }
}

function fnAplicarCupon(){
  
}


function fnPoblarTabla(){  

  tablaProducto.clear();
  let precioTotal = 0; 
  for(let i=0; i<productosCart.length; i++){
    debugger
    let productoEncontrado = productos.find(prod => prod.ID_Producto == productosCart[i].idProducto); 
    let catProducto = categorias.find(c => c.ID_Categoria == productoEncontrado.ID_Categoria).NombreCategoria;

    precioTotal = precioTotal + productoEncontrado.PrecioProducto;

    tablaProducto.row.add([
      "<span><img src='"+productoEncontrado.imagenProducto+"' style='width:30px'/></span>",
      "<span>"+productoEncontrado.NombreProducto+"</span>",
      "<span>"+productoEncontrado.DescripcionProducto+"</span>",
      "<span>"+productoEncontrado.PrecioProducto+"</span>",
      "<span>"+productoEncontrado.sctokProducto+"</span>",
      "<span>"+catProducto+"</span>"
    ]).draw();
  }
  
  
  $("#idPrecioTotal").text(precioTotal);
}