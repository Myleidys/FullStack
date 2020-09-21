const formLogeo = document.getElementById('formLogin')

let listaDeUsuario = [];

/*
formLogeo.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('nomusuario').value
    const inputPass = document.getElementById('password').value

    const usuario = {
        usuario: inputName,
        password: inputPass
    }
    guardarEnStorage(usuario)
})

const guardarEnStorage = (usuario) => {
    if (localStorage.getItem('usuarios') == null) {
        listaDeUsuario.push(usuario)
        const usuariosString = JSON.stringify(listaDeUsuario)
        localStorage.setItem('usuarios', usuariosString)
    } else {
        listaEnStorage = JSON.parse(localStorage.getItem("usuarios"))
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuariosString)
    }
}

*/

/*aqui inicia la otra parte*/






function ValidadLogin(e) {
    e.preventDefault()
    let inputUsuario = document.getElementById('nomusuario').value
    //console.log(inputUsuario)


    let inputPassword = document.getElementById('password').value
    //console.log(inputPassword)


    /*
        if (inputName == '') {
            //mensajeNombre.innerText = "el campo esta vacio, ingresa el nombre"
            swal("Error", "diligencia el campo nombre", "error");
        } else if (inputCorreo == '') {
            //mensajeCorreo.innerText = "el campo esta vacio,ingresa el correo"
            swal("Error", "diligencia el campo correo", "error");
        } else if (inputPassword == '') {
            //mensajePassword.innerText = "el campo esta vacio,ingresa el password"
            swal("Error", "diligencia el campo password", "error");
        }

    */
    /*

        if (inputUsuario != "" && inputPassword) {

            window.location = 'logeo.html'


        }*/













    const listaEnStorage = JSON.parse(localStorage.getItem('usuarios')) //esta es la fora de un objeto
    //console.log(listaEnStorage[nomusuario])
    let nomusuarioStorage
    let passwordStorage

    for (let i = 0; i < listaEnStorage.length; i += 1) {

        //console.log(listaEnStorage[i].nomusuario)
        //console.log(listaEnStorage[i].password)

        nomusuarioStorage = listaEnStorage[i].nomusuario
        passwordStorage = listaEnStorage[i].password

    }

    /*console.log(nomusuarioStorage)
    console.log(passwordStorage)
    console.log(inputUsuario)
    console.log(inputPassword)*/

    if (nomusuarioStorage == inputUsuario && passwordStorage == inputPassword) {

        window.location = 'logeo.html'

    } else {
        alert("el usuario y contraseña no existe")

    }


}





//////////////////////////////////////////////////////////// se trae lo que esta guardado en el localstrorage