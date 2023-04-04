import config from "../storage/config.js"
import myFormulario from "./myFormulario.js";

export default{
    showregistros(){
        
        formulario.addEventListener('submit', function(e){ 
            e.preventDefault();
            const losdatos = (this, JSON.parse(localStorage.getItem("myFormulario")));

            const ws  = new Worker("storage/wsMyRegistros.js",{type:"module"})
            ws.postMessage({module:"showRegistros",data:losdatos});

            ws.addEventListener("message",(e)=>{
                let doc = new DOMParser().parseFromString(e.data , "text/html");

                (losdatos.selector == "1")?document.querySelector("#ingresos").append(...doc.body.children)
                :document.querySelector("#egresos").append(...doc.body.children)
                
                
                ws.terminate();
            })
            
        })
    }
}