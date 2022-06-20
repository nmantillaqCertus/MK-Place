/*$(document).ready(function () {
  secciones();
  fnCargarProductos();
});
*/

$.when($.ready).then(function () {
  secciones();
  fnCargarProductos();
  tablaProducto = $("#idTablaProducto").DataTable();
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
    fnCrearSlide();
    fnPoblarTabla();
  } else {
    $("#idLanding").hide();
    $("#idSeccion01").show();
    $("#idSeccion02").hide();
  }
}

let CuponAplicado = null;
function fnAplicarCupon() {
  let descuento = $("#idDescuento").val().trim();
  if (
    descuento.length > 0 &&
    descuento != null &&
    descuento != "" &&
    descuento != undefined
  ) {
    CuponAplicado = null;
    let cuponEncontrado = cupones.find((c) => c.CodigoCupon === descuento);
    CuponAplicado = cuponEncontrado;
    fnPoblarTabla();
  }
}

function fnPoblarTabla() {
  tablaProducto.clear();
  let precioTotal = 0;
  for (let i = 0; i < productosCart.length; i++) {
    let productoEncontrado = productos.find(
      (prod) => prod.ID_Producto == productosCart[i].idProducto
    );
    let categoriaProducto = categorias.find(
      (c) => c.ID_Categoria == productoEncontrado.ID_Categoria
    ).NombreCategoria;

    let precioPorProducto = 0;
    if (CuponAplicado != null) {
      switch (true) {
        case CuponAplicado.Tipo == "Por Producto":
          if (productoEncontrado.ID_Cupon != null) {
            let cuponProducto = cupones.find(
              (x) => x.ID_Cupon == productoEncontrado.ID_Cupon
            );
            precioPorProducto =
              productoEncontrado.PrecioProducto -
              (productoEncontrado.PrecioProducto * cuponProducto.Dscto) / 100;
          } else {
            precioPorProducto = productoEncontrado.PrecioProducto;
          }
          break;
        case CuponAplicado.Tipo == "Total":
          precioPorProducto = productoEncontrado.PrecioProducto;
          break;
      }
    } else {
      precioPorProducto = productoEncontrado.PrecioProducto;
    }
    precioTotal += precioPorProducto;

    tablaProducto.row
      .add([
        "<span><img src='" +
          productoEncontrado.imagenProducto +
          "' style='width:30px'/></span>",
        "<span>" + productoEncontrado.NombreProducto + "</span>",
        "<span>" + productoEncontrado.DescripcionProducto + "</span>",
        "<span>" + precioPorProducto + "</span>",
        "<span>" + productoEncontrado.sctokProducto + "</span>",
        "<span>" + categoriaProducto + "</span>",
      ])
      .draw();
  }

  if (CuponAplicado != null) {
    debugger;
    switch (true) {
      case CuponAplicado.Tipo == "Total":
        precioTotal = precioTotal - (precioTotal * CuponAplicado.Dscto) / 100;
        break;
    }
  }

  $("#idPrecioTotal").text(precioTotal);
}

function fnCrearSlide() {
  if (calificacion.length != 0) {
    let NuevaCalificacion = calificacion.filter((x) => x.Puntaje > 4);
    let prodAux = [];
    for (let i = 0; i < NuevaCalificacion.length; i++) {
      let productoEncontrado = productos.find(
        (p) => p.ID_Producto == NuevaCalificacion[i].ID_Producto
      );
      if (
        prodAux.find((x) => x.ID_Producto == productoEncontrado.ID_Producto) ==
        null
      ) {
        prodAux.push(productoEncontrado);
      }
    }

    //Creas el slide
    if (prodAux.length != 0) {
      $("#idSlide").empty();
      let claseSlide = "carousel-item active";
      for (let i = 0; i < prodAux.length; i++) {
        if (i != 0) {
          claseSlide = "carousel-item";
        }
        $("#idSlide").append(`
            <div class="${claseSlide}">
              <img src="${prodAux[i].imagenProducto}" class="d-block w-100" alt="${prodAux[i].NombreProducto}">
              <div class="carousel-caption d-none d-md-block">
                <h5>${prodAux[i].NombreProducto}</h5>
                <p>${prodAux[i].DescripcionProducto}</p>
              </div>
            </div>
         `);
      }
    }
  }
}
