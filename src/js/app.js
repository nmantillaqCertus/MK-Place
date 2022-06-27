/*$(document).ready(function () {
  secciones();
  fnCargarProductos();
});
*/

$.when($.ready).then(function () {
  secciones();
  fnCargarProductos();
  tablaProducto = $("#idTablaProducto").DataTable();

  debugger;

  $("#contentPROVSel").on("click", function () {
    ///Haces cosas
  });
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
    $("#idSeccion03").hide();
  });

  $("#idSecUno").on("click", function () {
    $("#idLanding").hide();
    $("#idSeccion01").show();
    $("#idSeccion02").hide();
    $("#idSeccion03").hide();
  });

  $("#idLinkCart").on("click", function () {
    fnAdminCart();
  });
}

function fnProcesarCompra() {
  $("#idLanding").hide();
  $("#idSeccion01").hide();
  $("#idSeccion02").hide();
  $("#idNavegacion").hide();
  $("#idSeccion03").show();
  fnValidaOpc();
}

function fnValidaOpc() {
  debugger;
  var item = $("[name=deliveryOptions]:checked").val();

  switch (item) {
    case "1":
      $("#deliveryOptions1Div").show();
      $("#deliveryOptions2Div").hide();

      $("#contentOpcRecTDA").empty();
      for (let i = 0; i < tiendas.length; i++) {
        $("#contentOpcRecTDA").append(
          `<div class="form-check">
            <input class="form-check-input" type="radio" name="radRecojoTDA" id="radRecojoTDA" value="${tiendas[i].ID_TDA}">
            <label class="form-check-label" for="radRecojoTDA">
              ${tiendas[i].Nombre_TDA}
            </label>
          </div>`
        );
      }
      break;

    case "2":
      $("#deliveryOptions1Div").hide();
      $("#deliveryOptions2Div").show();

      debugger
      $("#contentDPTOSel").empty();
      $("#contentDPTOSel").append(
        `<option value = "0" selected>Elige un departamento</option>`
      );
      for (let i = 0; i < departamentos.length; i++) {
        $("#contentDPTOSel").append(
          `<option value="${departamentos[i].ID_DPTO}">${departamentos[i].Nombre}</option>`
        );
      }
      $("#contentDPTO").show();

      break;
  }
}

function fnvalidaSelectedDPTO() {
  var item = $("#contentDPTOSel option:selected").val();

  $("#contentPROVSel").empty();
  $("#contentPROVSel").append(
    `<option value = "0" selected>Elige una provincia</option>`
  );
  let listProvincias = provincias.filter((x) => x.ID_DPTO == parseInt(item));
  for (let i = 0; i < listProvincias.length; i++) {
    $("#contentPROVSel").append(
      `<option value="${listProvincias[i].ID_PROVINCIA}">${listProvincias[i].Nombre}</option>`
    );
  }
  $("#contentPROV").show();
}

function fnvalidaSelectedPROV() {
  var item = $("#contentPROVSel option:selected").val();

  $("#contentDISTSel").empty();
  $("#contentDISTSel").append(
    `<option value = "0" selected>Elige un distrito</option>`
  );
  let listdistritos = distritos.filter((x) => x.ID_PROVINCIA == parseInt(item));
  for (let i = 0; i < listdistritos.length; i++) {
    $("#contentDISTSel").append(
      `<option value="${listdistritos[i].ID_DISTRITO}">${listdistritos[i].Nombre}</option>`
    );
  }
  $("#contentDIST").show();
  $("#contentDireccion").show();
}

function fnBuscarMonto() {
  let disSeleccionado = $("#contentDISTSel").val();
  let tarifaFinal = 0;
  if (disSeleccionado != "0") {
    let tarifa = tarifaFinal = distritos.find(
      (d) => d.ID_DISTRITO == parseInt(disSeleccionado)
    ).Tarifa;
    $("#idCostoEnvio").text(tarifa);
    $("#idFechaEnvio").text( new Date().toString() );
  }

  return tarifaFinal
}

function fnAdminCart() {
  if (productosCart.length != 0) {
    $("#idLanding").hide();
    $("#idSeccion01").hide();
    $("#idSeccion02").show();
    $("#idSeccion03").hide();
    fnCrearSlide();
    fnPoblarTabla();
  } else {
    $("#idLanding").hide();
    $("#idSeccion01").show();
    $("#idSeccion02").hide();
    $("#idSeccion03").hide();
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

function validaElegido(){
  let token =  true;

  let dptoElegido = $("#contentDPTOSel").val();
  let provElegido = $("#contentPROVSel").val();
  let distElegido = $("#contentDISTSel").val();

  if(dptoElegido == '0'){
    token =  false
  }
  if(provElegido == '0'){
    token =  false
  }
  if(distElegido == '0'){
    token =  false
  }

  return token
}

function GoPay() {
  var opcion = $("[name=deliveryOptions]:checked").val();
  switch (opcion) {
    case "1": //Recojo en tienda
      prosRecojoTDA();
      
      break;
    case "2": //Envío a domicilio
      if(validaElegido()){
        prosEnvioDomicilio();
      }else{
        //Sugerencia: aplicar Modal
        alert("Revise selección");
      }
      break;
  }
}

function prosEnvioDomicilio() {
  let dptoElegido = $("#contentDPTOSel").val();
  let provElegido = $("#contentPROVSel").val();
  let distElegido = $("#contentDISTSel").val();
  let direccion = $("#idDireccion").val();
  let fechaEnvio =  $("#idFechaEnvio").text();
  let tarifa = fnBuscarMonto();

  detalleCompra.push(
    {
      departamento : dptoElegido,
      provincia : provElegido,
      distrito : distElegido,
      direccion : direccion,
      fechaEnvio : fechaEnvio,
      tarifa : tarifa,
      cupon: CuponAplicado,
      producto: productosCart
    }
  );

  /*
  console.log("Departamento " + dptoElegido);
  console.log("pROV  " + provElegido);
  console.log("Distrito " + distElegido);
  console.log("Dir " + direccion);
  console.log("FECH " + fechaEnvio);
  console.log("TARF " + tarifa);*/

}

function prosRecojoTDA() {
  let tdaElegida = $("[name=radRecojoTDA]:checked").val();

}
