function main() {
    let paginas = ["Tienda", "Nosotros", "Blog", "Contacto"]
    let menuPrincipal = document.querySelectorAll("#menu-principal li .pagina");
    let mainContext = document.getElementById("main-context");
    menuPrincipal.forEach((a, index) => {
        a.addEventListener("click", function (e) {
            e.preventDefault();
            let pagina = paginas[index];
            fetch(`./paginas/${paginas[index]}.html`)
                .then(response => response.text())
                .then(data => {
                    mainContext.innerHTML = data;
                    // window.history.pushState({ page: pagina }, pagina, `/${pagina.toLowerCase()}`);

                })


        })
    })
    window.addEventListener("scroll", function () {
        let headerNav = document.querySelector(".header-nav");
        let header = document.querySelector("header");

        let posicionY = window.scrollY;
        let headerAltura = header.clientHeight;

        if (posicionY > headerAltura) {
            headerNav.classList.add("fixed-top");
        } else {
            headerNav.classList.remove("fixed-top");


        }


    })


}
main();

