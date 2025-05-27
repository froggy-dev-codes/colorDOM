let inputRojo = document.getElementById("inputRojo");
let inputVerde = document.getElementById("inputVerde");
let inputAzul = document.getElementById("inputAzul");


let textoRojo = document.getElementById("textoRojo");
let textoVerde = document.getElementById("textoVerde");
let textoAzul = document.getElementById("textoAzul");


let rojo = inputRojo.value;
let verde= inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;


// funcion actualizar color
function actualizarColor (rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB;
}


// para actualizar el colo r rojo, verde, azul
inputRojo.addEventListener("change", (e)=> {
    let rojo = e.target.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul);
})
inputVerde.addEventListener("change", (e)=> {
    let verde = e.target.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
})
inputAzul.addEventListener("change", (e)=> {
    let azul = e.target.value;
    textoAzul.textContent = azul
    actualizarColor(rojo, verde, azul);
})