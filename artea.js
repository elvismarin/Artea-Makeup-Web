
//let nombre = prompt ("Por favor ingresa los nombres de tus amigos.") ;
//let amigos = "" ;

//while ( nombre != "salir" ) {

   // amigos = amigos + nombre + ", " ;

    //alert ("Tus amigos son " + amigos) ;
    
  //  nombre = prompt ("Ingresa el nombre de otro amigo")
   
//}

//alert ("Todos los amigos que ingresaste fueron: " + amigos)

function Ejecucion () {

let comprador = prompt ("Bienvenido a Artea ¿usted es comprador? Responda con SI o NO:") ;

while ( comprador = "SI" & "NO") {

  alert ("Por favor ingrese una respuesta valida.");

} ;

if (comprador == "SI" ) {
  Diminombre() ;
} 

else if ( comprador == "NO" ) {
  alert ("Chupalo Maduro") ; } ;

} ;

function Diminombre () {

  let nombre = parseInt (prompt ("Ingrese su nombre:")) ;
  let nombre2 = parseInt (prompt ("Mascarilla")) ;
  let nombre3 = parseInt (prompt ("Paletas")) ;

  let pepito = nombre + nombre2 + nombre3 ;

  alert ("Su nombre es: " + pepito)

} ;

function Salida () {
  
  while ( comprador =! "SI" & "NO") {
  
    alert ("Por favor ingrese una respuesta valida.");
    break;
  } ;
  
}

Ejecucion(Diminombre(Salida()))