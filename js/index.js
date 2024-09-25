function main() {
    let paginas = ["Tienda", "Nosotros", "Blog", "Contacto"]
    let menuPrincipal = document.querySelectorAll("#menu-principal li .pagina");
    let mainContext = document.getElementById("main-context");
    menuPrincipal.forEach((a, index) => {
        a.addEventListener("click", function (e) {
            e.preventDefault();
            fetch(`./paginas/${paginas[index]}.html`)
                .then(response => response.text())
                .then(data => {
                    mainContext.innerHTML = data;
                })


        })
    })
    console.log(menuPrincipal)


}
main();