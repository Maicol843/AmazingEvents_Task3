
let params = new URLSearchParams(document.location.search)
let id = params.get("id");

let cards = (data.events).filter(events => events.id == id);

const container = document.getElementById("contenedorTarjeta");
let html = "";
html += `
    <div class="card border-danger mb-3 text-bg-dark" style="max-width: 840px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${cards[0].image}" class="img-fluid rounded-start" alt="..." id="tarjetaDetalle">
            </div>
            <div class="col-md-8 p-3">
                <div class="cards-body">
                    <h4 class="card-title text-warning">${cards[0].name}</h4>
                    <p><b class="text-warning">Date:</b> ${cards[0].date}</p>
                    <p><b class="text-warning">Description:</b> ${cards[0].description}</p>
                    <p><b class="text-warning">Category:</b> ${cards[0].category}</p>
                    <p><b class="text-warning">Place:</b> ${cards[0].place}</p>
                    <p><b class="text-warning">Capacity:</b> ${cards[0].capacity}</p>
                    <p><b class="text-warning">Assistance:</b> ${cards[0].assistance}</p>
                    <p><b class="text-warning">Price:</b> ${cards[0].price}</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <a id="botonInicio"class="btn btn-dark border-danger text-warning" href="index.html" role="button">Return</a>
    </div>`

container.innerHTML = html


//Events

function mensaje(){
    return ('click');
}

const botonHome = document.getElementById('botonHome', 'botonUpcoming', 'botonPast', 'botonContact', 
'botonStats')

botonHome.addEventListener('click',mensaje);
botonUpcoming.addEventListener('click',mensaje);
botonPast.addEventListener('click',mensaje);
botonContact.addEventListener('click',mensaje);
botonStats.addEventListener('click',mensaje);

