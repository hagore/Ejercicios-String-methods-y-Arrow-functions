//Reemplazar todas las ocurrencias de una palabra

function reemplazarTodasPalabras(cadena, palabraAntigua, palabraNueva) {
    return cadena.replaceAll(palabraAntigua, palabraNueva);
}
console.log(reemplazarTodasPalabras("hola hola", "hola", "adiós")); // "adiós adiós"
