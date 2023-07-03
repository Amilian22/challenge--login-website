
let email = document.getElementById("email");
let boton = document.getElementById("enviar");
let resultado = document.getElementById("resultado");
let contenedor = document.querySelector(".conteiner")
let contenedor2 = document.querySelector(".conteiner-2")
let resultado2 = document.querySelector(".succes");
let boton2 = document.getElementById("enviar-2");



boton.addEventListener("click", (e) => {
    e.preventDefault();

    // let error = validarResultado()
    if (email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1) {
        resultado.innerHTML = `Valid email required`;
        boton.style.background = "rgb(255,105,94)";
        boton.style.boxShadow = "1px 25px 2px .1px rgb(255,125,89,0.2)";
        email.style.background = "rgb(255,105,94,.2)";
    }
    else {
        contenedor.style.display = "none";
        contenedor2.style.display = "flex";
        resultado2.innerHTML = `
        A confirmation email has been sent to <b>${email.value}</b>. Please open it and click the button inside to confirm your subscription.
        `
    }
})


boton2.addEventListener("click", () => {
    boton2.style.background = "rgb(255,105,94)";
    boton2.style.boxShadow = "1px 25px 2px .1px rgb(255,125,89,0.2)";

})
