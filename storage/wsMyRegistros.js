let wsMyRegistros = {
    showRegistros(p1){
        console.log(p1,"esto esta en agregar");

        return `<hr>
        <div class="d-flex justify-content-around w-100">
            <div>
                ${p1.pago} 
            </div>
            <div class="d-flex ">
                <div>
                    ${p1.valorenvio}
                </div>
            </div>
        </div>
        <hr>`
    } 
    

    
}

self.addEventListener("message", (e)=> {
    postMessage(wsMyRegistros[`${e.data.module}`](e.data.data))
})
