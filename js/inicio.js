
//BONOTES
document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.querySelector('.button_container');
    let scrollAmount = 0;
    let slideDistance = 200; // Distancia a desplazar en cada paso
    
    function slideRight() {
      scrollAmount += slideDistance;
      buttonContainer.scrollLeft += slideDistance;
    }
    
    function slideLeft() {
      scrollAmount -= slideDistance;
      buttonContainer.scrollLeft -= slideDistance;
    }
    
    // Manejar el clic en los botones para deslizar
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', event => {
        const direction = event.target.innerText === 'Todo' ? 'left' : 'right'; // Determinar la dirección del desplazamiento
        direction === 'left' ? slideLeft() : slideRight(); // Llamar a la función correspondiente
      });
    });
  });
  

/* IMAGEN TACOS CLICK*/
// Obtener la imagen de "Tacos Al Pastor" por su clase o id
const imageTacosAlPastor = document.querySelector('.tacos-img1');

// Agregar un evento de clic a la imagen
imageTacosAlPastor.addEventListener('click', function() {
    // Redirigir a la página "tacos_al_pastor.html" al hacer clic en la imagen
    window.location.href = 'tacos_al_pastor.html';
});


/* IMAGEN TACOS DORADOS CLICK*/
// Obtener la imagen de "Tacos Dorados" por su clase o id
const imageTacosDeBistec = document.querySelector('.dorados-img1');

// Agregar un evento de clic a la imagen
imageTacosDeBistec.addEventListener('click', function() {
    // Redirigir a la página "tacos_al_pastor.html" al hacer clic en la imagen
    window.location.href = 'tacos_dorados.html';
});

/* IMAGEN TACOS BISTEC CLICK*/
// Obtener la imagen de "Tacos Dorados" por su clase o id
const imageTacosDorados = document.querySelector('.bistec1-img');

// Agregar un evento de clic a la imagen
imageTacosDorados.addEventListener('click', function() {
    // Redirigir a la página "tacos_al_pastor.html" al hacer clic en la imagen
    window.location.href = 'tacos_de_bistec.html';
});

/* IMAGEN TACOS CANASTA CLICK*/
// Obtener la imagen de "Tacos De Canasta" por su clase o id
const imageTacosDeCanasta= document.querySelector('.canasta1-img');

// Agregar un evento de clic a la imagen
imageTacosDeCanasta.addEventListener('click', function() {
    // Redirigir a la página "tacos_al_pastor.html" al hacer clic en la imagen
    window.location.href = 'tacos_de_canasta.html';
});

//navegador
const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('active');
  });
  
  // Añade la clase 'active' solo si el enlace no es el de 'Home'
  if (!this.classList.contains('home')) {
    this.classList.add('active');
  }
}

list.forEach((item) => {
  item.addEventListener('click', activeLink);
});

//para user
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el elemento <a> que contiene el ícono de usuario
  var userLink = document.querySelector('.text[text="User"]').parentNode;

  // Agregar un evento de clic al elemento <a> de usuario
  userLink.addEventListener("click", function(event) {
      // Prevenir el comportamiento predeterminado del enlace
      event.preventDefault();
      
      // Redireccionar a user.html
      window.location.href = "user.html";
  });
});

