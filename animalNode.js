class Animal{
    //declarar campos privados
    #nome
    #especie
    constructor(especie, tamanho, cor, nome){
        this.#especie = especie;
        this.tamanho = tamanho;
        this.cor = cor; 
        this.#nome = nome;

    }
    falar(){
        console.log(`o animal ${this.nome} fez som`);
    }

    comer(){
       console.log(`o animal ${this.nome} comeu`);
    }

    dormir(){
        console.log(`o animal ${this.nome} dormiu`);
    }

    getNome() {return this.#nome}
    setNome(nome) {this.#nome = nome;}
}

const animal1 = new Animal("gato","grande","laranja","Cleitinho")

console.log(typeof animal1);

const animal2 = new Animal("cachorro","pequeno","branco","Belinha")

console.log(animal2.nome)