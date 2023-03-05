//Ejercicio 8. Introducción a las funciones

//Una función sin parámettros que devuelva siempre "true"

function siempreTrue() {
    return true;
}
const esTrue = siempreTrue();
console.log(esTrue) // true


//Una función asíncrona que utilize un setTimeout y pase por consola un
// "Hola soy una promesa" 5 segundos después de habere ejecutado

const miPromesa = new Promise ((resolve, reject) => {
    if (true) {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
} else {
    reject()
}
})

miPromesa
    .then(() => console.log("Hola, soy una promesa"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("He finalidado"))

//Una función generadora de índices pares autománticos
function* indicesPares() { 
    let iPa = 0;
    while(true) {
        iPa++
        if (iPa % 2 == 0)
                yield iPa
        if (iPa > 10) {
            return 
            }
    }
}
    const gen = indicesPares();

    console.log(gen.next()) // { value: 2, done: false }
    console.log(gen.next()) // { value: 4, done: false }
    console.log(gen.next()) // { value: 6, done: false }
    console.log(gen.next()) // { value: 8, done: false }
    console.log(gen.next()) // { value: 10, done: false }
    console.log(gen.next()) // { value: undefined, done: true }
