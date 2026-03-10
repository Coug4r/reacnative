rec2uperarTexto=function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente;
}
recuperarTexto=(idComponente)=>{
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente;
}

recuperarEntero=(idComponente)=>{
    let valorTexto = recuperarTexto(idComponente);
    let valorEntero=parseInt(valorTexto);
    return valorEntero;
}
recuperarFloat = id => {
    parseFloat(document.getElementById(id).value);
}
