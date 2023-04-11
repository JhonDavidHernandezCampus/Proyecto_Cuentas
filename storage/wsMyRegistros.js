let wsMyRegistros = {
    showRegistros(p1){
        return `<hr>
        <div class="d-flex justify-content-around w-100">
            <div>
                ${p1.pago} 
            </div>
            <div class="d-flex ">
                <div class="${(p1.selector=="1")?"text-primary":"text-danger"}">
                    ${(p1.selector=="1")?"+ ":"-"}  $${p1.valorenvio}
                    
                </div>
            </div>
        </div>
        <hr>`
    } 
}

self.addEventListener("message", (e)=> {
    postMessage(wsMyRegistros[`${e.data.module}`](e.data.data))
})
