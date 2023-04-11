

let wsMyFormulario = {

    saldoPositivo(p1){
        return`

        <h3 class="p-4">Presupuesto Disponible</h3>
        <div class="d-flex justify-content-center flex-column align-items-center p-5 w-100" id="baners">
            <div id="saldo" class="saldo">
                <h1 class="p-2 " id="saldo">$${(p1.ingresos-p1.egresos).toLocaleString()}</h1>
            </div>
            
            <div class="d-flex align-items-center justify-content-between bg-primary w-25 m-3 rounded p-4" id="dinero">
                <div>INGRESOS</div>
                <div>
                    $${p1.ingresos.toLocaleString()}
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between bg-danger w-25 rounded p-4" id="dinero">
                <div>EGRESOS</div>
                <div>
                    $${p1.egresos.toLocaleString()}
                </div>
            </div>

        </div>`
    },
}
self. addEventListener("message",(e) => {
    postMessage(wsMyFormulario[`${e.data.module}`](e.data.data))
} )