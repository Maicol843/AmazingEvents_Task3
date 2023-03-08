const contenedorTarjetas = document.querySelector('#contenedor');

let tarjetasGeneradas = generarTarjetas(data.events, data.currentDate);

contenedorTarjetas.innerHTML = tarjetasGeneradas;

function generarTarjetas (arrayEvents){
    let tarjetas = '';
    for (const event of arrayEvents){
        tarjetas += crearTarjetas(event)
    }
    return tarjetas
}

function crearTarjetas(event){
    return `
    <div class="card border-danger text-bg-warning" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top" alt="..." id="imagenTarjeta">
        <div class="card-body">
            <h5 class="card-title"><b>${event.name}</b></h5>
            <p class="card-text">${event.description}</p>
            <p class="card-text"><b>Date:</b> ${event.date}</p>
            <p class="card-text"><b>Price:</b> ${event.price}</p>
            <input type="button" class="btn btn-dark border-danger text-warning" onclick="seeDetail('${event.id}')" value="See more" id="buttonTarjeta">
        </div>
    </div>`
}

function seeDetail(id) {
    window.location.href = `./details.html?id=${id}`
}

//Events
function mensaje(){
    console.log('click')
}

const botonHome = document.getElementById('botonHome', 'botonUpcoming', 'botonPast', 'botonContact', 
'botonStats', 'botonCinema', 'botonCostumeParty', 'botonFoodFair', 'botonRace', 'botonBooksExchange', 
'botonMuseum', 'botonMusicConcert')

botonHome.addEventListener('click',mensaje);
botonUpcoming.addEventListener('click',mensaje);
botonPast.addEventListener('click',mensaje);
botonContact.addEventListener('click',mensaje);
botonStats.addEventListener('click',mensaje);
botonCinema.addEventListener('click',mensaje);
botonCostumeParty.addEventListener('click',mensaje);
botonFoodFair.addEventListener('click',mensaje);
botonRace.addEventListener('click',mensaje);
botonBooksExchange.addEventListener('click',mensaje);
botonMuseum.addEventListener('click',mensaje);
botonMusicConcert.addEventListener('click',mensaje);

//Search

let eventos = ['Batman', 'Avengers', 'Comicon', 'Halloween', 'Collectivities', 'Korean', '10K for life',
'15K NY', 'Book', 'Museum', 'Concert']

let lista = document.getElementsById("lista");

let buscador = document.getElementById("buscador");


function dibujarLista(arrayEventos) {
    lista.innerHTML = ""
    arrayEventos.forEach((evento)=>{
        let listaItem = document.createElement("li");
        listaItem.innerHTML = evento
        lista.appendChild(listaItem);

    })
}
dibujarLista(eventos)


buscador.addEventListener("keyup", () => {
    let eventosFiltrados = eventos.filter((evento)=>evento.toLowerCase().includes(buscador.value.toLowerCase()));
    dibujarLista(eventosFiltrados);
});