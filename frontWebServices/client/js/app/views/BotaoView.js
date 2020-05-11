class BotaoView extends View {
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {

 //   console.log(model.texto);
 //   console.log(StringHelper.splitString(model.texto,0));

       return  `<button class="btn btn-primary" type="submit"" ${StringHelper.splitString(model.texto,0)}>Solicita Corrida</button>
                <button class="btn btn-primary" type="submit" onclick="negociacaoController.iniciaCorrida(event)" ${StringHelper.splitString(model.texto,1)}>Iniciar Corrida</button>
                <button class="btn btn-primary" type="submit" onclick="negociacaoController.finalizaCorrida(event)" ${StringHelper.splitString(model.texto,2)}>Finalizar Corrida</button>
                <button class="btn btn-primary" type="submit" onclick="negociacaoController.cancelaCorrida(event)" ${StringHelper.splitString(model.texto,3)}>Cancelar Corrida</button>`;
   
    }
}