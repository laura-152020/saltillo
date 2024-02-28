

document.addEventListener("DOMContentLoaded", function(){
// Seleccionamos el botón
const inicioButton = document.getElementById('inicio');

    // Agregamos un event listener para el evento click
inicioButton.addEventListener('click', () => {
    // Redirigimos a la página de inicio
    window.location.href = 'inicio.html';
});

})

