class BotaoViewF extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(model) {

    return `<button class="btn btn-primary" type="submit"" ${StringHelper.splitString(model.texto, 0)}>Consulta Fornecedor</button>
                <button class="btn btn-primary" type="submit" onclick="fornecedorController.incluirFornecedor(event)" ${StringHelper.splitString(model.texto, 1)}>Novo Fornecedor</button>
                <button class="btn btn-primary" type="submit" onclick="fornecedorController.limpaTelaFornecedor(event)" ${StringHelper.splitString(model.texto, 3)}>Clear</button>`;

  }
}