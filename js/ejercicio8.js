//Extraer una parte de una cadena

function extraerParteCadena(cadena, inicio, fin) {
    return cadena.substring(inicio, fin);
}
console.log(extraerParteCadena("JavaScript", 4, 10)); // "Script"
