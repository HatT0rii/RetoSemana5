alert("Que hamburgueza desea")

let precio = [20 , 25, 28]

let tipo = prompt("1: sencillas, 2 dobles, 3 triples");
let cant = +prompt("Cuantas desea");
let tpago=prompt("Como paga t: tarjeta, e: efectivo")

if (tipo == "1") {
    if(tpago == "t"){
        pago = precio[0]*0.05+(cant*precio[0])
        alert("En total seria $ "+pago +".00")
    }
    else if(tpago == "e"){
        pago = precio[0]*cant
        alert("En total seria $ "+pago+".00")
    }   
}
else if(tipo == "2"){
    if(tpago == "t"){
        pago = precio[1]*0.05+(cant*precio[1])
        alert("En total seria $ "+pago+".00")
    }
    else if(tpago == "e"){
        pago = precio[1]*cant
        alert("En total seria $ "+pago+".00")
    }
}
else if(tipo == "3"){
    if(tpago == "t"){
        pago = precio[2]*0.05+(cant*precio[2])
        alert("En total seria $ "+pago+".00")
    }
    else if(tpago == "e"){
        pago = precio[2]*cant
        alert("En total seria $ "+pago+".00")
    }
}
else{
    alert("ingreso mal refrese y vuelva a pedir su pedido");
}