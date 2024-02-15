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
        } else if (moneyMin=="no"){
            document.write("Tocara caminar de todas formas.")
        }else{
            document.write("Que dijiste? No entendi, solo respondo a Si y No")
        }
    } else if (gasolineMin == "no") {
        let battery = prompt("Tiene bateria? Si/No");
        let batterMin = battery.toLowerCase();
        if (batterMin == "no"){
            document.write("Pues, pide ayuda a cargarla o empujar el coche.")
        } else if (batterMin == "si"){
            document.write("Tocara llamar al Mecanico, que tu dia no empeore mas. Adios.")
        }else{
            document.write("Que dijiste? No entendi, solo respondo a Si y No")
        }

    } else {
        document.write("Que dijiste? No entendi, solo respondo a Si y No")
    }
}