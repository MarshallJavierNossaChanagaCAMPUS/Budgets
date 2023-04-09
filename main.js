let formulario = document.querySelector("#form");
let montoTotal = document.querySelector("#montoTotal");
let datos = [];

//Con este fragmento de codigo pbtengo los datos de "valor", "select" y "descripcion" y los imprimo.

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
   // let data = new FormData(formulario);

    let descripcion = formulario.descripcion.value;
    let valor = Number(formulario.valor.value);
    let select = formulario.select.value;
    let total = valor;

    if (select == 1) {
        valor = -valor;
        total = valor + valor
    } else {
        valor = valor;
        total = valor + valor
    };

    montoTotal.innerHTML = `<h1 class="col-12 d-flex justify-content-center"> $ ${total}</h1>`;

    datos.push({
        descripcion: descripcion,
        valor: valor,
        select: select
    });

    console.log(datos);

    formulario.reset();
});

// <h1 class="col-12 d-flex justify-content-center">$ 10.000.000.000</h1>

