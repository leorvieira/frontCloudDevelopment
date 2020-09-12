class OpcaoEventosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {

        let opcaoEventoAux = '';
        let auxId = 0;  
        console.log("dentro do OpcaoEventosView");

        return `
            <div class="panel-group" id="accordion">
                ${model.opcaoEventos.map(
                    opcaoEvento => {
                    auxId++;    
                    console.log(opcaoEvento._opcaoEvento +' '+opcaoEventoAux)
                if (opcaoEvento._opcaoEvento == opcaoEventoAux){ 
                    return `
                    <label class="container" onchange="mainController.enviaMsg(  ${opcaoEvento._precoOpcaoEvento}, ${auxId} )">${opcaoEvento._especTipoOpcaoEvento} / ${opcaoEvento._nomeFornecedorOpcaoEvento } / preço r$ ${opcaoEvento._precoOpcaoEvento} >
                        <input type="checkbox" id="checkbox${auxId}" > 
                        <span class="checkmark"></span>
                    </label> 
                    `               
               }else{

                    if ( opcaoEventoAux != '') {  
                        opcaoEventoAux = opcaoEvento._opcaoEvento;
                        return `
                        </section>
                        </div>
                        </div>
                        <div class="panel panel-default">
                           <div class="panel-heading">
                               <h4 class="panel-title">
                                   <a data-toggle="collapse" data-parent="#accordion" href="#collapse${auxId}">
                                   ${opcaoEvento._opcaoEvento}</a>

                               </h4>
                           </div>
                           <div id="collapse${auxId}" class="panel-collapse collapse">
                                <div class="panel-body">
                                <section>
                                <label class="container" onchange="mainController.enviaMsg(  ${opcaoEvento._precoOpcaoEvento}, ${auxId} )">${opcaoEvento._especTipoOpcaoEvento} / ${opcaoEvento._nomeFornecedorOpcaoEvento } / preço r$ ${opcaoEvento._precoOpcaoEvento} >
                                    <input type="checkbox" id="checkbox${auxId}" > 
                                    <span class="checkmark"></span>
                                </label> 
                                `                
                    }else{    
                        opcaoEventoAux = opcaoEvento._opcaoEvento;
                        return `
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse${auxId}">
                                                ${opcaoEvento._opcaoEvento}</a>
                                    </h4>
                                </div>
                            <div id="collapse${auxId}" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <section>
                                        <label class="container" onchange="mainController.enviaMsg(  ${opcaoEvento._precoOpcaoEvento}, ${auxId} )">${opcaoEvento._especTipoOpcaoEvento} / ${opcaoEvento._nomeFornecedorOpcaoEvento } / preço r$ ${opcaoEvento._precoOpcaoEvento} >
                                            <input type="checkbox" id="checkbox${auxId}" > 
                                            <span class="checkmark"></span>
                                        </label> 
                `
                }
                }}
                ).join('')}
                    </div>
                </div>
            </div>    
        `
    }    
}

/*

        return `
            <section>
                <legend> Escolha as opções para o seu evento </legend>    
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
                            <label class="container-sub" for="subgroup">${ opcaoEvento._opcaoEvento }</label>
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

*/







