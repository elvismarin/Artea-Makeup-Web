

class Ficha {
    constructor(titulo, imagen, minDescripcion, descripcion, precio) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.minDescripcion = minDescripcion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

const ficha1 = new Ficha ("Sombras", "./JS/Contenido/2.png", "Sombra de 4 colores...", "Sombra de 4 colores, tonos violeta", "90$")
const ficha2 = new Ficha ("Brocha", "./JS/Contenido/5.png", "Brocha grande...", "Brocha grande y amplia para aplicar bases", "200$")
const ficha3 = new Ficha ("Delineador de ojos", "./JS/Contenido/10.png", "Delineador color metalico...", "Delineador de ojos color metal", "50$")
const ficha4 = new Ficha ("Delineador de cejas", "./JS/Contenido/13.png", "Sirve para obtener...", "Sirve para obtener un tono de cejas uniforme", "300$")
                          
                           
const fichas = []                             

fichas.push(ficha1);
fichas.push(ficha2);
fichas.push(ficha3);
fichas.push(ficha4);

                        

function mostrarDescripcion(ficha) {
    const contenidoFichas = document.getElementById ("contenido-fichas");
    contenidoFichas.innerHTML = "";

    contenidoFichas.innerHTML = `
       <img src="${ficha.imagen}" alt="${ficha.titulo}">
       <h2>${ficha.titulo}</h2>
       <p>${ficha.descripcion}</p>
       <h3>${ficha.precio}</h3>
        `;
}
                            
function crearBotonRegresar(){
    const botonRegresar = document.createElement ("button");
    botonRegresar.classList.add ("boton-regresar");
    botonRegresar.innerText = "Atras";
    botonRegresar.addEventListener ("click", () => {
        impFichas(fichas);
    })
    document.getElementById("contenido-fichas").prepend(botonRegresar);
}
                      
function impFichas(fichas) {

    const contenidoFichas = document.getElementById ("contenido-fichas");
    contenidoFichas.innerHTML = "";

    fichas.forEach(ficha => {
       const divFicha = document.createElement ("div");
       divFicha.classList.add("ficha");
       divFicha.innerHTML = `
       <img src="${ficha.imagen}" alt="${ficha.titulo}">
       <h2>${ficha.titulo}</h2>
       <p>${ficha.minDescripcion}</p>
       <h3>${ficha.precio}</h3>
        `;
                          
    const botonVerDescripcion = document.createElement ("button");
    botonVerDescripcion.innerText = "Ver Descripción";
    botonVerDescripcion.addEventListener ("click", () =>  {
        mostrarDescripcion(ficha);
        crearBotonRegresar ();
    })
    divFicha.appendChild(botonVerDescripcion)

                          
                            
    contenidoFichas.appendChild(divFicha);
    });
}
    

impFichas(fichas);
