class Botao {

    constructor(botao = '') {
        this._botao = botao;
    }

    get botao() {
        return this._botao;
    }

    set botao(botao) {
        this._botao = botao;
    }
}