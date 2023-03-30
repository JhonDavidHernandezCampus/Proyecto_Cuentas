/* import config from "../storage/config.js";
datosForm(){
    config.dataFormulario();
    Object.assign(this, JSON.parse(localStorage.getItem("myFormulario")))

    console.log(for);
}
 */
export default{

    datosForm(){
        let suma =0;

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', function(e){            
            e.preventDefault(); // previene la acción por defecto del formulario


            const datos = new FormData(formulario);
            const datosObj = Object.fromEntries(datos.entries());
            
            const valor = parseInt(formulario.valor.value);
            const pago = formulario.pago.value;
            const selector = formulario.selector.value;
            
            suma += valor ;

            let losdatos = { 
                valor: suma,
                pago: pago,
                selector:selector    
            };
            let count = 0;
            let id = ["saldoPositivo","agregar"]

            const ws = new Worker("storage/wsMyFormulario.js", {type:"module"});

            ws.postMessage({module:"saldoPositivo", data: losdatos})
            ws.postMessage({module:"agregar", data: losdatos})

            
            ws.addEventListener("message", (e) =>{

            //Parseamos lo que trae el evento(mensaje)
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            //insertamos data
            document.querySelector("#ingresos").append(...doc.body.children);
            document.querySelector("#saldo").prepend(...doc.body.children);
            /*lo debo hacer con un array que me contenga cada id*/
            })
            
           /*  formulario.reset(); */ /* esta lina me reseta el formulario cada que lo envio */

        })

    }

}