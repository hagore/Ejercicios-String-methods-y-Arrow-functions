//Capitalizar todas las palabras de una frase

function capitalizarPalabras(cadena) {
    return cadena.split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');
}
console.log(capitalizarPalabras("javascript es divertido")); // "Javascript Es Divertido"
