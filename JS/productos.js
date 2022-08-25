

class producto {
    constructor(id, nombre, imagen, precio, cantidad, comprar) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidad = 1;
    }
}

const producto1 = new producto ("1","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/1.png", 12)
const producto2 = new producto ("2","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/2.png", 10)
const producto3 = new producto ("3","Otro producto", "../Multimedia/PRODUCTOS/3.png", 6)
const producto4 = new producto ("4","Otro otro producto", "../Multimedia/PRODUCTOS/4.png", 40)
const producto5 = new producto ("5","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/5.png", 12)
const producto6 = new producto ("6","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/6.png", 10)
const producto7 = new producto ("7","Otro producto", "../Multimedia/PRODUCTOS/7.png", 6)
const producto8 = new producto ("8","Otro otro producto", "../Multimedia/PRODUCTOS/8.png", 40)
const producto9 = new producto ("9","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/9.png", 12)
const producto10 = new producto ("10","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/10.png", 10)
const producto11 = new producto ("11","Otro producto", "../Multimedia/PRODUCTOS/11.png", 6)
const producto12 = new producto ("12","Otro otro producto", "../Multimedia/PRODUCTOS/12.png", 40)
const producto13 = new producto ("13","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/13.png", 12)
const producto14 = new producto ("14","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/14.png", 10)
const producto15 = new producto ("15","Otro producto", "../Multimedia/PRODUCTOS/15.png", 6)
const producto16 = new producto ("16","Otro otro producto", "../Multimedia/PRODUCTOS/16.png", 40)
const producto17 = new producto ("17","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/17.png", 12)
const producto18 = new producto ("18","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/18.png", 10)
const producto19 = new producto ("19","Otro producto", "../Multimedia/PRODUCTOS/19.png", 6)
const producto20 = new producto ("20","Otro otro producto", "../Multimedia/PRODUCTOS/20.png", 40)
const producto21 = new producto ("21","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/21.png", 12)
const producto22 = new producto ("22","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/22.png", 10)
const producto23 = new producto ("23","Otro producto", "../Multimedia/PRODUCTOS/23.png", 6)
const producto24 = new producto ("24","Otro otro producto", "../Multimedia/PRODUCTOS/24.png", 40)
const producto25 = new producto ("25","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/25.png", 12)
const producto26 = new producto ("26","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/26.png", 10)
const producto27 = new producto ("27","Otro producto", "../Multimedia/PRODUCTOS/27.png", 6)
const producto28 = new producto ("28","Otro otro producto", "../Multimedia/PRODUCTOS/28.png", 40)
const producto29 = new producto ("29","Eyes on me - Liquid eyeliner", "../Multimedia/PRODUCTOS/29.png", 12)
const producto30 = new producto ("30","Lapiz de cejas retractil", "../Multimedia/PRODUCTOS/30.png", 10)
const producto31 = new producto ("31","Otro producto", "../Multimedia/PRODUCTOS/31.png", 6)
const producto32 = new producto ("31","Otro otro producto", "../Multimedia/PRODUCTOS/32.png", 40)



const productos=[];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);
productos.push(producto13);
productos.push(producto14);
productos.push(producto15);
productos.push(producto16);
productos.push(producto17);
productos.push(producto18);
productos.push(producto19);
productos.push(producto20);
productos.push(producto21);
productos.push(producto22);
productos.push(producto23);
productos.push(producto24);
productos.push(producto25);
productos.push(producto26);
productos.push(producto27);
productos.push(producto28);
productos.push(producto29);
productos.push(producto30);
productos.push(producto31);
productos.push(producto32);

productosars = productos;

const contenedorCarrito = document.getElementById("carrito-contenedor")

const botonVaciar = document.getElementById("vaciar-carrito")

const precioTotal = document.getElementById("precioTotal")

botonVaciar.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
})


let carrito = []


// Mostrar los productos 

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

// Agregar cosas al carrito

const agregarAlCarrito = (productoId) => {

    const existe = carrito.some (producto => producto.id === productoId)

    if (existe) {
        const producto = carrito.map(producto => {
            if (producto.id === productoId) {
                producto.cantidad++;
            }
        })
    } else {
    const item = productos.find ((producto) => producto.id === productoId)
    carrito.push(item);
    actualizarCarrito();
    console.log(carrito)
}
actualizarCarrito()
}

mostrarProductos(productos);

// Función para que se actualice el carrito en cada movimiento

const actualizarCarrito = () => {

    let pre = 0;

    contenedorCarrito.innerHTML = ""

    carrito.forEach(producto => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${producto.id})" class="boton-eliminar">X</button>
        `

       contenedorCarrito.appendChild(div) 

       localStorage.setItem("carrito", JSON.stringify(carrito))
    }); 

    carrito.forEach(element => {
        pre = pre + (element.precio * element.cantidad * pesosARG)  
    });



    precioTotal.innerHTML = `${pre}`
}

//Eliminar productos del carrito

const eliminarDelCarrito = (productoId) => {
    
    const item = carrito.find((producto) => producto.id === productoId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito ()
}

// Almacenamiento

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})


/**PASAR PRECIO DE DOLAR A PESOS */

fetch("https://open.er-api.com/v6/latest/USD")
.then( res => res.json())
.then( data => {
    pesosARG = (data.rates.ARS)});






