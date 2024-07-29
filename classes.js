

//push e forEach

class Livro{
    #status
    constructor(titulo, autor, ano, status){
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.#status = status;
}

getStatus(){
    return this.#status;
}
setStatus(status){
    this.#status = status;
} 
  
}

class Biblioteca{
    constructor(){
        this.livros = []
    }
    
    adcionarLivros(livro){
        if (livro !== undefined){
            this.livros.push(livro);  
        }
        else{
            console.log("não pode ser adcionado");
        }
        
    }

    emprestarLivro(nomeLivro){
        this.livros.forEach(livro => {
            if(livro.titulo == nomeLivro){
                let status = livro.getStatus()
                if(status == "disponivel"){
                    livro.setStatus("emprestado");
                }
                else {
                    console.log("Livro foi emprestado");
                }
            }
        })
    }

    devolverLivro(nomeLivro){
        this.livros.forEach(livro => {
            if(livro.titulo == nomeLivro){
                let status = livro.getStatus()
                if(status == "emprestado"){
                    livro.setStatus("disponível");
                }
                else {
                    console.log("Livro no sistema ja consta como disponivel");
                }
            }
        })
    }
    
}

let livro1 = new Livro("Auto da Compadecida", "Ariano Suassuna", "1955", "disponivel")

let livro2 = new Livro("Javascript O guia Definitivo", "David Flanagan", "2012", "emprestado")


let bibliotecaDoCleitinho = new Biblioteca()

let livrosAdd = [livro1, livro2]

livrosAdd.forEach(livro => {
    bibliotecaDoCleitinho.adcionarLivros(livro)
})

bibliotecaDoCleitinho.livros.forEach(livro => {
    console.log(livro)
})

bibliotecaDoCleitinho.emprestarLivro("Auto da Compadecida")

bibliotecaDoCleitinho.livros.forEach(livro => {
    console.log(livro)
})

// const livro3 = new Livro()

// biblioteca.push(livro3)

// console.log(biblioteca.)

console.log(bibliotecaDoCleitinho.livros[1].getStatus())

bibliotecaDoCleitinho.devolverLivro("Javascript O guia Definitivo")
    console.log(bibliotecaDoCleitinho.livros[1].getStatus())

