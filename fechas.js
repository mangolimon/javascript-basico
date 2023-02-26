//Módulo 7. Ejercicio 3. 
// fechas.js

//La fecha de hoy
const fecha = new Date()
console.log(fecha)// Sun Feb 26 2023 ...

//La fecha de tu nacimiento
const birthDate = new Date(1988, 05, 23)
console.log(birthDate)// Thu Jun 23 1988

//Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(birthDate.getTime() === fecha.getTime()) // false

//Una variable que contenga el mes de tu nacimiento (Recuerda que Enero es mes 0)
const birthMonth = birthDate.getMonth()+1
console.log(birthMonth)//6

//Una variable que contenga el año de tu nacimiento (con  dígitos)

const birthYear = birthDate.getFullYear()
console.log(birthYear) //1988