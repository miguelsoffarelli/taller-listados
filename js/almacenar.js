const input = document.getElementById('item');
const boton = document.getElementById('agregar');
const container = document.getElementById('contenedor');
let array = [];
const botonLimpiar = document.getElementById('limpiar');

document.addEventListener('DOMContentLoaded', () => {
    let htmlContentToAppend = "";
    for (elemento of localStorage.getItem('lista')) {
        if (elemento !== ",") {
        htmlContentToAppend += `
        <li>${elemento}</li>
        `;
    }};
    container.innerHTML = htmlContentToAppend;
});

boton.addEventListener('click', () => {
    
    let htmlContentToAppend = "";
    if (input.value) {
        array.push(input.value);
        for (let elemento of array) {
           htmlContentToAppend += `
        <li>${elemento}</li>
        `;          
        };               
    localStorage.setItem('lista', array);
    container.innerHTML = htmlContentToAppend;
    input.value = "";
    };
    
});

botonLimpiar.addEventListener('click', () => {
    localStorage.removeItem('elementoLista');
    localStorage.removeItem('lista');
    location.reload();
})

