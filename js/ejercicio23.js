//Truncar una cadena a un número específico de caracteres

function truncarCadena(cadena, num) {
    return cadena.length > num ? cadena.slice(0, num) + "..." : cadena;
}
console.log(truncarCadena("JavaScript es genial", 10)); // "JavaScri..."
