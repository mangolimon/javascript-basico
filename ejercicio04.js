//Crea un archivo JS que contenga las siguientes líneas
//- Una cadena de texto con tu Nombre
let miNombre = "María de los Ángeles"
//- Otra cadena de texto con tu Apellido
let miApellido = "Gómez"
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = miNombre + " " + miApellido
//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteLength = estudiante.length 
//- Una variable que contenga la primera letra del Nombre

let primeraletraNombre = miNombre[0]
//- Otra variable que contenga la última letra del Apellido
let primeraletraApellido = console.log(miApellido.charAt(miApellido.length - 1))
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.trim()
let quitarEspacios = estudiante.replace(/\s+/g, '')
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let includesAngeles = estudiante.includes("Angeles")

