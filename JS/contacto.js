
const enviarFormulario = document.getElementById("enviarFormulario");

enviarFormulario.addEventListener("click", () => {
    Swal.fire(
        'Listo!',
        'Tu información fue enviada con éxito!',
        'success'
    )
});

