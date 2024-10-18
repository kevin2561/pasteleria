function index() {
    let paginas = ["Tienda", "Nosotros", "Blog", "Contacto"];
    let cuenta = document.getElementById("cuenta");
    let menuPrincipal = document.querySelectorAll("#menu-principal li .pagina");
    let mainContext = document.getElementById("main-context");

    menuPrincipal.forEach((a, index) => {
        let pagina = paginas[index];
        a.addEventListener("click", (e) => vinculos(pagina, e));
    });

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
    });

    cuenta.addEventListener("click", (e) => vinculos("Cuenta", e));

    function loMasPedido() {
        let loMasPedidoHTML = document.getElementById("lo-mas-pedido")
        let cajaMain = "";
        let img = 'https://dulcefina.com.pe/wp-content/uploads/2021/09/calado-costado.png'
        for (let i = 0; i < 4; i++) {
            cajaMain += "<article class='cajaMain'>";
            cajaMain += `<div class='contenedor-img'>`;
            cajaMain += `<img src='${img}'>`;
            cajaMain += `</div>`;
            cajaMain += `<div class='caja-opciones'>
            <a class='btnx btn-pmr'>Ver Opciones</a>
            </div>`;
            cajaMain += `<div class='contenedor-descripcion text-center'>`;
            cajaMain += `<h2>Nombre</h2>`;
            cajaMain += `<h2 class='h2-s'>Desde <span>S/000</span></h2>`;
            cajaMain += `</div>`;
            cajaMain += `</article>`;



        }

        loMasPedidoHTML.innerHTML = cajaMain

    }
    loMasPedido()
    function vinculos(pagina, e) {
        if (e) e.preventDefault();

        fetch(`/paginas/${pagina}.html`)
            .then(response => response.text())
            .then(data => {
                mainContext.innerHTML = data;
                window.history.pushState({ page: pagina }, pagina, `/${pagina.toLowerCase()}`);
                let createScript = document.createElement("script");
                createScript.src = `/paginas/${pagina}.js`;
                mainContext.appendChild(createScript);
            });
    }
    // Función para redirigir al inicio si no estamos en la raíz
    function redirigirAlInicioSiEsNecesario() {
        if (window.location.pathname !== '/') {
            // Cambiar la URL a la raíz sin recargar la página
            window.history.replaceState(null, 'Inicio', '/');
        }
    }

    // Llamar a la función al cargar la página
    document.addEventListener('DOMContentLoaded', redirigirAlInicioSiEsNecesario);

}
index();
