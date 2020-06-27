class OpcaoEventosView extends View {
    
    constructor(elemento) {
        super(elemento);


    }
    
    template(model) {

        let opcaoEventoAux = '';
        let auxId = 0;  
        console.log("dentro do OpcaoEventosView");


        return `
            <section>
                <legend>Escolha as opções do evento escolhido </legend>    
                 ${model.opcaoEventos.map(
                    opcaoEvento =>  {
                        auxId++;
                        if (opcaoEvento._opcaoEvento == opcaoEventoAux){
                            return `   
                            <label class="container" onchange="mainController.enviaMsg(  ${opcaoEvento._precoOpcaoEvento}, ${auxId} )">${opcaoEvento._especTipoOpcaoEvento} / ${opcaoEvento._nomeFornecedorOpcaoEvento } / preço r$ ${opcaoEvento._precoOpcaoEvento} >
                                <input type="checkbox" id="checkbox${auxId}" > 
                                <span class="checkmark"></span>
                            </label> `
                        } else {
                            opcaoEventoAux = opcaoEvento._opcaoEvento
                            return ` 
                            <label for="subgroup">${ opcaoEvento._opcaoEvento }</label>
                            <label  class="container" onchange="mainController.enviaMsg(  ${opcaoEvento._precoOpcaoEvento}, ${auxId} )">${opcaoEvento._especTipoOpcaoEvento} / ${opcaoEvento._nomeFornecedorOpcaoEvento } /  preço r$ ${opcaoEvento._precoOpcaoEvento} >
                                <input type="checkbox" id="checkbox${auxId}" > 
                                <span class="checkmark"></span>
                            </label>       
                            `           
                            }    
                        }
                        ).join( '' )}
            </section>
        `;
    }
}









