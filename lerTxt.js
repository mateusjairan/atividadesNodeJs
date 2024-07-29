const fs = require("fs");
const caminho = "./arquivosTexto"
const nomeArquivo = "arquivo.txt"

const codificacao = "utf-8"

fs.readFile(`${caminho}/${nomeArquivo}`, codificacao, (erro, conteudo) => {
    console.log(`${conteudo}`);
});
