class HttpService {


/*
    getE(url) {

        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());

    }
*/

    getE(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new ListaEventos(objeto.id_evento, objeto.descricao_evento)))
                    } else {
                        if (xhr.status == 404 ) {
                            reject("Eventos não encontrados.")       
                        }else{
                            reject("Erro ao consultar API.")     
                        }
                        
                    }
                }
            }
            xhr.send()
        });
    }

    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let objeto = JSON.parse(xhr.responseText);
                        console.log("responseText = "+xhr.responseText);
                        resolve(new Cliente(objeto.id, objeto.cpf, objeto.name, objeto.email, objeto.address, objeto.number, objeto.addressComplement, objeto.telephone, objeto.cep, objeto.status))
                        console.log("dentro do httpservice "+objeto.id+" "+objeto.name);
                        
                    } else {
                        if (xhr.status == 404 ) {
                            reject("Cliente não encontrado.")       
                        }else{
                            reject("Erro ao consultar API.")     
                        }
                        
                    }
                }
            }
            xhr.send()
        });
    }

    getF(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let objeto = JSON.parse(xhr.responseText);
                        console.log("responseText = "+xhr.responseText);
                        resolve(new Fornecedor(objeto.id, objeto.cnpj, objeto.name, objeto.email, objeto.address, objeto.number, objeto.addressComplement, objeto.telephone, objeto.cep, objeto.status))
                        console.log("dentro do httpservice "+objeto.id+" "+objeto.name);
                        
                    } else {
                        if (xhr.status == 404 ) {
                            reject("Cliente não encontrado.")       
                        }else{
                            reject("Erro ao consultar API.")     
                        }
                        
                    }
                }
            }
            xhr.send()
        });
    }

    post(url, json) {
        console.log("dentro do http service");
        console.log(url);
        console.log(json);

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
//            xhr.onreadystatechange = () => {       
            xhr.onload = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let objeto = JSON.parse(xhr.responseText);
                        resolve(new Cliente(objeto.id, objeto.cpf, objeto.name, objeto.email, objeto.address, objeto.number, objeto.addressComplement, objeto.telephone, objeto.cep, objeto.status))
                    } else {
                        reject("Erro ao consultar API")
                    }
                }
            }
        
            xhr.send(json)
        });
    }


    postF(url, json) {
        console.log("dentro do http service");
        console.log(url);
        console.log(json);

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
//            xhr.onreadystatechange = () => {       
            xhr.onload = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let objeto = JSON.parse(xhr.responseText);
                        resolve(new Fornecedor(objeto.id, objeto.cnpj, objeto.name, objeto.email, objeto.address, objeto.number, objeto.addressComplement, objeto.telephone, objeto.cep, objeto.status))
                    } else {
                        reject("Erro ao consultar API")
                    }
                }
            }
        
            xhr.send(json)
        });
    }

    put(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('PUT', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(true)
                    } else {
                        reject("Erro ao consultar API");
                    }
                }
            }
            xhr.send()
        });
    }
}