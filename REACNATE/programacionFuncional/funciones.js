sumar=(sum1,sum2)=>{
    let resultado = sum1+sum2;
    return resultado;
}

restar = (a, b) =>{
    return a - b;
}

ejecutarOperacion=(operar)=>{
    let valor1 = recuperarEntero("txtValor1")
    let valor2 = recuperarEntero("txtValor2")
    let resultado = operar(valor1,valor2);
    console.log(resultado);
}