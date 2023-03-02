const formulario = document.forms[0]

function mensaje(){
    console.log('click')
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    mensaje();
})

const botonHome = document.getElementById('botonHome', 'botonUpcoming', 'botonPast', 'botonContact', 
'botonStats')

botonHome.addEventListener('click',mensaje);
botonUpcoming.addEventListener('click',mensaje);
botonPast.addEventListener('click',mensaje);
botonContact.addEventListener('click',mensaje);
botonStats.addEventListener('click',mensaje);