let lampara = parseInt(prompt("Revise el cable, esta enchufado? 1= NO 2=SI"));


 if (lampara == 2){
    let foco = parseInt(prompt("Revise el foco, esta en buen estado? 1= NO 2=SI"));
    if (foco == 2){
        document.write("Considere cambiar la Lampara");
    } else { document.write("Cambie el foco!")}
 } else {
    document.write("Enchufe la Lampara")
 }
