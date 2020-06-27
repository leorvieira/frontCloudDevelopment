class FornecedorController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._cnpj = $('#cnpj');
        this._name = $('#name');
        this._email = $('#email');
        this._address = $('#address'); 
        this._number = $('#number') ; 
        this._addressComplement = $('#addressComplement');
        this._telephone = $('#telephone'); 
        this._cep = $('#cep'); 

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        this._botao = new BotaoF();
        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView = new BotaoViewF($('#botao'));
        this._botaoView.update(this._botao);
        this._fornecedor = new Fornecedor;
      
    }

    consultaFornecedor(event) {

        console.log("consula fornecedor");

        event.preventDefault();

        let service = new FornecedorService();
        service.consultaFornecedor(this._cnpj.value).then(
            fornecedor => {
                this._name.value = fornecedor._name ;
                this._email.value = fornecedor._email;
                this._telephone.value = fornecedor._telephone;
                this._address.value = fornecedor._address;
                this._number.value = fornecedor._number;
                this._addressComplement.value = fornecedor._addressComplement;
                this._cep.value = fornecedor._cep;

                this._mensagem.texto = 'Consulta realizada com sucesso';
                this._mensagemView.update(this._mensagem);
     
            })
            .catch(erro => {
                this._mensagem.texto = erro;
                this._mensagemView.update(this._mensagem);
            });

        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);
    }

    incluirFornecedor(event) {

        event.preventDefault();

        let service = new FornecedorService();
        service.incluirFornecedor(this._cnpj.value, this._name.value, this._email.value, this._address.value, this._number.value, this._addressComplement.value, this._telephone.value, this._cep.value).then(
            fornecedor => {
    
                this._mensagem.texto = "Fornecedor " + fornecedor._name + " cnpj =  " + fornecedor._cnpj + " incluído com sucesso.";
                this._mensagemView.update(this._mensagem);
     
            })
            .catch(erro => console.log(erro));

        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);
    }

    limpaTelaFornecedor(event) {

        event.preventDefault();

        this._cnpj.value = '';
        this._name.value = '';
        this._email.value = '';
        this._telephone.value = '';
        this._address.value = '';
        this._number.value = '';
        this._addressComplement.value = '';
        this._cep.value = '';

        this._mensagem.texto = '';
        this._mensagemView.update(this._mensagem);


        this._botao.texto = "enabled,enabled,enabled,enabled";
        this._botaoView.update(this._botao);

    }
}