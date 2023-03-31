import config from "../storage/config.js";

export default{

    
    datosForm(){
        formulario.addEventListener('submit', function(e){     
             
            config.datos();
            console.log(config)
            
            const losdatos= (this, JSON.parse(localStorage.getItem("myFormulario")));
            console.log(localStorage.getItem("myFormulario"),"los datos de localStorage");
             
            e.preventDefault(); // previene la acción por defecto del formulario
            const ws = new Worker("storage/wsMyFormulario.js", {type:"module"});
            ws.postMessage({module:"saldoPositivo", data: losdatos})
            
            ws.addEventListener("message", (e) =>{

                //Parseamos lo que trae el evento(mensaje)
                let doc = new DOMParser().parseFromString(e.data, "text/html");
                
                //insertamos data
                document.querySelector("#saldos").innerHTML=e.data;
            })
            
            formulario.reset(); 

        })  

    }

}