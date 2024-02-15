let color = (prompt("Elija el numero de un Color: 1-Azul, 2-Verde, 3-Amarillo y 4-Violeta:"));

if (color==1){
    document.write("El azul es como el mar, siempre que el cielo sea azul (y sea de día)");

} else if (color==2){
    document.write("Entre hojas verdes, el sol se esconde, baño de vida.");

} else if (color==3){
    document.write("En el amarillo de las flores, la alegría se despierta, luz del día.");
} else if (color==4){
    document.write("Al caer la tarde violeta, los sueños danzan, serenata del alma.");
} else if (color >= 5){
    document.write("Ese color no esta, revise su eleccion.");
}else {
    document.write("ERROR!: Ingrese un Caracter Numerico");
}