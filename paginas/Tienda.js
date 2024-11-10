function tiendaJs() {
    let contenedorProductos = document.querySelector(".contenedor-productos");

    function productos() {
        let article = "";
        let img = "https://dulcefina.com.pe/wp-content/uploads/2023/09/cake-1-324x324.jpg"

        for (let i = 0; i < 20; i++) {
            article += `<artivle class="content-producto">`
            article += `<div class="content-image">`
            article += `<img  src="${img}">`
            article += `</div>`
            article += `<div>`
            article += `<h2 class="title-product">Arcoiris 04</h2>`
            article += `<h2 class="price-product">Desde S/720.00 </h2>`
            article += `</div>`
            article += `</artivle>`
        }
        contenedorProductos.innerHTML = article;

    }
    productos()

}
tiendaJs();