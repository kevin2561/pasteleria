function cuenta() {
    let iconoMostrar = "bi bi-eye-slash-fill"
    let iconoOcultar = "bi bi-eye-fill"

    let iconoMostrarContraseña = document.querySelectorAll(".mostrar-password");
    let inputPassword = document.querySelectorAll(".password");
    let iconos = document.querySelectorAll("i");

    iconoMostrarContraseña.forEach((item, index) => {
        item.addEventListener("click", (e) => {
           // let icon = iconos[index].className
            console.log(iconos[index].className)
            if (inputPassword[index].type === "password") {
                inputPassword[index].type = "text";

                iconos[index].className = iconoMostrar
            } else {
                inputPassword[index].type = "password";
                iconos[index].className = iconos[index].className
            }


        })
    })

}
cuenta()
