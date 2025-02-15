    let lastScrollTop = 0;
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // Cuando bajas, el header se mueve hacia abajo
            header.classList.add("scrolled");
        } else {
            // Cuando subes, el header vuelve a su lugar
            header.classList.remove("scrolled");
        }

        lastScrollTop = scrollTop;
    });

