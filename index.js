// El usuario hace un evento click
// esta regla es para interaccionar con el boton
const navToggle = document.querySelector(".nav-toggle");

// esta regla es para interaccionar con el menu
const navMenu = document.querySelector(".nav-menu");

// Para que escuche si el usuario en algun momento hace click
navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle(".nav-menu_visible");

    if(navMenu.classList.contains(".nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar Menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }

})