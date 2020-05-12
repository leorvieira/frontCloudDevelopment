class StringHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static subString(string, x, y) {

        return `${string.substring(x, y)}`;
    }

    static splitString(string, x) {

        var z = string.split(",", 4);
        return `${z[x]}`;
    }
}