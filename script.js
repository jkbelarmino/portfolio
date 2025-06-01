document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Prevent default only for internal anchor links
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollToTop");

    // Show button only after scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollButton.classList.remove("hidden");
        } else {
            scrollButton.classList.add("hidden");
        }
    });

    // Scroll to top on button click
    scrollButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
