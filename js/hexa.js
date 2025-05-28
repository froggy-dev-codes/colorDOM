// capturamos los valores
let boton = document.getElementById("botonCambio");
let span = document.getElementById("textoColor");

// 16.777.125 
let cadena = "0123456789ABCDEF";
let valor = "#"

// listenner
boton.addEventListener("click", alea)


// hacemos la funcion manejadora
function alea() {
    for (let i = 0; i < 6; i++) {
        valor += cadena[Math.trunc(Math.random() * 16)]
    }

    span.innerText = valor;
    
    document.body.style.backgroundColor = valor;
    // span.style.color = valor;
    valor = "#";



}