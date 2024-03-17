
/* IMAGEN TACOS CLICK*/
// Obtener la imagen de "Tacos Al Pastor" por su clase o id
const imageTacosAlPastor = document.querySelector('.image-wrapper-pastor');

// Agregar un evento de clic a la imagen
imageTacosAlPastor.addEventListener('click', function() {
    // Redirigir a la página "tacos_al_pastor.html" al hacer clic en la imagen
    window.location.href = 'tacos_al_pastor.html';
});

/*NAVEGADOR*/
const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

