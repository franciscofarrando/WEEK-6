let lampara = (prompt("Revise el cable, esta enchufado? 1= NO 2=SI"));


 if (lampara == 2){
    let lampara = (prompt("Revise el foco, esta en buen estado? 1= NO 2=SI"));
    
} else if (lampara == 1){
    let lampara = (prompt("Enchufelo! , esto lo soluciono? 1= NO 2=SI"));
1
} else if (lampara != 2){
  document.write("Cambie el foco, esto lo soluciono? 1= NO 2=SI");
//} else if (lampara == 1){
 //   let lampara = (prompt("Cambie el foco, esto lo soluciono? 1= NO 2=SI"));
///} else if (lampara == 2){
//document.write("Solucionado era el foco!");
}else {
    document.write("Considere reemplazar la lampara");
}