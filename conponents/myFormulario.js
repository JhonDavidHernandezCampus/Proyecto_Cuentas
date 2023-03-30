/* import config from "../storage/config.js";


datosForm(){
    config.dataFormulario();
    Object.assign(this, JSON.parse(localStorage.getItem("myFormulario")))

    console.log(for);
}


 */
export default{

    datosForm(){

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', function(e){            
            e.preventDefault(); // previene la acción por defecto del formulario

            const datos = new FormData(formulario);
            const datosObj = Object.fromEntries(datos.entries());

            const valor = parseInt(formulario.valor.value);
            const pago = formulario.pago.value;
            const selector = formulario.selector.value;

            console.log("EL VALOR",valor);
            console.log("EL PAGO",pago);
            console.log("EL selector", selector);


        })
    }
}