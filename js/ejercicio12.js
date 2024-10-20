//Comprobar si una palabra es un palíndromo

function esPalindromo(cadena) {
    var cadenaLimpiada = cadena.toLowerCase().replace(/\s/g, '');
    return cadenaLimpiada === cadenaLimpiada.split('').reverse().join('');
}
console.log(esPalindromo("anilina")); // true
