/* Primer ejercicio del curso de Javascript por CoderHouse */

let nombre = prompt("Ingresá tu nombre"); // Ingresando valor en la variable "nombre"
let apellido = prompt("Ingresá tu apellido"); // Ingresando valor en la variable "apellido"
let hora = prompt("Que hora es? Por favor, escribir solo el numero en formato 24hs"); // Ingresando valor en la variable "hora"
let nacimiento = prompt("¿En qué año naciste?"); // Ingresando valor en la variable "nacimiento"
const fechaActual = 2021; // Ingresando valor constante "2021"

let edad = fechaActual - nacimiento; // Realizando la operación entre variables para mostrar el resultado en "alert()"

if (hora < 12) { saludo = "Buenos dias" }
else saludo = "Buenas tardes";

/* Lo que se muestra para el usuario */

alert(saludo + " " + nombre + " " + apellido + ", " + "tu edad es:" + " " + edad);

/* Lo que se muestra para el desarrollador en la consola del navegador */

console.log(saludo + " " + nombre + " " + apellido + ", " + "tu edad es:" + " " + edad);