//Eliminar todas las vocales de una cadena

function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóú]/gi, '');
}
console.log(eliminarVocales("javascript")); // "jvscrpt"
