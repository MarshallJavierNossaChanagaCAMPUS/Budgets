let datos = [];
let ingresos = 0;
let egresos = 0;


export default {
    data(){
        let formulario = document.querySelector("#form");
        let montoTotal = document.querySelector("#montoTotal");

        let descripcion = formulario.descripcion.value;
        let valor = Number(formulario.valor.value);
        let select = formulario.select.value;

        localStorage.setItem("myForm", JSON.stringify(datos))
    }
}