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
        let ingresos=0 ;
        let egresos=0 ;

        const formulario = document.querySelector('#formulario');

        formulario.addEventListener('submit', function(e){            
            e.preventDefault(); // previene la acción por defecto del formulario
            
            
            const datos = new FormData(formulario);
            const datosObj = Object.fromEntries(datos.entries());
            
            const valor = parseInt(formulario.valor.value);
            const pago = formulario.pago.value;
            const selector = formulario.selector.value;
            
            suma += valor ;

            console.log(egresos += valor,"suma");

            (selector == "suna")?ingresos += valor
            :egresos +=valor

            console.log(selector,"selector");
            console.log(egresos,"egresos");
            console.log(ingresos,"ingresos");



            let losdatos = { 
                valorenvio:valor,
                valortotal: suma,
                pago: pago,
                selector:selector,
                ingresos:ingresos,
                egresos:egresos    
            };
            let count = 0;
            let id = ["#saldos"]

            const ws = new Worker("storage/wsMyFormulario.js", {type:"module"});

            ws.postMessage({module:"saldoPositivo", data: losdatos})
            /* ws.postMessage({module:"agregar", data: losdatos}) */

            
            ws.addEventListener("message", (e) =>{
                
                const saldos = document.querySelector('#baners');
                saldos.remove();

                //Parseamos lo que trae el evento(mensaje)
                let doc = new DOMParser().parseFromString(e.data, "text/html");
                //insertamos data
                document.querySelector("#saldos").append(...doc.body.children);

                (selector=="suma")?console.log("dentro positivo")
                :console.log("dentro negativo");
                document.querySelector("#saldos").append(...doc.body.children);

                
                
                /* 
                
                (selector=="suma")?console.log("dentro positivo")
                :console.log("dentro negativo");;

                (id.length-1==count)?ws.terminate():count++; */

                /*lo debo hacer con un array que me contenga cada id*/
            })
            
           /*  formulario.reset(); */ /* esta lina me reseta el formulario cada que lo envio */

        })

    }

}