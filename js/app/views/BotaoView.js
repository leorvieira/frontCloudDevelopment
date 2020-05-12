class BotaoView extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(model) {

    return `<button class="btn btn-primary" type="submit"" ${StringHelper.splitString(model.texto, 0)}>Solicitar Corrida</button>
                <button class="btn btn-primary" type="submit" onclick="corridaController.iniciaCorrida(event)" ${StringHelper.splitString(model.texto, 1)}>Confirmar Corrida</button>
                <button class="btn btn-primary" type="submit" onclick="corridaController.cancelaCorrida(event)" ${StringHelper.splitString(model.texto, 3)}>Cancelar Corrida</button>`;

  }
}