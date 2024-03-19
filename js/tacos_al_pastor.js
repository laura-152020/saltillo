/** FLECHA**/
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón por su clase
    var button = document.querySelector(".arrow-button");
    
    // Agregar un event listener para el clic
    button.addEventListener("click", function() {
        // Redirigir a la página "inicio.html"
        window.location.href = "inicio.html";
    });
});


/**BOTON AUMENTA,DISMINUYE**/
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1; 

plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10)? "0" + a : a;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click", ()=>{
   if(a > 1){
    a--;
    a = (a<10)? "0" + a : a;
    num.innerText = a;
   }
});

/**MEDIDOR**/
const slider = document.querySelector('.slider');
const textos = document.querySelectorAll('.texto');

function setMedidor(valor) {
    const barra = document.querySelector('.barra');

    const valorClamped = Math.min(Math.max(valor, 0), 100); // Asegura que el valor esté entre 0 y 100
    barra.style.width = `${valorClamped}%`;

    // Cambiar el texto según el valor del medidor
    if (valorClamped < 33) {
        textos[0].innerText = 'Suave';
        textos[1].innerText = 'Medio';
        textos[2].innerText = 'Picante';
    } else if (valorClamped < 66) {
        textos[0].innerText = 'Suave';
        textos[1].innerText = 'Medio';
        textos[2].innerText = 'Medio';
    } else {
        textos[0].innerText = 'Suave';
        textos[1].innerText = 'Medio';
        textos[2].innerText = 'Picante';
    }
}

// Escuchar el evento de cambio en el slider y actualizar el medidor
slider.addEventListener('input', function() {
    setMedidor(this.value);
});

// Establecer el medidor al valor inicial
setMedidor(slider.value);

// Función para redireccionar a la página de ingredientes
function redirectToIngredients() {
    window.location.href = 'ingredientes.html'; // Redirigir a ingredientes.html
  }