const productos = [
    {   
        producto: "zanahorias",
        precio: 30,
    },
    {   
        producto: "tomates",
    },
    {   
        producto: "lechuga",
    },
    {   
        producto: "apio",
    },
    {   
        producto: "rucula",
    },
    {   
        producto: "naranjas",
    },
    {   
        producto: "manzanas",
    },
    {   
        producto: "kiwi",
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

