ejecutarSumar=()=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    console.log("VALOR 1 "+valor1+" VALOR 2 "+valor2);
    let resultadoSuma = sumar(valor1,valor2);
    console.log(resultadoSuma);
}

sumar=(sum1,sum2)=>{
    let resultado = sum1+sum2;
    return resultado;
}

restar = (a, b) =>{
    return a - b;
}

ejecutarResta = () => {
  let v1 = recuperarFloat("caja1")
  let v2 = recuperarFloat("caja2")
  let resultado = restar(v1, v2)
  console.log(resultado)
}
