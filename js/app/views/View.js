class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        console.log("entrou no update view");
        console.log(this.template(model));
        this._elemento.innerHTML = this.template(model);
    }
}