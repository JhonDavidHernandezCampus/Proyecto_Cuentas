import config from "../storage/config.js";

export default{

    
    datosForm(){

        formulario.addEventListener('submit', function(e){     
            e.preventDefault(); // previene la acción por defecto del formulario
            config.datos();
            const losdatos= (this, JSON.parse(localStorage.getItem("myFormulario")));
            
            const ws = new Worker("storage/wsMyFormulario.js", {type:"module"});
            ws.postMessage({module:"saldoPositivo", data: losdatos[0]})
            
            ws.addEventListener("message", (e) =>{

                //Parseamos lo que trae el evento(mensaje)
                let doc = new DOMParser().parseFromString(e.data, "text/html");
                
                //insertamos data
                document.querySelector("#saldos").innerHTML=e.data;
                ws.terminate();
            })
            
            //formulario.reset(); 

        })  

    }

}