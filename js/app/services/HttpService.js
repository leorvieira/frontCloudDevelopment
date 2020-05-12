class HttpService {

    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let objeto = JSON.parse(xhr.responseText);
                        resolve(new Corrida(objeto.id, objeto.userId, objeto.vehicleId, objeto.price, objeto.departureAddress, objeto.destinationAddress, objeto.timeToUser, objeto.timeToDestination, objeto.timeLeftToReachDestination, objeto.timeLeftToReachUser, objeto.status, objeto.carBrand, objeto.carModel, objeto.carLicensePlate, objeto.localization))
                    } else {
                        reject("Erro ao consultar API")
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
                        reject("Erro ao consultar API")
                    }
                }
            }
            xhr.send()
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