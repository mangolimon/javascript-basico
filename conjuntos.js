//Módulo 7. Ejercicio 1. 
//conjuntos.js

//Un nuevo set con los nombres de mi familia
const myFamily = ["Francisco", "Ángeles", "Fulgencio", "Mª Ángeles", "Cristian"]
const myFamilySet = new Set (myFamily)
console.log(myFamilySet) // Set {'Francisco', 'Ángeles', 'Fulgencio', 'Mª Ángeles', 'Cristian'}
//Modifica el set original añadiendo tu nombre (duplicado)
myFamily.push('Mª Ángeles')
console.log(myFamily) // [ 'Francisco', 'Ángeles', 'Fulgencio', 'Mª Ángeles', 'Cristian', 'Mª Ángeles' ]
console.log(myFamilySet) // Set {'Francisco', 'Ángeles', 'Fulgencio', 'Mª Ángeles', 'Cristian'}
//Método alternativo - Modifica el set original añadiendo tu nombre (duplicado)
myFamilySet.add('Mª Ángeles')
console.log(myFamilySet)// Set {'Francisco', 'Ángeles', 'Fulgencio', 'Mª Ángeles', 'Cristian'} 

//Modifica el set original añadiendo el nombre "Javascript"

myFamilySet.add('JavaScript')
console.log(myFamilySet) // // Set {'Francisco', 'Ángeles', 'Fulgencio', 'Mª Ángeles', 'Cristian', 'JavaScript' }