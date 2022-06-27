let productos = [
  {
    ID_Producto: 1,
    NombreProducto: "Teclado",
    DescripcionProducto: "Teclado Basico",
    PrecioProducto: 50,
    sctokProducto: 6,
    imagenProducto: "https://i.pravatar.cc/200?u=1",
    descuentoProducto: 12.5,
    ID_Categoria: 2,
    estado: false,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
    ID_TDA: 1,
  },
  {
    ID_Producto: 2,
    NombreProducto: "Mouse",
    DescripcionProducto: "Mouse Gamer",
    PrecioProducto: 150,
    sctokProducto: 20,
    imagenProducto: "https://i.pravatar.cc/200?u=2",
    descuentoProducto: 12.5,
    ID_Categoria: 1,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
    ID_TDA: 1,
  },
  {
    ID_Producto: 3,
    NombreProducto: "Monitor",
    DescripcionProducto: "Monitor basico",
    PrecioProducto: 1200,
    sctokProducto: 5,
    imagenProducto: "https://i.pravatar.cc/200?u=3",
    descuentoProducto: 12.5,
    ID_Categoria: 2,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
    ID_TDA: 1,
  },
  {
    ID_Producto: 4,
    NombreProducto: "Case Gamer",
    DescripcionProducto: "Case Gamer Alienware",
    PrecioProducto: 1500,
    sctokProducto: 10,
    imagenProducto: "https://i.pravatar.cc/200?u=4",
    descuentoProducto: 12.5,
    ID_Categoria: 1,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
    ID_TDA: 1,
  },
  {
    ID_Producto: 5,
    NombreProducto: "Microfono",
    DescripcionProducto: "Microfono Gamer",
    PrecioProducto: 456,
    sctokProducto: 20,
    imagenProducto: "https://i.pravatar.cc/200?u=5",
    descuentoProducto: 12.5,
    ID_Categoria: 1,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: null,
    ID_TDA: 1,
  },
  {
    ID_Producto: 6,
    NombreProducto: "Laptop Gamer",
    DescripcionProducto: "Laptop Gamer Lenovo",
    PrecioProducto: 5600,
    sctokProducto: 100,
    imagenProducto: "https://i.pravatar.cc/200?u=6",
    descuentoProducto: 12.5,
    ID_Categoria: 1,
    estado: true,
    ID_TipoEnvio: 1,
    ID_Cupon: 2,
    ID_TDA: 1,
  },
];

let productosCart = [];

let categorias = [
  { ID_Categoria: 1, NombreCategoria: "Gamer" },
  { ID_Categoria: 2, NombreCategoria: "Oficina" },
  { ID_Categoria: 3, NombreCategoria: "Comercial" },
  { ID_Categoria: 4, NombreCategoria: "Colegio" },
  { ID_Categoria: 5, NombreCategoria: "Otro Basico" },
  { ID_Categoria: 6, NombreCategoria: "Otro Gamer" },
];

let cupones = [
  { ID_Cupon: 1, CodigoCupon: "CompuGamer", Dscto: null, Tipo: "Por Producto" },
  { ID_Cupon: 2, CodigoCupon: "ArribaPeru", Dscto: 15, Tipo: "Por Producto" },
  {
    ID_Cupon: 3,
    CodigoCupon: "DiaPadreUno",
    Dscto: null,
    Tipo: "Por Producto",
  },
  { ID_Cupon: 4, CodigoCupon: "DiaPadreDos", Dscto: 25, Tipo: "Total" },
];

let calificacion = [
  {
    ID_Calificacion: 1,
    Comentario: "Ese teclado es genial",
    ID_Producto: 1,
    Puntaje: 5,
  },
  {
    ID_Calificacion: 2,
    Comentario: "Ese teclado es bueno",
    ID_Producto: 1,
    Puntaje: 4,
  },
  {
    ID_Calificacion: 3,
    Comentario: "Ese teclado es genial",
    ID_Producto: 2,
    Puntaje: 3,
  },
  {
    ID_Calificacion: 4,
    Comentario: "Ese teclado es bueno",
    ID_Producto: 2,
    Puntaje: 5,
  },
  {
    ID_Calificacion: 5,
    Comentario: "Ese teclado es genial",
    ID_Producto: 3,
    Puntaje: 3,
  },
  {
    ID_Calificacion: 6,
    Comentario: "",
    ID_Producto: 2,
    Puntaje: 5,
  },
  {
    ID_Calificacion: 7,
    Comentario: "",
    ID_Producto: 4,
    Puntaje: 1,
  },
];

let tiendas = [
  { ID_TDA: 1, Nombre_TDA: "CD" },
  { ID_TDA: 2, Nombre_TDA: "Tienda 1" },
  { ID_TDA: 3, Nombre_TDA: "Tienda 1" },
];

let departamentos = [
  { ID_DPTO: 1, Nombre: "Cajamarca" },
  { ID_DPTO: 2, Nombre: "Arequipa" },
  { ID_DPTO: 3, Nombre: "Lima" },
];
let provincias = [
  { ID_PROVINCIA: 1, ID_DPTO:1, Nombre: "Cajamarca" },
  { ID_PROVINCIA: 2, ID_DPTO:2, Nombre:"Arequipa" },
  { ID_PROVINCIA: 3, ID_DPTO:3, Nombre:"Lima" },
  { ID_PROVINCIA: 4, ID_DPTO:3, Nombre: "Callao" },
  { ID_PROVINCIA: 5, ID_DPTO:2, Nombre: "Camaná" }
];
let distritos = [
  { ID_DISTRITO: 1, ID_PROVINCIA:1, Nombre: "Cajamarca" , Tarifa:22},
  { ID_DISTRITO: 2, ID_PROVINCIA:2, Nombre: "Yanahuara" , Tarifa:23},
  { ID_DISTRITO: 3, ID_PROVINCIA:2, Nombre: "Miraflores" , Tarifa:25},
  { ID_DISTRITO: 4, ID_PROVINCIA:3, Nombre: "Chorrillos" , Tarifa:30},
  { ID_DISTRITO: 5, ID_PROVINCIA:4, Nombre: "La Perla" , Tarifa:25},
  { ID_DISTRITO: 6, ID_PROVINCIA:4, Nombre: "La Punta" , Tarifa:24},
  { ID_DISTRITO: 7, ID_PROVINCIA:5, Nombre: "Camaná" , Tarifa:40},
  { ID_DISTRITO: 8, ID_PROVINCIA:3, Nombre: "San Borja" , Tarifa:20},
  { ID_DISTRITO: 9, ID_PROVINCIA:3, Nombre: "Jesus María" , Tarifa:10},
  { ID_DISTRITO: 10, ID_PROVINCIA:3, Nombre: "Miraflores" , Tarifa:15},
  
];

let detalleCompra = [];



let tipoEnvio = [];
