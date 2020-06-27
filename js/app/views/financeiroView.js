class EventosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {

        console.log("dentro do EventosView");
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>EVENTO</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.eventos.map( 
                    evento => {
                    return `<tr> 
                               <td>${evento._id_evento}</td>
                               <td>${evento._descricao_evento}</td>
                            </tr>`
                    }
                    ).join('')}                
            </tbody>         
        </table>
        `;
    }
}