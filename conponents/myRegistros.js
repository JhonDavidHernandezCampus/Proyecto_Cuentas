import config from "../storage/config.js"
import myFormulario from "./myFormulario.js";

let count =0;
export default{
    showregistros(){
        
        formulario.addEventListener('submit', function(e){ 
            count +=1;
            e.preventDefault();
            const losdatos = (this, JSON.parse(localStorage.getItem("myFormulario")));
            /* agregamos una propiedad a el objeto para manejar el id de eliminar */
            losdatos[0]['contador']= count;
            console.log(count);
            console.log(losdatos[0]);
            
            const ws  = new Worker("storage/wsMyRegistros.js",{type:"module"})
            ws.postMessage({module:"showRegistros",data:losdatos[0]});

            ws.addEventListener("message",(e)=>{
                let doc = new DOMParser().parseFromString(e.data , "text/html");

                (losdatos[0].selector == "1")?document.querySelector("#ingresos").append(...doc.body.children)
                :document.querySelector("#egresos").append(...doc.body.children)
                
                
                ws.terminate();
            })
            
        })
    }
}