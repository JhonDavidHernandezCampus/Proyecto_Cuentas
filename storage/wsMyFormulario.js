let wsMyFormulario = {

    saldoPositivo(p1){
        console.log(p1,"esto ya es del worker");
        
        let valor = p1.valor;
        console.log(valor);
        return `<h1 class="p-2" id="saldo">$${valor}</h1>`;
    },

    agregar(p1){
        console.log(p1,"esto esta en agregar");
        return `<hr>
        <div class="d-flex bg-danger">
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