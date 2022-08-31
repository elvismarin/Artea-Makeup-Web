

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



const productosusd=[];
const productos = [];
productosusd.push(producto1);
productosusd.push(producto2);
productosusd.push(producto3);
productosusd.push(producto4);
productosusd.push(producto5);
productosusd.push(producto6);
productosusd.push(producto7);
productosusd.push(producto8);
productosusd.push(producto9);
productosusd.push(producto10);
productosusd.push(producto11);
productosusd.push(producto12);
productosusd.push(producto13);
productosusd.push(producto14);
productosusd.push(producto15);
productosusd.push(producto16);
productosusd.push(producto17);
productosusd.push(producto18);
productosusd.push(producto19);
productosusd.push(producto20);
productosusd.push(producto21);
productosusd.push(producto22);
productosusd.push(producto23);
productosusd.push(producto24);
productosusd.push(producto25);
productosusd.push(producto26);
productosusd.push(producto27);
productosusd.push(producto28);
productosusd.push(producto29);
productosusd.push(producto30);
productosusd.push(producto31);
productosusd.push(producto32);

//const productos = structuredClone(productosusd);

/**PASAR PRECIO DE DOLAR A PESOS */
function convertirprecios ( pesosARG){
    productosusd.forEach(function(item) {
        item.precio = (item.precio * pesosARG).toFixed(2);
        productos.push(item);
    });
    mostrarProductos(productos);
}
fetch("https://open.er-api.com/v6/latest/USD")
.then( res => res.json())
.then( data => {
    convertirprecios (data.rates.ARS);
    //console.log(data.rates.ARS);
});


     
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
    console.log(productos);
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto", "col");
        divProducto.innerHTML = `
        <img class="producto__img" src="${producto.imagen}" alt="${producto.nombre}">
        <h4 class="producto__titulo">${producto.nombre}</h4>
        <p class="producto__precio">$${producto.precio}</p>
        `;
         
        const botonComprar = document.createElement("button");
        botonComprar.classList.add("botonComprar")
        botonComprar.innerText = "Añadir al carrito";
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
    console.log(carrito);
}
actualizarCarrito();
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
        pre = pre + (element.precio * element.cantidad )  
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








