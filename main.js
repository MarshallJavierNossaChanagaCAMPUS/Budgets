let formulario = document.querySelector("#form");
let datos = {"mas": []};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    datos[`${"mas"}`];
    formulario.reset();
});

console.log(datos);