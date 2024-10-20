//Convertir la primera letra a mayúscula:

function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}
console.log(primeraLetraMayuscula("hola")); 
