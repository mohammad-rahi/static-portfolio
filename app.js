const menus = document.querySelectorAll(".nav_menu li a");

menus.forEach(link => {
    link.addEventListener("click", function () {
        const current = document.querySelector(".active");
        current.classList.remove("active");
        this.classList.add("active");
    });
});