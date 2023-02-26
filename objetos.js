//Módulo 7. Ejercicio 2. 
//objetos.js

//Un objeto con mis datos personales

const miObjeto = {
    nombre: 'Mª Ángeles',
    apellido: 'Gómez',
    edad: 34,
    altura: 168,
    eresDesarrollador: false
};

//Una variable que obtenga mi edad a partir del objeto anterior

var miEdad = miObjeto.edad;
console.log(miEdad) // 34

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto 
//con los datos personales de tus dos mejores amig@s


const amiguis = [
    {
        nombre: 'Mª Ángeles',
        apellido: 'Gómez',
        edad: 34,
        altura: 168,
        eresDesarrollador: false
    },
    {
        nombre: 'Gloria',
        apellido: 'C',
        edad: 33,
        altura: 168,
        eresDesarrollador: false
    },
    {
        nombre: 'Lorena',
        apellido: 'N',
        edad: 35,
        altura: 168,
        eresDesarrollador: false}
]

//Una nueva lista con los objetos de la lista anterior ordenados por edad, 
//de mayor a menor


const porEdad = amiguis.sort ((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    } else if (a.edad > b.edad) {
        return +1;
    } else {
        return 0;
    }
    } 
    )

    console.log(porEdad)
