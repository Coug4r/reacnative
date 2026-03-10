recuperar=()=>{
    let frutas=["pera","manzana","sandia"];
    frutas.push("banana");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas=recuperar();
    let frutaPrimera=misFrutas[0];
    let otraFruta=misFrutas[1];

    console.log(frutaPrimera);
    console.log(otraFruta);
}

testRecuperarDes=()=>{
    let [frutaPrimera,frutasegunda,frutaTercera]=recuperar();
    console.log("1>>> "+frutaPrimera);
    console.log("1>>> "+frutasegunda);
    console.log("1>>> "+frutaTercera);
}