let x = parseInt(prompt("Introduce los centrimetros de tu radio"));
let y = 3.1416
let area = (y*(x**2)).toFixed(2);

//por consola
console.log ("El area de tu circulo es: ");
console.log (area);

//por html

document.write("El area de tu circulo con radio " + x + " cm. es: " + (area) + " cm2");