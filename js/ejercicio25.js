//Remover caracteres especiales de una cadena

function removerCaracteresEspeciales(cadena) {
    return cadena.replace(/[^a-zA-Z0-9 ]/g, '');
}
console.log(removerCaracteresEspeciales("Hola@mundo!")); // "Holamundo"
