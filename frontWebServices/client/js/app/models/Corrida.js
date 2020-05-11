class Corrida {

    constructor(id, userId, vehicleId, price, departureAddress, destinationAddress, timeToUser, timeToDestination, timeLeftToReachDestination, timeLeftToReachUser, status, carBrand, carModel, carLicensePlate, localization) {

        this._id = id;
        this._userId = userId;
        this._vehicleId = vehicleId;
        this._price = price;
        this._departureAddress = departureAddress;
        this._destinationAddress = destinationAddress;
        this._timeToUser = timeToUser;
        this._timeToDestination = timeToDestination;
        this._timeLeftToReachDestination = timeLeftToReachDestination;
        this._timeLeftToReachUser = timeLeftToReachUser;
        this._status = status;
        this._carBrand = carBrand;
        this._carModel = carModel;
        this._carLicensePlate = carLicensePlate;
        this._localization = localization;
        Object.freeze(this);
    }
}