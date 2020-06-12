class BotaoView extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(model) {

    return `<button class="btn btn-primary" type="submit"" ${StringHelper.splitString(model.texto, 0)}>Consulta Cliente</button>
                <button class="btn btn-primary" type="submit" onclick="clienteController.incluirCliente(event)" ${StringHelper.splitString(model.texto, 1)}>Novo Cliente</button>
                <button class="btn btn-primary" type="submit" onclick="clienteController.limpaTelaCliente(event)" ${StringHelper.splitString(model.texto, 3)}>Clear</button>`;

  }
}