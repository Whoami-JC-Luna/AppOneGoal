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
