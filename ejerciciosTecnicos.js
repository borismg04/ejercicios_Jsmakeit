/*Escribe una función llamada numDuplicados que reciba un string y retorne el número 
de caracteres que aparecen más de una vez.*/

function numDuplicados(cadena) {
    let qCaracteresRepetidos = 0;
    cadena2 = cadena.split("");
    console.log(cadena2);

    let objeto = {};

    for (let letra of cadena2) {
        if (letra === " ") {
            continue;
        } else if (objeto[letra]) {
            objeto[letra]++;
        } else {
            objeto[letra] = 1;
        }
    }
    let kv = Object.entries(objeto);

    for (let entrada of kv) {
        console.log(entrada);
        if (entrada[1] > 1) {
            qCaracteresRepetidos++;
        }
    }
    console.log(kv);

    return qCaracteresRepetidos;
}
console.log(">>>>>>>>Ejercicio No1 <<<<<<<");
console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0

/*
EJERCICIO 2 
Escribe una función llamada 
`frecuencias` que reciba una cadena de texto y retorne un objeto con el número de veces que aparece cada caracter 
(exceptuando el espacio en blanco)
*/
function frecuencias(cadena) {
    cadena2 = cadena.split("");
    console.log(cadena2);

    let objeto = {};

    for (let letra of cadena2) {
        if (letra === " ") {
            continue;
        } else if (objeto[letra]) {
            objeto[letra]++;
        } else {
            objeto[letra] = 1;
        }
    }
    return objeto;
}
console.log(">>>>>>>>Ejercicio No2 <<<<<<<")
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }*/

/*Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. 
La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común. */

function frecuencias(cadena) {
    cadena2 = cadena.split("");
    console.log(cadena2);
    
    let objeto = {};
    
    for (let letra of cadena2) {
        if (letra === " ") {
            continue;
        } else if (objeto[letra]) {
            objeto[letra]++;
        } else {
            objeto[letra] = 1;
        }
    }
    return objeto;
}

console.log(">>>>>>>>Ejercicio No3 <<<<<<<")
caracteresEnComun("Hola", "Mundo"); // ["o"]
caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
caracteresEnComun("Hola", "Bye"); // []

/*Escribir una función llamada `ajustarTexto` que reciba dos argumentos:  un string y un número (que representa una longitud).  
La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al número, debes recortar la cadena. 
De lo contrario agrega espacios en blanco hasta completar la longitud.*/

function ajustarTexto(strEntrada , num){
    
    let cadenaAjustada=[]
    strArray=strEntrada.split("");

    if (strArray.length>num){
        for (let i = 0; i < num ; i++) {
            cadenaAjustada.push(strArray[i]);
        }
    }else{
        cadenaAjustada=strArray
        for (let i = strArray.length ; i < num ; i++) {
            cadenaAjustada.push(" ");
        }
    }
    let convertir="";

    for (let i = 0; i < cadenaAjustada.length; i++) {
        convertir=convertir+cadenaAjustada[i];
    }
    return convertir;
}

console.log(ajustarTexto("" , 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "

/*Dadas dos cadenas s y t, devuelve true si t es un anagrama de s, y false de lo contrario.

Un Anagrama es una palabra o frase formada por reordenar las letras de una palabra o frase diferente,
típicamente usando todas las letras originales exactamente una vez. 

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

function palindrome (s,t){

    let fraseAjustadaS = s.toLowerCase();
    let fraseAjustadaT = t.toLowerCase();
    
    let arrayFrase1 = fraseAjustadaS.split("")

    let arrayReordenado = [];

    for(i = arrayFrase1.length; i > 0; i--){
        arrayReordenado.push(arrayFrase1[i-1]);
    }

    return fraseAjustadaT === arrayReordenado.join("");
}

console.log(palindrome("anagram" , "nagaram"))
console.log(palindrome("rat" , "tar"))

/*Dado un número de matriz entero, mover todos los 0’s al final de la misma, 
manteniendo el orden relativo de los elementos no cero.

Tenga en cuenta que debe hacer esto en su lugar sin hacer una copia de la matriz. 

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moverCeros(enteros) {
    let numeros = [];
    let contador = 0; // contar los ceros

    for (let index = 0; index < enteros.length; index++) {
        if (enteros[index] == 0) {
            contador++;
        } else {
            numeros.push(enteros[index]);
        }
    }

    for (let i = 0; i < contador; i++) {
        numeros.push(0);
    }

    return numeros;
}

console.log(moverCeros([0,1,0,3,12]))

/*Dada una matriz de números enteros y un objetivo entero, los índices de retorno de los dos números de tal manera que se suman a destino.
Puede asumir que cada entrada tendría exactamente una solución, y no puede usar el mismo elemento dos veces. */

function matriz(num, target) {    

    for(let i = 0; i<num.length; i++){
        for(let j = i; j<num.length; j ++){

            if(i!=j){
                if((num[i]+ num[j])=== target){
                    return [i,j]
                }
            }
        }
    }
};

console.log(matriz([3,4,2],6));