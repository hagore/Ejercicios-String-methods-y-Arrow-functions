//Crear una función que devuelva la palabra más larga en una cadena

function palabraMasLarga(cadena) {
    var palabras = cadena.split(' ');
    return palabras.reduce((masLarga, palabraActual) => palabraActual.length > masLarga.length ? palabraActual : masLarga, "");
}
console.log(palabraMasLarga("Aprender JavaScript es emocionante")); // "emocionante"
