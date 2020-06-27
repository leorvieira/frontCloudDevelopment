class OpcaoEventosView extends View {
    
    constructor(elemento) {
        super(elemento);


    }
    
    template(model) {

        let opcaoEventoAux = 'x';

        console.log("dentro do OpcaoEventosView");

        return `
        <form>
            <section>
                <legend>Escolha as opções do evento escolhido</legend>
                <div class="multiselect">
                    <div class="selectBox" onclick="showCheckboxes()">
                        <select>
                            <option>          </option>
                        </select>
                        <div class="overSelect"></div>
                    </div>
                    <div id="checkboxes">
                        ${model.opcaoEventos.map(
                            opcaoEvento =>  {
                                if (opcaoEvento._opcaoEvento.value == opcaoEventoAux){
                                    return `               
                                    <label for="one">
                                    <input type="checkbox" id="one" /> ${opcaoEvento._especTipoOpcaoEvento} - preço r$ ${opcaoEvento._precoOpcaoEvento} </label>` 
                                } else {
                                    if ( opcaoEventoAux != ' '){
                                        opcaoEventoAux = opcaoEvento._opcaoEvento.value;
                                        return `</optgroup>
                                                <optgroup label=" ${ opcaoEvento._opcaoEvento}">               
                                                <label for="one">
                                                <input type="checkbox" id="one" /> ${opcaoEvento._especTipoOpcaoEvento} - preço r$ ${opcaoEvento._precoOpcaoEvento} </label>`           
                                    }else {
                                        return `
                                                <optgroup label=" ${ opcaoEvento._opcaoEvento}">               
                                                <label for="one">
                                                <input type="checkbox" id="one" /> ${opcaoEvento._especTipoOpcaoEvento} - preço r$ ${opcaoEvento._precoOpcaoEvento} </label>` 
                                    }
                                }    
                            }
                         ).join( '' )}
                    </div>
                </div>
                </section>
        </form>
        `;
    }
}









