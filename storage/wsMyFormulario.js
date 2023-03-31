

let wsMyFormulario = {

    saldoPositivo(p1){
        console.log(p1,"esto ya es del worker");
        return`
        <div class="d-flex justify-content-center flex-column align-items-center p-5 w-100" id="baners">
            <div id="saldo" class="saldo">
                <h1 class="p-2">${(p1.valortotal)}</h1>
            </div>
            
            <div class="d-flex align-items-center justify-content-between bg-primary w-25 m-3 rounded p-4" id="dinero">
                <div>INGRESOS</div>
                <div>
                    $${p1.ingresos}
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between bg-danger w-25 rounded p-4" id="dinero">
                <div>EGRESOS</div>
                <div>
                    $${p1.egresos}
                </div>
            </div>

        </div>`
    },

    agregar(p1){
        console.log(p1,"esto esta en agregar");
        return `<hr>
        <div class="d-flex justify-content-around">
            <div>
                ${p1.pago} 
            </div>
            <div class="d-flex ">
                <div>
                    ${p1.valor}
                </div>
            </div>
        </div>
        <hr>`
    } 

}
self. addEventListener("message",(e) => {
    postMessage(wsMyFormulario[`${e.data.module}`](e.data.data))
} )