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
        datos[0].egresos = datos[0].valor;
        document.querySelector("#Egresos").insertAdjacentHTML(
          "beforeend",
          `
          <p class="col-12 d-flex justify-content-center w-75 bg-danger parrafo">${datos[0].descripcion} $${datos[0].valor}</p><br><br> 
                `
        );
      } else {
        datos[0].ingresos = datos[0].valor;
        document.querySelector("#Ingresos").insertAdjacentHTML(
          "beforeend",
          `
          <p class="col-12 d-flex justify-content-center w-75 bg-secondary parrafo">${datos[0].descripcion} $${datos[0].valor}</p><br> 
          `
        );
      };
      let total = 0;

      for (let i = 0; i < datos.length; i++) {
        total += datos[i].valor;
      };

      let totalIngresos = 0;

      for (let i = 0; i < datos.length; i++) {
        totalIngresos += datos[i].ingresos;
      };

      let totalEgresos = 0;

      for (let i = 0; i < datos.length; i++) {
        totalEgresos += datos[i].egresos;
      };

      document.querySelector("#Ingre").innerHTML = `
        <p class="col-6 d-flex justify-content-center"> INGRESOS </p><p class="col-6 d-flex justify-content-center"> $${totalIngresos}</p>
    `;

      document.querySelector("#Egre").innerHTML = `
        <p class="col-6 d-flex justify-content-center"> EGRESOS </p><p class="col-6 d-flex justify-content-center"> $${totalEgresos}</p>
    `;

      montoTotal.innerHTML = `<h1 class="col-12 d-flex justify-content-center"> $ ${total}</h1>`;


      formulario.reset();
    });
  },
};