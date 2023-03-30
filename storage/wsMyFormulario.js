let wsMyFormulario = {

    menejoData(p1){

        console.log(p1);

    }

}
self. addEventListener("message",(e) => {
    postMessage(wsMyFormulario[`${e.data.module}`](e.data.data))
} )