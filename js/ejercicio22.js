//Convertir una frase a camelCase

function convertirACamelCase(cadena) {
    return cadena.split(' ')
        .map((palabra, indice) => indice === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join('');
}
console.log(convertirACamelCase("hola mundo en javascript")); // "holaMundoEnJavascript"
