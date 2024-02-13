// comentarios de una linea

/* comentarios de varias lineas -como CSS */ 

// let x = 5;
// let y = 15; 

//prompt espera caracteres alfanumericos
let x = parseInt(prompt("introduce un número"));
let y = parseInt(prompt("introduce otro número"));
console.log("la x vale:" + x);
let suma = x + y;
let z = "5";
let bol = true;

// x = "Pepito";
// console.log("la x vale:" + x);

// para ver el resultado:
// alert() Ventana emergente (modal)
// alert("la suma es: " + suma);

// document.write() Escribe en la página. Acepta etiquetas HTML
document.write('<h3>' + "la suma es: " + (x + y) + '</h3>');

// console.log --muy util para el programador. No es para el usuario
console.log("el resultado es:");
console.log(suma);

// la manera real de interactuar con el usuario es mediante INPUTS y mostrando los valores en campos de pantalla como divs, etc