
class EventosView extends View {
    
    constructor(elemento) {
        super(elemento);

        

    }
    
    template(model) {

        console.log("dentro do EventosView");
        
        return `
        <section>
        <!--  <legend>Escolha o tipo de evento</legend> -->
            <select id="eventosbox" class="multiselect selectBox" onchange="mainController.importarOpcaoEventos(this.selectedIndex)">
                <option> Escolha o tipo de evento     </option>
                ${model.eventos.map( 
                    n => {
                    return `<option>${n._descricao_evento}</option>`
                    }
                    ).join('')}                
            </select>
        </section>
        `;
    }
}

