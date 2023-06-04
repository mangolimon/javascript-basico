var miNombre = "Mª Ángeles"
var apellido = "Gómez"
const miObjeto = {
        miNombre,
        apellido,
    }


//sessionStorage.setItem("miObjeto", JSON.stringify(miObjeto))
//localStorage.setItem("miObjeto", JSON.stringify(miObjeto))


//Cookie
const now = new Date()
document.cookie = 'miObjeto${JSON.stringify(miObjeto);expires=${new Date(now.getTime() + 2 * 60000)}'
