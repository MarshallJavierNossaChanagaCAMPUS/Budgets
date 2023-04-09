let formulario = document.querySelector("#form");
let montoTotal = document.querySelector("#montoTotal");
let datos = [];
let ingresos = 0;
let egresos = 0;

//Con este fragmento de codigo pbtengo los datos de "valor", "select" y "descripcion" y los imprimo.

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
   // let data = new FormData(formulario);

    let descripcion = formulario.descripcion.value;
    let valor = Number(formulario.valor.value);
    let select = formulario.select.value;

    if (select == 1) {
        valor = -valor;
        egresos = egresos + valor;
        document.querySelector("#Egresos").insertAdjacentHTML("beforeend", `
        <p class="col-6 d-flex justify-content-center">${descripcion}</p><p class="col-6 d-flex justify-content-center"> -$${-valor}</p>
        `)
    } else {
        valor = valor;
        ingresos = ingresos + valor;
        document.querySelector("#Ingresos").insertAdjacentHTML("beforeend", `
        <div class="row container col-12 "> <p class="col-6 d-flex justify-content-center">${descripcion}</p><p class="col-6 d-flex justify-content-center"> $${valor}</p> </div>
        `)
    };

    let total = ingresos + egresos;

    document.querySelector("#Ingre").innerHTML=`
        <div class="row container col-12 "> <p class="col-6 d-flex justify-content-center"> INGRESOS </p><p class="col-6 d-flex justify-content-center"> $${ingresos}</p> </div>
    `

    document.querySelector("#Egre").innerHTML=`
        <div class="row container col-12 "> <p class="col-6 d-flex justify-content-center"> EGRESOS </p><p class="col-6 d-flex justify-content-center"> $${egresos}</p> </div>
    `

    montoTotal.innerHTML = `<h1 class="col-12 d-flex justify-content-center"> $ ${total}</h1>`;

    datos.push({
        descripcion: descripcion,
        valor: valor,
        select: select
    });

    console.log(datos);

    formulario.reset();
});