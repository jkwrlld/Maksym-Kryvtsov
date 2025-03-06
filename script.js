document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-ul .nav-li a");

    function setActiveNavLink() {
        const currentPage = window.location.pathname.split("/").pop();

        navLinks.forEach(link => {
            const linkPage = link.getAttribute("href");
            if (linkPage === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    setActiveNavLink();

    // Плавная прокрутка внутри страницы
    document.querySelectorAll('a[href^="index.html"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});