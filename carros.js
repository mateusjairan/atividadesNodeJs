const Veiculo = require("./veiculosAuto")

class Carro extends Veiculo{
    constructor(marca, modelo, anoDeFabricacao, preco, numPortas, tipoCombustivel){
        super(marca, modelo, anoDeFabricacao, preco )
        this.numPortas = numPortas;
        this.tipoCombustivel = tipoCombustivel;
    }
   
    showInfo(){
        super.showInfo();
        console.log(this.tipoCombustivel, this.numPortas);
    }

}

















