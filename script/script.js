const productos = [
  {
    id: 1,
    producto: "Azucar Ledesma",
    precio: 50,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7792540260138_02.jpg",
  },
  {
    id: 2,
    producto: "Leche La Serenisima",
    precio: 78,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7793940448003_01_nuevopack.jpg",
  },
  {
    id: 3,
    producto: "Cafe Dolca",
    precio: 300,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/6/7613035070981_01_nuevopack.jpg",
  },
  {
    id: 4,
    producto: "Alfajor Terrabusi",
    precio: 55,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/77939234_01.jpg",
  },
  {
    id: 5,
    producto: "Mayonesa Natura",
    precio: 130,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7791866001364_02.jpg",
  },
  {
    id: 6,
    producto: "Jabon Skip",
    precio: 300,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7791290010055_05_nuevopack.jpg",
  },
  {
    id: 7,
    producto: "shampoo Elvive",
    precio: 180,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/5/7509552838954_01.jpg",
  },
  {
    id: 8,
    producto: "Desodorante Dove",
    precio: 200,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/8/78924468_01_nuevopack.jpg",
  },
  {
    id: 9,
    producto: "Tomate Marolio",
    precio: 60,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7793360000485_01.jpg",
  },
  {
    id: 10,
    producto: "Servilletas Elite",
    precio: 80,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7790250023524_02.jpg",
  },
  {
    id: 11,
    producto: "Lavandina Ayudin",
    precio: 70,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7793253001360_01.jpg",
  },
  {
    id: 12,
    producto: "Aceite Natura",
    precio: 100,
    imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/thumbnail/60x/9df78eab33525d08d6e5fb8d27136e95/7/7/7790272000046_02.jpg",
  },
];

const listaCarrito = [];

const botonTotalizar = document.getElementById("totalizar");

const eliminar = document.getElementById("eliminar");

const tbodyListado = document.querySelector("#tablaListado tbody");

const tbodyCarrito = document.querySelector("#tablaCarrito tbody");

const total = document.querySelector("#total");

function crearListado() {
  productos.forEach((item) => {
    const tr = document.createElement("tr");

    const tdProducto = document.createElement("td");
    const tdProductoTxt = document.createTextNode(item.producto);
    tdProducto.appendChild(tdProductoTxt);

    const tdPrecio = document.createElement("td");
    const tdPrecioTxt = document.createTextNode(item.precio);
    tdPrecio.appendChild(tdPrecioTxt);

    const tdImagen = document.createElement("td");
    const imagenProducto = document.createElement("img");
    imagenProducto.src = item.imagen;
    tdImagen.appendChild(imagenProducto);


    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdImagen);

    tr.addEventListener("click", () => agregarACarro(item));
    tbodyListado.appendChild(tr);
  });
}
crearListado();

function agregarACarro(nuevoItem) {
  if (listaCarrito.length == 0) {
    listaCarrito.push(nuevoItem);
  } else {
    let existe = listaCarrito.find((i) => i.id == nuevoItem.id);
    if (existe == undefined) {
      listaCarrito.push(nuevoItem);
    }
  }
  tbodyCarrito.innerHTML = "";
  listaCarrito.forEach((item) => {
    const tr = document.createElement("tr");

    const tdProducto = document.createElement("td");
    const tdProductoTxt = document.createTextNode(item.producto);
    tdProducto.appendChild(tdProductoTxt);

    const tdPrecio = document.createElement("td");
    const tdPrecioTxt = document.createTextNode(item.precio);
    tdPrecio.appendChild(tdPrecioTxt);

    const tdImagen = document.createElement("td");
    const imagenProducto = document.createElement("img");
    imagenProducto.src = item.imagen;
    tdImagen.appendChild(imagenProducto);

    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdImagen);
    tr.addEventListener("click", (e) => eliminarProducto(e, item));
    tbodyCarrito.appendChild(tr);
  });
}

function totalizarCompra() {
  let total = 0;
  listaCarrito.forEach((item) => {
    total += item.precio;
  });

  let resultado = document.getElementById("totalResultado");
  totalResultado.innerHTML = total;
}

function eliminarProducto(e, item) {
  let index = listaCarrito.findIndex((i) => i.id == item.id);
  listaCarrito.splice(index, 1);
  tbodyCarrito.removeChild(e.currentTarget);
}

botonTotalizar.addEventListener("click", totalizarCompra);
