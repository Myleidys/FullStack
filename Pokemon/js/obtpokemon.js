const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
//const API = "https://pokeapi.co/api/v2/pokemon/25";  lo puedo obtener por el nombre o por el ID del pokemon



const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            console.log("json --> ", json);
            llenarDatos(json);
        })
        .catch((error) => {
            console.log("Error :", error)
        })
}


const llenarDatos = (data) => {
    let html = "";

    html += '<div class="card" style="width: 20rem;">'; //`` las cmilitas sievra para incrutar codigo html
    html += `<img src="${data.sprites.front_default}" class="card-img-top" alt="...">`
    html += '<div class="card-body">'
    html += `<h5 class="card-title">Base Experience: ${data.base_experience}</h5>`
    html += `<h5 class="card-title">Nombre: ${data.name}</h5>`
    html += `<h5 class="card-title">Habilidades: ${data.abilities[0].ability.name}</h5>`
    html += `<h5 class="card-title">Movimiento: ${data.moves[0].move.name}</h5>`
    html += '</div>';
    html += '</div>';
    html += '</div>';
    // });
    document.getElementById("datosPo").innerHTML = html;
}


getData(API)