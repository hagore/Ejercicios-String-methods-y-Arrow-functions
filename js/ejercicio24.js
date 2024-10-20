//Comprobar si una cadena contiene solo números

function contieneSoloNumeros(cadena) {
    return /^[0-9]+$/.test(cadena);
}
console.log(contieneSoloNumeros("12345")); // true
console.log(contieneSoloNumeros("123a45")); // false
