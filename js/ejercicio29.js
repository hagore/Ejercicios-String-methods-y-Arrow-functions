//Comprimir una cadena eliminando letras consecutivas repetidas

function eliminarLetrasRepetidas(cadena) {
    return cadena.split('').filter((letra, indice, arr) => letra !== arr[indice - 1]).join('');
}
console.log(eliminarLetrasRepetidas("aabbccdde")); // "abcde"
