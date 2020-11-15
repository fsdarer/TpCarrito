const productos = [
  {
    id: "azucar",
    producto: "Azucar",
    precio: 50,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "leche",
    producto: "Leche",
    precio: 78,
    imagen:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  },
  {
    id: "cafe",
    producto: "Cafe",
    precio: 300,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "alfajor",
    producto: "Alfajor Terrabusi",
    precio: 55,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "mayonesa",
    producto: "Mayonesa",
    precio: 130,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "jabon",
    producto: "Jabon",
    precio: 300,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "shampoo",
    producto: "shampoo",
    precio: 180,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "desodorante",
    producto: "Desodorante",
    precio: 200,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "tomate",
    producto: "Tomate",
    precio: 60,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "servilletas",
    producto: "Servilletas",
    precio: 80,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "lavandina",
    producto: "Lavandina",
    precio: 70,
    imagen: "https://source.unsplash.com/random/500x500/?potato&sig=1",
  },
  {
    id: "aceite",
    producto: "Aceite",
    precio: 100,
    imagen:
      "https://images.unsplash.com/photo-1552592074-ea7a91b851b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  },
];

//constantes
const listaCarrito = [];

const botonTotalizar = document.getElementById("totalizar");

const botonEliminar = document.getElementById("eliminar");

const tbody = document.querySelector("#tablaListado tbody");

const tbodyCarrito = document.querySelector("#tablaCarrito tbody");

function crearListado() {
  productos.forEach((item) => {
    const tr = document.createElement("tr");
    tr.id = item.id;

    const tdImagen = document.createElement("td");
    const imagenProducto = document.createElement("img");
    imagenProducto.src = item.imagen;
    tdImagen.appendChild(imagenProducto);

    const tdProducto = document.createElement("td");
    //const tdProductoTxt = document.createTextNode(item.producto);
    tdProducto.innerHTML = item.producto;
    //tdProducto.appendChild(tdProductoTxt);

    const tdPrecio = document.createElement("td");
    //const tdPrecioTxt = document.createTextNode(item.precio);
    tdPrecio.textContent = item.precio;
    //tdPrecio.appendChild(tdPrecioTxt);

    tr.appendChild(tdImagen);
    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);

    tbody.appendChild(tr);
  });
}
crearListado();
tbody.addEventListener("click", (e) => agregarACarrito(e));

//document.getElementById(productos).addEventListener("click", agregarCarrito, true);

function crearCarrito() {
  tbodyCarrito.innerHTML = "";
  listaCarrito.forEach((item) => {
    const tr = document.createElement("tr");

    const tdProducto = document.createElement("td");
    //const tdProductoTxt = document.createTextNode(item.producto);
    tdProducto.textContent = item.producto;
    //tdProducto.appendChild(tdProductoTxt);

    const tdPrecio = document.createElement("td");
    //const tdPrecioTxt = document.createTextNode(item.precio);
    tdPrecio.textContent = item.precio;
    //tdPrecio.appendChild(tdPrecioTxt);

    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);

    tbodyCarrito.appendChild(tr);
  });
}

function agregarACarrito(e) {
  if (e.target.tagName === "TR" || e.target.parentNode.tagName === "TR") {
    // (e) evento y tagName contiene el nombre del elemento actual

    //console.log(idProducto);
    const idProducto = e.target.id ? e.target.id : e.target.parentNode.id;

    const existeProducto = listaCarrito.some((item) => item.id === idProducto);
    if (!existeProducto) {
      const productoComprado = productos.filter(
        (producto) => producto.id === idProducto
      );
      //console.log(productoComprado);

      listaCarrito.push(...productoComprado);
      //console.log(listaCarrito);

      crearCarrito();
    }
  }

  //tablaCarrito.push(producto);
  //agregarElemento(producto, tablaCarrito);
}

function totalizarCompra() {
  console.log("comprado");
}

function eliminarProducto() {
  console.log("eliminado");
}

botonTotalizar.addEventListener("click", totalizarCompra);

//botonEliminar.addEventListener("click", eliminarProducto);
