import config from "../storage/config.js";

export default {


  showTablas() {
    formulario.addEventListener('submit', () => {


      let datosTablas = (this, JSON.parse(localStorage.getItem("paraTablas")))

      /* function color(datosTablas) {
        if (datosTablas.selector == "2") {
          console.log("si");
          return {
            color: 'red',
          };
        } else {
          console.log("no");

          return {
            color: 'blue'
          };
        }
      } */

      console.log(datosTablas, "en las tablas ");
      const initCharts = () => {
        const chart1 = echarts.init(document.querySelector("#chart1"));
        const chart2 = echarts.init(document.querySelector("#chart2"));

        chart1.setOption(getOptionChart1());
        chart2.setOption(getOptionChart2());
      };

      const getOptionChart1 = () => {
        return {
          tooltip: {
            show: true,
            trigger: "axis",
            triggerOn: "mousemove|click",
            axisPointer: {
              type: "cross"
            }
          },

          dataZoom: {
            show: true,

          },

          xAxis: {
            type: 'category',
            data: datosTablas.nombre
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: datosTablas.valores,
            type: 'bar',
            itemStyle: {
              /* color(datosTablas) {
                if (datosTablas.selector == "1") {
                  console.log("si");
                  return {
                    color: 'red',
                  };
                } else {
                  console.log("no");
        
                  return {
                    color: 'blue'
                  };
                }
              } */

              /* formatter:
              function (datosTablas){
                (datosTablas.selector == "1")?console.log("verdadero"):console.log("falso")
              } */
            },
            showBackground: false,/* sombra de la columna */
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }

          }],
        };
      };

      const getOptionChart2 = () => {
        return {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: datosTablas.ingresos, name: 'Ingresos' },
                { value: datosTablas.egresos, name: 'Egresos', itemStyle:{color:'#c90b0b'} },
              ]
            }
          ]
        };
      };

      console.log(datosTablas);
      initCharts();
    })
  }
}