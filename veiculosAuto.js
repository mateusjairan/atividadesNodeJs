class Veiculo{
    #preco
    constructor(marca, modelo, anoDeFabricacao, preco){
        this.marca = marca;
        this.modelo = modelo;   
        this.anoDeFabricacao = anoDeFabricacao;
        this.#preco = preco;
    }

    showInfo(){
        console.log(this.marca, this.modelo, this.anoDeFabricacao, this.#preco);
    }
}

module.exports = Veiculo;
