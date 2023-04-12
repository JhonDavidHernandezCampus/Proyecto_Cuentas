let wsMyRegistros = {
    showRegistros(p1){
        return `
        <div class="d-flex justify-content-around w-100 align-items-center" id="${p1.contador}">
            <div>
                ${p1.pago} 
            </div>
            <div class="d-flex ">
                <div class="${(p1.selector=="1")?"text-primary":"text-danger"}">
                    ${(p1.selector=="1")?"+ ":"-"}  $${p1.valorenvio}
                    <img src="img/eliminar.png" alt="" id="eliminar" class="btn" onclick="eliminar(${p1.contador})">                    

                    
                </div>
            </div>
        </div>
        `
    } 
}

self.addEventListener("message", (e)=> {
    postMessage(wsMyRegistros[`${e.data.module}`](e.data.data))
})
