const elementosTexmovil = document.getElementsByClassName('texmovil');
const elementosmenu = document.getElementsByClassName('link-menu');
const toggleButton = document.getElementById('burger');
const miDiv = document.getElementById('menu-panel');
const linkmenu = document.getElementById('menu');
const fotoUsuario = document.getElementById('foto-usuario');
const togglepanel = document.getElementById('toggle-panel');

// Variable para rastrear el estado actual del menú
let menuVisible = false;

// Agregar un evento click al botón
toggleButton.addEventListener('click', function() {
    // Verificar el estado actual del menú
    if (menuVisible) {
        // Si está visible, ocultarlo con una transición
        miDiv.style.transition = 'width 1s'; // Transición de 1 segundo
        linkmenu.style.transition = 'width 1s'; // Transición de 1 segundo
        fotoUsuario.style.transition = 'width 1s'; // Transición de 1 segundo

        miDiv.style.width = '20%';
        linkmenu.style.gap = '5px';
        fotoUsuario.style.width = '40%';
        togglepanel.style.direction = "rtl";

        // Ocultar los elementos con la clase "texmovil"
        for (let i = 0; i < elementosTexmovil.length; i++) {
            elementosTexmovil[i].style.display = '';
        }
        for (let i = 0; i < elementosmenu.length; i++) {
            const elemento = elementosmenu[i];
            elemento.style.padding = '4% 4% 4% 25%';
        }
    } else {
        // Si está oculto, mostrarlo con una transición
        miDiv.style.transition = 'width 1s'; // Transición de 1 segundo
        linkmenu.style.transition = 'width 1s'; // Transición de 1 segundo
        fotoUsuario.style.transition = 'width 1s'; // Transición de 1 segundo

        miDiv.style.width = '5%';
        togglepanel.style.direction = "ltr";
        // control de espacio de los botones del link cuando este en 5% y foto
        linkmenu.style.gap = '15px';
        fotoUsuario.style.width = '75%';

        // Mostrar los elementos con la clase "texmovil" solo si el menú está al 5%
        for (let i = 0; i < elementosTexmovil.length; i++) {
            elementosTexmovil[i].style.display = 'none';
        }
        for (let i = 0; i < elementosmenu.length; i++) {
            const elemento = elementosmenu[i];
            elemento.style.padding = '12%';
        }
    }

    // Alternar el estado del menú
    menuVisible = !menuVisible;
});


