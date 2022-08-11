

class producto {
    constructor(id, nombre, imagen, precio, comprar) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const producto1 = new producto ("1","Eyes on me - Liquid eyeliner", "../Multimedia/CATALOGO/1.png", "$1500")
const producto2 = new producto ("2","Lapiz de cejas retractil", "../Multimedia/CATALOGO/2.png", "$1600")
const producto3 = new producto ("3","Otro producto", "../Multimedia/CATALOGO/3.png", "$2000")
const producto4 = new producto ("4","Otro otro producto", "../Multimedia/CATALOGO/4.png", "$1800")

const productos = []

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);


const contenedorCarrito = document.getElementById("carrito-contenedor")

let carrito = []


function mostrarProductos(productos) {

    const contenedorDeProductos = document.getElementById("contenedor-de-productos");
    contenedorDeProductos.innerHTML = "";

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.innerHTML = `
        <img class="imagenes" src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        `;

        const botonComprar = document.createElement("button");
        botonComprar.classList.add("botonComprar")
        botonComprar.innerText = "Comprar";
        botonComprar.addEventListener("click", () => {
           agregarAlCarrito(producto.id)
        })

    divProducto.appendChild(botonComprar);

    contenedorDeProductos.appendChild(divProducto);
        
    });
}


const agregarAlCarrito = (productoId) => {
    const item = productos.find ((producto) => producto.id === productoId)
    carrito.push(item);
    actualizarCarrito();
    console.log(carrito)
}

mostrarProductos(productos);

const actualizarCarrito = () => {

    carrito.forEach(producto) ; {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${producto.id})" class="boton-eliminar"></button>
        `

       contenedorCarrito.appendChild(div)
    }}