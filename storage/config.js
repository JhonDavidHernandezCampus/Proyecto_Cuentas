
let ingresos=0 ;
let egresos=0 ;
let nombre = [];
export default{
    datos(){
        const formulario = document.querySelector('#formulario');
        
        const datos = new FormData(formulario);
        const datosObj = Object.fromEntries(datos.entries());
            
        const valor = parseInt(formulario.valor.value);
        Math.abs(valor);
        const pago = formulario.pago.value;
        const selector = formulario.selector.value;
            
        (selector =="1")?ingresos = ingresos+ valor
        :egresos = egresos + valor;

        nombre.push(datosObj.pago)
        console.log("en el config nombre", nombre);
        let datosTablas={
            nombre
        }

        let losdatos = { 
            valorenvio:valor,                
            pago: pago,
            selector:selector,
            ingresos:ingresos,
            egresos:egresos    
        };
        localStorage.setItem("myFormulario",JSON.stringify(losdatos));

        localStorage.setItem("paraTablas",JSON.stringify(datosTablas));

    }

}