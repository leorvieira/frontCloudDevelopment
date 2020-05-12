class Corrida {

    constructor(available, carBrand, carModel, carLicensePlate, localization) {


        this._avaliable = available;
        this._carBrand = carBrand;
        this._carModel = carModel;
        this._carLicensePlate = carLicensePlate;
        this._localization = localization;
        Object.freeze(this);
    }

    get available() {

        return this.avaliable;
    }

    get carBrand() {

        return this._carBrand;
    }

    get carModel() {

        return this._carModel;
    }

    get carLicensePlate() {

        return this._carLicensePlate;
    }

    get localization() {

        return this._localization;
    }



}