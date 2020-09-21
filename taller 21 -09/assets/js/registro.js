const formRegistro = document.getElementById('formRegistro')

let listaDeUsuario = [];


formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('nombre').value
    const inputEmail = document.getElementById('email').value
    const inputPass = document.getElementById('password').value

    const usuario = {
        nombre: inputName,
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