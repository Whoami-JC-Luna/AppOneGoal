// Manejo del menú hamburguesa y chat IA
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const chatIcon = document.getElementById('chatIcon');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendChat = document.getElementById('sendChat');
    let lastScroll = 0;

    // Toggle menú hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en enlaces
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Manejar scroll para el header
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            header.classList.remove('encajado');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
            header.classList.remove('encajado');
            header.classList.add('scrolled');
        } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
            header.classList.add('encajado');
        }

        lastScroll = currentScroll;
    });

    // Cerrar menú al redimensionar la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Manejo del Chat IA
    if (chatIcon && chatBox) {
        chatIcon.addEventListener('click', () => {
            chatBox.style.display = 'flex';
            chatIcon.style.display = 'none';
        });

        closeChat.addEventListener('click', () => {
            chatBox.style.display = 'none';
            chatIcon.style.display = 'flex';
        });

        sendChat.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Aquí puedes implementar la lógica para enviar el mensaje
            console.log('Mensaje enviado:', message);
            chatInput.value = '';
        }
    }

    // Animación de elementos al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section, .hero, .torneos, .section_banner, .section2, .section3, .banner_end, .Contactanos_rrss, .footer');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// V1 - Animación al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, .hero, .torneos, .section_banner, .section2, .section3, .banner_end, .Contactanos_rrss, .footer");

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


console.log(document.documentElement.scrollWidth, window.innerWidth);
