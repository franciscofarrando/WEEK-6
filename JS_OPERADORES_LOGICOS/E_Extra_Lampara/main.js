let lampara = (prompt("Esta enchufada? Si/No"));
let lamparaMin = lampara.toLowerCase();
if (lamparaMin == "no"){
    document.write("Enchufala");
} else if (lamparaMin == "si"){
    let foco = (prompt("El foco esta en buen estado? Si/No"));
    let focoMin = foco.toLowerCase();
         if (lamparaMin == "si" && focoMin== "si"){
        document.write("Cambien de lampara");

        } else if (lamparaMin == "si" && focoMin == "no"){
        document.write("Cambien el foco");
        } else {
            document.write("Las respuestas pueden ser solo SI y NO");
        }
} else{
    document.write("Las respuestas pueden ser solo SI y NO");
}