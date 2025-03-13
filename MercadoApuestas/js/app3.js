document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section, .hero, .torneos, .section_banner, .section2, .section3, .banner_end, .Contactanos_rrss, .footer");
    const chatIcon = document.getElementById("chatIcon");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const toggleSidebar = document.getElementById("toggleSidebar");
    const toggleSidebarRight = document.getElementById("toggleSidebarRight");
    const sidebar = document.querySelector(".sidebar");
    const sidebarRight = document.querySelector(".sidebar-right");

    // Control del header en el scroll
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > 50) {
            header.classList.add("scrolled");
            header.classList.remove("encajado");
        } else {
            header.classList.remove("scrolled");
            header.classList.add("encajado");
        }

        lastScrollTop = scrollTop;
    });

    // Efecto de animación al hacer scroll
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) section.classList.add("show");
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();

    console.log("Script cargado y ejecutando checkScroll.");

    // MANEJO DEL CHAT IA
    if (chatIcon && chatBox && closeChat) {
        chatIcon.addEventListener("click", () => chatBox.style.display = "flex");
        closeChat.addEventListener("click", () => chatBox.style.display = "none");
    }

    // Control del menú hamburguesa
    if (menuToggle && nav) {
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
    }

    // Sidebar izquierda y derecha
    if (toggleSidebar && sidebar) {
        toggleSidebar.addEventListener("click", () => sidebar.classList.toggle("active"));
    }

    if (toggleSidebarRight && sidebarRight) {
        toggleSidebarRight.addEventListener("click", () => sidebarRight.classList.toggle("active"));
    }

    // Cierra la sidebar si se hace click fuera de ella
    document.addEventListener("click", function (event) {
        if (sidebar && !sidebar.contains(event.target) && !toggleSidebar.contains(event.target)) {
            sidebar.classList.remove("active");
        }
        if (sidebarRight && !sidebarRight.contains(event.target) && !toggleSidebarRight.contains(event.target)) {
            sidebarRight.classList.remove("active");
        }
    });

    // Vibración al abrir las sidebars (solo en dispositivos móviles)
    if (navigator.vibrate) {
        if (toggleSidebar) toggleSidebar.addEventListener("click", () => navigator.vibrate(50));
        if (toggleSidebarRight) toggleSidebarRight.addEventListener("click", () => navigator.vibrate(50));
    }

    // Animación de apertura de submenús en la sidebar
    document.querySelectorAll(".sidebar__title").forEach(title => {
        title.addEventListener("click", function () {
            const subMenu = this.nextElementSibling;

            if (subMenu.classList.contains("show")) {
                subMenu.style.transition = "max-height 0.4s ease, opacity 0.4s ease, transform 0.3s ease";
                subMenu.style.opacity = "0";
                subMenu.style.transform = "scaleY(0)";
                subMenu.style.maxHeight = "0px";
                setTimeout(() => subMenu.classList.remove("show"), 400);
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


console.log(document.documentElement.scrollWidth, window.innerWidth);
