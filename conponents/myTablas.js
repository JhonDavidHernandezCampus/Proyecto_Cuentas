 import config from "../storage/config.js";
 
 const datosTablas = (this, JSON.parse(localStorage.getItem("paraTablas")))

 const getOptionChart1 = () =>{
   return {
     tooltip:{
       show:true,
       trigger:"axis",
       triggerOn:"mousemove|click",
       axisPointer:{
         type:"cross"
        }
        },
        
        dataZoom:{
          show: true,
          
        },
        
        xAxis: {
          type: 'category',
          data: datosTablas.nombre
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: datosTablas.valores,
            type: 'bar',
            showBackground: false,/* sombra de la columna */
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };

    };
    
    const getOptionChart2 = () =>{
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
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    
  };
  
  
  const initCharts=()=>{
    const chart1 = echarts.init(document.querySelector("#chart1"));
    const chart2 = echarts.init(document.querySelector("#chart2"));
    
    chart1.setOption(getOptionChart1());
    chart2.setOption(getOptionChart2());
  };
  
  
  
  
  
  export default{
    
    showTablas(){
      formulario.addEventListener('submit',()=>{
        initCharts();
        //config.datos();

        console.log(datosTablas,"en las tablas ");
        
        
        
      })
    }
    
  }