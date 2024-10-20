//Convertir una cadena a snake_case

function convertirASnakeCase(cadena) {
    return cadena.toLowerCase().replace(/ /g, '_');
}
console.log(convertirASnakeCase("Hola Mundo")); // "hola_mundo"
