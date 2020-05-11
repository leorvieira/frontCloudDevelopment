class HttpService {
    get(url) {
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
                            .map(objeto => new Veiculo(objeto.available, objeto.carBrand, ojbeto.carModel, objeto.carLicensePlate, objeto.localization)))
                    } else {
                        reject("deu ruim");
                    }
                }
            }
            xhr.send()
        });
    }

    post(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 201) {
                        let objeto = JSON.parse(xhr.responseText);
                        resolve(new Corrida(objeto.id, objeto.userId, objeto.vehicleId, objeto.price, objeto.departureAddress, objeto.destinationAddress, objeto.timeToUser, objeto.timeToDestination, objeto.timeLeftToReachDestination, objeto.timeLeftToReachUser, objeto.status, objeto.carBrand, objeto.carModel, objeto.carLicensePlate, objeto.localization))
                    } else {
                        reject("deu ruim")
                    }
                }
            }
            xhr.send()
        });
    }
}