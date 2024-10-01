function main() {
    let paginas = ["Tienda", "Nosotros", "Blog", "Contacto"]
    let cuenta=document.getElementById("cuenta")
    let menuPrincipal = document.querySelectorAll("#menu-principal li .pagina");
    let mainContext = document.getElementById("main-context");

    menuPrincipal.forEach((a, index) => {
        let pagina = paginas[index];
        a.addEventListener("click", (e) => vinculos(pagina, e))
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
    cuenta.addEventListener("click",(e) => vinculos("Cuenta", e))


    function vinculos(pagina, e) {
        e.preventDefault();
        fetch(`./paginas/${pagina}.html`)
            .then(response => response.text())
            .then(data => {
                mainContext.innerHTML = data;
                // window.history.pushState({ page: pagina }, pagina, `/${pagina.toLowerCase()}`);

            })


    }


}
main();

