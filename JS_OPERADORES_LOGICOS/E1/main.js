let age = (prompt("Edad:"));
let home = (prompt("Residencia:"));
let homeMin = home.toLowerCase();
let childs = (prompt("Numero de hijos:"));
let genius = (prompt("Tiene certificado de Inteligencia Superior? Si/No"));
let geniusMin = genius.toLowerCase();








if ((age >= 18 && homeMin =="barcelona") || (age >30 && childs >3) || ((age >12 && age<=17)&& geniusMin == "si")){
    document.write("Su beca ha sido APROBADA.");

} else{
    document.write("No requiere lo requisitos para la beca")
}