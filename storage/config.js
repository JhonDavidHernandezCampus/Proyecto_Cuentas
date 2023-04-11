
let ingresos=0 ;
let egresos=0 ;
let nombre = [];
let valores = [];

export default{
    datos(){
        /* esto es para que la menoria se guarde en el local storage completa */
        let datosA=[];
        let datosGuardados = localStorage.getItem('formulario');
        datosA = JSON.parse(datosGuardados) || [];

        /* aqui esta toda la data del formulario */
        const formulario = document.querySelector('#formulario');
        const datos = new FormData(formulario);
        const datosObj = Object.fromEntries(datos.entries());
            
        const valor = parseInt(formulario.valor.value);
        Math.abs(valor);
        const pago = formulario.pago.value;
        const selector = formulario.selector.value;
            
        (selector =="1")?ingresos = ingresos+ valor
        :egresos = egresos + valor;
        valores.push(valor)
        nombre.push(datosObj.pago)


        let datosTablas={
            nombre,
            valores,
            selector:selector,
            ingresos:ingresos,
            egresos:egresos
        }

        let losdatos = { 
            valorenvio:valor.toLocaleString(),                
            pago: pago.toLocaleString(),
            selector:selector,
            ingresos:ingresos,
            egresos:egresos    
        };

        datosA.push(losdatos);
        //console.log(datosA);

        localStorage.setItem("myFormulario",JSON.stringify(datosA));
        localStorage.setItem("paraTablas",JSON.stringify(datosTablas));

    }

}