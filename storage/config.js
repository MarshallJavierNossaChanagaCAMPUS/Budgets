export default {
  data() {
    let datos = [];

    let formulario = document.querySelector("#form");

    let descripcion = formulario.descripcion.value;
    let valor = Number(formulario.valor.value);
    let select = formulario.select.value;

    datos.unshift({
        descripcion: descripcion,
        valor: valor,
        select: select
    });

    localStorage.setItem("myForm", JSON.stringify(datos));
  },
};