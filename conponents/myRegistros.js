import config from "../storage/config.js"
import myFormulario from "./myFormulario.js";

export default{
    showregistros(){
        
        formulario.addEventListener('submit', function(e){ 
            e.preventDefault();
            console.log(config);
            const losdatos = (this, JSON.parse(localStorage.getItem("myFormulario")));
            console.log(losdatos);

            const ws  = new Worker("storage/wsMyRegistros.js",{type:"module"})
            ws.postMessage({module:"showRegistros",data:losdatos});

            ws.addEventListener("message",(e)=>{

            } )


        })
        

    }
}