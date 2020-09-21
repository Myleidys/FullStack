const formRegistro = document.getElementById('formRegistro')

let listaDeUsuario = [];


formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('nomusuario').value
    const inputEmail = document.getElementById('email').value
    const inputPass = document.getElementById('password').value

    const usuario = {
        nomusuario: inputName,
        email: inputEmail,
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



/*aqui inicia la otra parte*/






function ValidadFormulario(e) {
    e.preventDefault()
    let inputName = document.getElementById('nomusuario').value
    console.log(inputName)


    let inputCorreo = document.getElementById('email').value
    console.log(inputCorreo)

    let inputPassword = document.getElementById('password').value
    console.log(inputPassword)


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


    if (inputName != "" && inputCorreo != "" && inputPassword) {

        window.location = 'login.html'


    }
}