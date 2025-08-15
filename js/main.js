// Email JS - Start //
(function() {
    emailjs.init("VenmFULOKS8wQ433g");
})();

document.getElementById("formulario-contato").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.send("service_wr5qzgh", "template_ceo179k", {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    })
    .then(() => {
        // Mostra sucesso e esconde erro
        document.getElementById("alertSuccess").classList.remove("d-none");
        document.getElementById("alertError").classList.add("d-none");

        this.reset();
    })
    .catch((err) => {
        console.error("Erro ao enviar:", err);

        // Mostra erro e esconde sucesso
        document.getElementById("alertError").classList.remove("d-none");
        document.getElementById("alertSuccess").classList.add("d-none");
    });
});
