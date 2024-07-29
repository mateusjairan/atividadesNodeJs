const fs = require("fs");
const caminho = "./arquivosTexto"
const codificacao = "utf-8"
const nomeArquivo = "arquivoConcatenado.txt"
const caminhoArquivo = `${caminho}/${nomeArquivo}`
// const conteudo = `${arquivo1.txt} + ${arquivo2.txt}`

// fs.writeFile(caminhoArquivo, conteudo, (erro, dados) => {
//     if (erro){
//         console.log("erro")
//     } else{
//         console.log("Arquivo criado com sucesso")
//         console.log("Conteudo do Arquivo")
//         console.log(dados)
//     }
// })

fs.readFile(`${caminho}/arquivo1.txt`, codificacao, (erro1, conteudo1) => {
    if (erro1) {
        console.log("Erro ao ler arquivo 1:", erro1);
        return;
    }

    // Leitura do conteúdo do segundo arquivo
    fs.readFile(`${caminho}/arquivo2.txt`, codificacao, (erro2, conteudo2) => {
        if (erro2) {
            console.log("Erro ao ler arquivo 2:", erro2);
            return;
        }

        // Concatenação dos conteúdos dos arquivos
        const conteudo = conteudo1 + conteudo2;

        // Escrita no arquivo de saída
        fs.writeFile(caminhoArquivo, conteudo, (erroWrite, dados) => {
            if (erroWrite) {
                console.log("Erro ao escrever arquivo:", erroWrite);
            } else {
                console.log("Arquivo criado com sucesso:", caminhoArquivo);
                console.log("Conteúdo do Arquivo:");
                console.log(dados);
            }
        });
    });
});