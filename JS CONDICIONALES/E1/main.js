let edad = parseInt(prompt("Bienvenido a Razzmatazz. Introduzca su edad:"));

if (edad <17){
    document.write("Ud es menor de edad, su ingreso no es permitido");

} else if (edad==18){
    document.write("Ud es mayor de edad, pase");

} else if (edad>18){
    document.write("Pase, que disfrute la noche");
}
else {
    document.write("ERROR!: Ingrese un Caracter Numerico");
}