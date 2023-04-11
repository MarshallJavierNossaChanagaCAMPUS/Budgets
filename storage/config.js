export default {
  data() {
    let datos = [];

    let datosGuardados = localStorage.getItem("myForm");
    
    datos = JSON.parse(datosGuardados) || [];

    let ingresos = 0;
    let egresos = 0;

    let formulario = document.querySelector("#form");
    let descripcion = formulario.descripcion.value;
    let valor = Number(formulario.valor.value);
    let select = formulario.select.value;

    let array = {
      descripcion: descripcion,
      valor: valor,
      select: select,
      egresos: egresos,
      ingresos: ingresos
    };

    datos.unshift(array);

    localStorage.setItem("myForm", JSON.stringify(datos));
  },
};
