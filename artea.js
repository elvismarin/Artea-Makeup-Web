////let nombre = prompt ("Por favor ingresa los nombres de tus amigos.") ;
//let amigos = "" ;

//while ( nombre != "salir" ) {

   // amigos = amigos + nombre + ", " ;

    //alert ("Tus amigos son " + amigos) ;
    
  //  nombre = prompt ("Ingresa el nombre de otro amigo")
   
//}

//alert ("Todos los amigos que ingresaste fueron: " + amigos)

const Inventario = [
  {prod: "Labiales", precio: 20, stock: 35},
  {prod: "Mascarilla", precio: 10, stock: 12},
  {prod: "Sombras", precio: 30, stock: 0},
  {prod: "Delineador", precio: 10, stock: 3},
] ;

let comprador = prompt ("Bienvenido a Artea ¿usted es comprador? Responda con SI o NO:") ;

while ( comprador != "SI" && comprador != "NO") { 

  alert ("Por favor ingrese una respuesta valida.");
  comprador = prompt ("Bienvenido a Artea ¿usted es comprador? Responda con SI o NO:");

} ;

if (comprador == "SI" ) {
  console.log ("Este es el stock disponible");
  console.log ("<h2> Producto Precio Stock </h2>");
    Impr_Lista ()

} 

else if ( comprador == "NO" ) {
  alert ("¡Hasta la proxima!") ; } ;

function Impr_Lista () {
    for (const item of Inventario) {
    console.log ("<h2>"+ item.prod + " " + item.precio + " " + item.stock +"</h2>")
    } 
}; 

const Reponer_Inventario = Inventario.filter ((el) => el.stock == 0)

console.log (Reponer_Inventario)


//function CantProd () {

  //let prod1 = parseInt (prompt ("¿Cuantas pestañas quiere?")) ;
  //let prod2 = parseInt (prompt ("¿Cuantas mascarillas quiere?")) ;
  //let prod3 = parseInt (prompt ("¿Cuantas paletas quiere?")) ;

  //let prodtotal = prod1 + prod2 + prod3 ;

  //alert ("En total usted lleva " + prodtotal + " productos")

//} ;

