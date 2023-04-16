//Ejercicio Clases JS

//Clase "Estudiante"

class Estudiante {
    constructor(nombre){
    this.nombre = nombre;
    this.asignaturas = ["JavaScript", "HTML", "CSS"];
}
    obtenDatos() {
        return {
        nombre: this.nombre, 
        asignaturas: this.asignaturas,
    };
}
}

const estudiante = new Estudiante("Pepe");
console.log(estudiante.obtenDatos());