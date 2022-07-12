



let nombre = prompt ("Por favor ingresa los nombres de tus amigos.") ;
let amigos = "" ;

while ( nombre != "salir" ) {

    amigos = amigos + nombre + ", " ;

    alert ("Tus amigos son " + amigos) ;
    
    nombre = prompt ("Ingresa el nombre de otro amigo")
   
}

alert ("Todos los amigos que ingresaste fueron: " + amigos)