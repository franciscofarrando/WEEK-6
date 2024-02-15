let clouse = (prompt("Estas cerca de casa? Si/No"));
let clouseMin = clouse.toLowerCase();
let walk = (prompt("Queres camianar? Si/No"));
let walkMin = walk.toLowerCase();


if (clouseMin == "si" && walk == "si"){
    document.write("A CAMINAR! Que no viene mal caminar.");

} else{
    let gasoline = (prompt("Tiene gasolina el carro? Si/No"));
    let gasolineMin = gasoline.toLowerCase();
    if (gasolineMin == "no"){
        let money = (prompt("Tenes dinero? Si/No"));
        let moneyMin = money.toLowerCase();
        if (moneyMin == "si"){
            document.write("Agarra el bidon y anda a comprar.");
        }else{
            document.write("Tocara caminar de todas formas.")
        }
    } else {
        let battery = prompt("Tiene bateria? Si/No");
        let batterMin = battery.toLowerCase();
        if (batterMin == "no"){
            document.write("Pues, pide ayuda a cargarla o empujar el coche.")
        } else {
            document.write("Tocara llamar al Mecanico, que tu dia no empeore mas. Adios.")
        }

    }
}