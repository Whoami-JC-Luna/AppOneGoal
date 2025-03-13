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

  // Animación al hacer scroll
  const sections = document.querySelectorAll("section, .hero, .torneos, .section_banner, .section2, .section3, .banner_end, .Contactanos_rrss, .footer");

  function checkScroll() {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop < triggerBottom) {
              section.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Para activar las secciones ya visibles al cargar

  console.log("Script cargado y ejecutando checkScroll.");
});

    // MANEJO DEL CHAT IA
    const chatIcon = document.getElementById("chatIcon");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");

    chatIcon.addEventListener("click", function () {
        chatBox.style.display = "flex"; // Muestra el chat
    });

    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none"; // Oculta el chat
    });



    //ASIDE

    document.addEventListener("DOMContentLoaded", function () {
        const sidebarTitles = document.querySelectorAll(".sidebar__title");
    
        sidebarTitles.forEach(title => {
            title.addEventListener("click", function () {
                const subMenu = this.nextElementSibling;
    
                if (subMenu.classList.contains("show")) {
                    subMenu.style.transition = "max-height 0.4s ease, opacity 0.4s ease, transform 0.3s ease";
                    subMenu.style.opacity = "0";
                    subMenu.style.transform = "scaleY(0)";
                    subMenu.style.maxHeight = "0px";
                    setTimeout(() => {
                        subMenu.classList.remove("show");
                    }, 400);
                } else {
                    subMenu.classList.add("show");
                    subMenu.style.transition = "max-height 0.4s ease, opacity 0.4s ease, transform 0.3s ease";
                    subMenu.style.opacity = "1";
                    subMenu.style.transform = "scaleY(1)";
                    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                }
            });
        });
    });
    
    





    // Variables para el header y menú hamburguesa
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Control del menú hamburguesa
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Control del scroll para el header
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        header.classList.remove('encajado');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
        // Scroll hacia abajo
        header.classList.remove('encajado');
        header.classList.add('scrolled');
    } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
        // Scroll hacia arriba
        header.classList.remove('scrolled');
        header.classList.add('encajado');
    }

    lastScroll = currentScroll;
}); 






document.addEventListener("DOMContentLoaded", function () {
    // Botón de la sidebar
    const toggleSidebar = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".sidebar");

    toggleSidebar.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});