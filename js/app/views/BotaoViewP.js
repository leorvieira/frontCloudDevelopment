class BotaoViewP extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(model) {

    return `<button class="btn btn-primary" type="submit"" ${StringHelper.splitString(model.texto, 0)}>Contratar Evento</button>`


  }
}