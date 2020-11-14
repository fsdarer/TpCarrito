const productos = [
    {   
        producto: "zanahorias",
        precio: 30,
    },
    {   
        producto: "tomates",
        precio: 80,
    },
    {   
        producto: "lechuga",
        precio: 40,
    },
    {   
        producto: "apio",
        precio: 30,
    },
    {   
        producto: "rucula",
        precio: 50,
    },
    {   
        producto: "naranjas",
        precio: 70,
    },
    {   
        producto: "manzanas",
        precio: 60,
    },
    {   
        producto: "kiwi",
        precio: 80,
    },
    {   
        producto: "sandia",
        precio: 90,
    },
    {   
        producto: "melon",
        precio: 80,
    },
    {   
        producto: "mandarina",
        precio: 30,
    },
    {   
        producto: "limon",
        precio: 50,
    },
    {   
        producto: "carbon",
        precio: 40,
    },
    {   
        producto: "huevos",
        precio: 100,
    },
];

    function crearTabla () {  
        productos.forEach(producto => {

            const tr = document.createElement("tr");

            const tdProducto = document.createElement("td");
            const tdProductoTxt = document.createTextNode(producto.producto);
            tdProducto.appendChild(tdProductoTxt);
        });
    
    }

    
    function crearListado() {
        const tbody = document.querySelector('tbody');

        productos.forEach((item)=>{

        const tr = document.createElement('tr');

        const tdProducto = document.createElement('td');
        const tdProductoTxt = document.createTextNode('item.producto');
        tdProducto.appendChild(tdProductoTxt);

        const tdPrecio = document.createElement('td');
        const tdPrecioTxt = document.createElement(item.precio);
        tdPrecio.appendChild(tdPrecioTxt);

        tr.appendChild(tdProducto);
        tr.appendChild(tdPrecio);


        tbody.appendChild(tr);

        });
    }

