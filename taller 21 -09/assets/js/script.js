const letras = document.querySelectorAll('.letra')
const mensaje = document.getElementById('mensaje')
console.log('letras')


const teclado = (e) => {
    const textoTarget = e.target.innerText

    if (textoTarget == "space") {
        mensaje.innerHTML += "&nbsp"
    } else if (textoTarget == "borrar") {
        mensaje.innerText = mensaje.innerText.slice(0, -1)
    } else if (textoTarget == "punto") {
        mensaje.innerText += "."
    } else {
        mensaje.innerText += textoTarget
    }

}

for (let letra of letras) {
    letra.addEventListener('click', teclado)
}


//////////////////////////////////////////////////




const listaMensaje = []

function agregarTarea(e) {

    if (mensaje.innerHTML == "") {
        alert("no puede agregar contenido vacio")
    } else {


        // se crea el objeto que contiene la accion del teclado
        const listamensaje = {
            crear: mensaje.innerHTML,

        }

        //la primera parte es para verifiar si el localstorage existe, sino existe se guarda
        //la informacion por priemera vez

        if (localStorage.getItem('mensajetarea') == null) {

            listaMensaje.push(listamensaje) //listamensaje este es el objeto

            const mensajeString = JSON.stringify(listamensaje)
            localStorage.setItem('mensajetarea', mensajeString)
        }

        //traer la ionformacion que esta en el localstorage y agregaar la nueva
        else {


            const listaEnStorage = Object.values(JSON.parse(localStorage.getItem('mensajetarea')))
            listaEnStorage.push(mensaje.innerHTML)
            const mensajeString = JSON.stringify(listaEnStorage)
            localStorage.setItem('mensajetarea', mensajeString)
        }



        ///esta es la parte para agregar en la tabla
        const tabla = document.getElementById('tablaTarea')


        const usuariosGuardadosEnStorage = () => {
            const usuarioEnStorage = JSON.parse(localStorage.getItem('mensajetarea'))
            let valorStorage = Object.values(usuarioEnStorage) // se iene que pconvertir un objeto en un arreglo, para el punto puss ty el puntolengt

            for (let i = 0; i < valorStorage.length; i += 1) {

                tabla.innerHTML += `
            <tr>
                <th>${i + 1}</th>
                <td>${valorStorage[i]}</td>
            
            <tr>
        `
                // ""
                //  ''
                // ``
                //console.log(usuarioEnStorage[i])

            }

        }
        usuariosGuardadosEnStorage()


        ///esta es la parte para limpiar

        document.getElementById('limpiar').addEventListener('click', () => {
            localStorage.clear()
            tabla.innerHTML = ''
        })
        //se agrega un contenido vacio
        mensaje.innerHTML = ""



    }
}





/////////////////////////////////////////////////////////////////////////////////////////
//esta la parte lateral


const listaInfo = []

const inputlista = document.getElementById('lista')

function agregarlista(e) {

    if (inputlista.value == "") {
        alert("no puede agregar contenido vacio")
    } else {


        // se crea el objeto que contiene la accion del teclado
        const info = {
            crear: inputlista.value,

        }

        //la primera parte es para verifiar si el localstorage existe, sino existe se guarda
        //la informacion por priemera vez

        if (localStorage.getItem('listapendientes') == null) { //nuevo key

            listaInfo.push(info) //listamensaje este es el objeto

            const mensajeString = JSON.stringify(info)
            localStorage.setItem('listapendientes', mensajeString)
        }

        //traer la ionformacion que esta en el localstorage y agregaar la nueva
        else {


            const listaEnStorage = Object.values(JSON.parse(localStorage.getItem('listapendientes')))
            listaEnStorage.push(lista.value)
            const mensajeString = JSON.stringify(listaEnStorage)
            localStorage.setItem('listapendientes', mensajeString)
        }



        ///esta es la parte para agregar en la tabla
        const contenido = document.getElementById('tablaLista')


        const usuariosGuardadosEnStorage = () => {
            const usuarioEnStorage = JSON.parse(localStorage.getItem('listapendientes'))
            let valorStorage = Object.values(usuarioEnStorage) // se iene que pconvertir un objeto en un arreglo, para el punto puss ty el puntolengt
            //console.log(valorStorage)


            /*for (let i = 0; i < valorStorage.length; i += 1) {

                contenido.innerhtml += `
             

            <tr>
                <th>${i + 1}</th>
                <td>${valorStorage[i]}</td>
            
            <tr>
        `
                // ""
                //  ''
                // ``
                //console.log(usuarioEnStorage[i])

            }
*/



            for (valorStorage of valorStorage) {

                contenido.innerHTML += `
            <tr>
                <th>${valorStorage + 1}</th>
                <td>${valorStorage}</td>
            
            <tr>
        `


            }



        }
        usuariosGuardadosEnStorage()


        ///esta es la parte para limpiar

        document.getElementById('limpiar').addEventListener('click', () => {
            localStorage.clear()
            contenido.innerHTML = ''
        })
        //se agrega un contenido vacio
        inputlista.value = "" ///esta es para el input



    }
}


const nombreUsuario = document.getElementById('nombreusurio') //llamando al span
const listaEnStorage = JSON.parse(localStorage.getItem('usuarios')) //esta es la fora de un objeto // llamo lo que me contiene el localstrorage
//console.log(listaEnStorage[nomusuario])
let nomusuarioStorage //defino una variable del storage


for (let i = 0; i < listaEnStorage.length; i += 1) { //recorreo el areglo que contiene en el local storage


    nomusuarioStorage = listaEnStorage[i].nomusuario


}
nombreusurio.innerHTML = nomusuarioStorage