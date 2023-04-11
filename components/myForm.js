import config from "../storage/config.js";

let formulario = document.querySelector("#form");
let montoTotal = document.querySelector("#montoTotal");


export default {
  dataForm() {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      config.data();
      const datos = (this, JSON.parse(localStorage.getItem("myForm")));

      if (datos[0].select == 1) {
        datos[0].valor = -datos[0].valor;
        datos[0].egresos = datos[0].egresos + datos[0].valor;
        document.querySelector("#Egresos").insertAdjacentHTML(
          "beforeend",
          `
          <p class="col-12 d-flex justify-content-center">${datos[0].descripcion} $${datos[0].valor}</p><br><br> 
                `
        );
      } else {
        datos[0].ingresos = datos[0].ingresos + datos[0].valor;
        document.querySelector("#Ingresos").insertAdjacentHTML(
          "beforeend",
          `
          <p class="col-12 d-flex justify-content-center">${datos[0].descripcion} $${datos[0].valor}</p><br> 
          `
        );
      }

      let total = datos[0].egresos + datos[0].ingresos;

      document.querySelector("#Ingre").innerHTML = `
        <p class="col-6 d-flex justify-content-center"> INGRESOS </p><p class="col-6 d-flex justify-content-center"> $${datos[0].ingresos}</p>
    `;

      document.querySelector("#Egre").innerHTML = `
        <p class="col-6 d-flex justify-content-center"> EGRESOS </p><p class="col-6 d-flex justify-content-center"> $${datos[0].egresos}</p>
    `;

      montoTotal.innerHTML = `<h1 class="col-12 d-flex justify-content-center"> $ ${total}</h1>`;

      console.log(datos);

      formulario.reset();
    });
  },
};