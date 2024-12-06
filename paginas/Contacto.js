function ContactoJs() {

    const frmPasteleria = () => {
        const btn = document.getElementById('btn-enviar');
        const contenedorResultado = document.getElementById('contenedor-resultado');


        document.getElementById('frm-pasteleria')
            .addEventListener('submit', function (event) {
                event.preventDefault();
                contenedorResultado.style.display = "block";

                btn.value = 'Sending...';

                const serviceID = 'default_service';
                const templateID = 'template_0ewri13';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        resultado.innerText = "¡Mensaje Enviado Exitosamente!";
                        resultado.style.color = "#15fd15";
                        setTimeout(() => {
                            contenedorResultado.style.display = "none";
                            limpiarInputsFormulario();
                        }, 5000);
                    }, (error) => {
                        resultado.innerText = "Hubo un error al enviar el mensaje. Intente nuevamente.";
                        resultado.style.color = "#ff0000";
                        console.log(error)
                        setTimeout(() => {
                            contenedorResultado.style.display = "none";
                            limpiarInputsFormulario();

                        }, 5000);
                    });
            });
    }
    frmPasteleria()

    const limpiarInputsFormulario = () => {
        const inputs = document.querySelectorAll("#frm-pasteleria .inputs");
        inputs.forEach((input) => {
            input.value = "";
        })

    }
    console.log("CONTACTO JS")

}
ContactoJs();