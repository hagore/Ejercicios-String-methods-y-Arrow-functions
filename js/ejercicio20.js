//Comprobar si una cadena termina con una palabra

function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra);
}
console.log(terminaCon("JavaScript es genial", "genial")); // true
