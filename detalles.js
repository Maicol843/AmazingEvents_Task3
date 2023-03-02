//Detalles

const contenedorTarjetas = document.querySelector('#tarjetasId');

let tarjetasGeneradas = generarTarjeta(data.events);

contenedorTarjetas.innerHTML = tarjetasGeneradas;

function generarTarjeta(arrayEvents){
    let tarjetas = '';
    for (const event of arrayEvents){
        if (event._id == 1){
             tarjetas = crearTarjeta(event);
        }
    }
        return tarjetas;
}

function crearTarjeta(event){
    return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${event.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">Date: ${event.date}</p>
                        <p class="card-text">Description: ${event.description}</p>
                        <p class="card-text">Category: ${event.category}</p>
                        <p class="card-text">Place: ${event.place}</p>
                        <p class="card-text">Capacity: ${event.capacity}</p>
                    </div>
                </div>
            </div>
        </div>` 
}
