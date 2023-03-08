const contenedorTarjetas = document.querySelector('#tarjetaPast');

let tarjetasGeneradas = generarTarjetas(data.events, data.currentDate);

contenedorTarjetas.innerHTML = tarjetasGeneradas;

function generarTarjetas (arrayEvents){
    let tarjetas = '';
    for (const event of arrayEvents){
        if (event.date < data.currentDate){
            tarjetas += crearTarjetas(event);
        }
    }
        return tarjetas;
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

const botonHome = document.getElementById('botonHome', 'botonUpcoming', 'botonPast', 'botonContact', 
'botonStats', 'botonCinema', 'botonCostumeParty', 'botonFoodFair', 'botonRace', 'botonBooksExchange', 
'botonMuseum', 'botonMusicConcert')

//Events
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
