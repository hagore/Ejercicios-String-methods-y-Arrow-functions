//Contar ocurrencias de una letra en una cadena

function contarLetra(cadena, letra) {
    return cadena.split(letra).length - 1;
}
console.log(contarLetra("javascript", "a")); 
