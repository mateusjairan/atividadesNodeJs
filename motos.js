const Veiculo = require("./veiculosAuto")

class Motos extends Veiculo {
    constructor(marca, modelo, anoDeFabricacao, preco, cilindradas, tipoPartida){
        super (marca, modelo, anoDeFabricacao, preco)
    }
}