document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
    
        if (scrollTop > 50) {
            // Cuando bajo, el header se desencaja
            header.classList.add("scrolled");
            header.classList.remove("encajado");
        } else {
            // Cuando subo al top, el header se encaja de nuevo
            header.classList.remove("scrolled");
            header.classList.add("encajado");
        }
    
        lastScrollTop = scrollTop;
    });
    
    
});


// V1 - Animación al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".leagues__match, .chat__box, .torneos, .banner_end, .community-section, .footer");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("show"); // Agrega la clase cuando es visible
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para activar las secciones ya visibles al cargar

    console.log("Script cargado y ejecutando checkScroll.");
});




// IA - V1

document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");

    chatIcon.addEventListener("click", function () {
        chatBox.style.display = "flex"; // Muestra el chat
    });

    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none"; // Oculta el chat
    });
});

// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    // Toggle del menú
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
            mainNav.classList.remove('active');
        }
    });

    // Ajustar el menú al redimensionar la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1182) {
            mainNav.classList.remove('active');
        }
    });
});