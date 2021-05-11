// Funciones 
// Son un tipo de dato

// Declaración
function saludar(arrayDeElementos, ...parametrosAdicionales) {
    // retorno algo
    // se pueda acceder a uno o varios datos de la función desde el exterior
    return 'algo';
};
// Anónimas
// Generalmente van a ser constantes
// Valor == funcion
const nombreFuncion = function (parametros) {

}
// Arrow functions
const funcionFlecha = parametro => console.log(parametro);

// CALLBACKS
const funcionPadre = (nombre, lenguajes, funcionHija) => {
    // Para que
    // Ejecutarla cuando sea necesario
    // Agregarle otra lógica
    // Darle más dinamismo
    if(lenguajes.includes('Javascript')) {
        funcionHija()
    }
}

let lenguajes = ['Javascript', 'HTML', 'CSS'];

const llevarTextoAMayuscula = (lenguaje) => {
    // lenguaje == 'Javascript'
    // lenguaje == 'HTML'
    // lenguaje == 'CSS'
    return lenguaje.toUpperCase()
}

// Filter 
// Crea un nuevo array
// Recibe un parámetro 
// Un callback que debe retornar true o false

const retornarSiEsMayorA100 = (numero) => {
    return numero > 100
}

//const numerosMayoresA100 = numeros.filter(retornarSiEsMayorA100)
//console.log(numerosMayoresA100)
// console.log(numeros)

// Le voy a pasar una funcion
let lenguajesEnMayuscula = lenguajes.map(llevarTextoAMayuscula);

// Reduce
// Reduce el valor del array en uno aplicando la lógica de un callback
const numeros = [1, 5, 10, 200, 500];
const procesarReduce = 
(acumulativo, valorActualDelElementoDelArray) => {
    return acumulativo + valorActualDelElementoDelArray
}

const personas = [
    {
        nombre: 'Jorge',
        logins: 10
    },
    {
        nombre: 'Agustina',
        logins: 20
    },
    {
        nombre: 'Juan',
        logins: 15
    },
]

const resultado = personas.reduce(
    (acumulativo, persona) => {
       return acumulativo + persona.logins
    }, 0
)

// forEach
let lenguajes2 = ['Javascript', 'HTML', 'CSS'];
const mostrarLenguajeEnMayuscula = (lenguaje) => {
    lenguaje.toUpperCase()
}
lenguajes2.map(mostrarLenguajeEnMayuscula)





     






