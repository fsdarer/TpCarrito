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
    },
    {   
        producto: "melon",
    },
    {   
        producto: "mandarina",
    },
    {   
        producto: "limon",
    },
    {   
        producto: "carbon",
    },
    {   
        producto: "huevos",
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

