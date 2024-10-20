//Contar la frecuencia de caracteres en una cadena

function contarFrecuencia(cadena) {
    return cadena.split('').reduce((frecuencia, letra) => {
        frecuencia[letra] = (frecuencia[letra] || 0) + 1;
        return frecuencia;
    }, {});
}
console.log(contarFrecuencia("abbccc")); // {a: 1, b: 2, c: 3}
