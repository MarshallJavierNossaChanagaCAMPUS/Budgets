import config from "../storage/config.js";
config.data();
const datos = (this, JSON.parse(localStorage.getItem("myForm")));

const getOptionChart = () => {
  return {
    
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: datos.ingresos , name: "Ingresos" },
          { value: datos.egresos , name: "Egresos" },
        ],
      },
    ],
  };
};

const initCharts = () => {
    const chart = echarts.init(document.querySelector("#grafica"));

    chart.setOption(getOptionChart())
}

export default {
  mostrarGrafica() {
    window.addEventListener("load", () => {});
    initCharts();
  },
};
