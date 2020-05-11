class HttpService {
    get(url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log(xhr.responseText)
                       var obj = JSON.parse(xhr.responseText)
                        console.log(obj.available)
                        console.log(obj.carBrand)

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Corrida(objeto.available, objeto.carBrand, ojbeto.carModel, objeto.carLicensePlate, objeto.localization)))
                    } else {
                        reject("deu ruim");
                    }
                }
            }
            xhr.send()
        });
    }

    put(url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('PUT', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                    } else {
                        reject("deu ruim")
                    }
                }
            }
            xhr.send()
        });
    }
    
}