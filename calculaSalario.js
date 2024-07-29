const { Readline } = require("readline/promises");

function calculaSalario(){
    //perguntar quanto ela ganha por hora
    //multiplicar o valor da diaria horas pelos 30 dias de trabalho
    //mostrar o resultado
    const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('O que você acha do Node.js? ', (resposta) => {
  console.log(`Obrigado pelo seu feedback: ${resposta}`);
  rl.close();
});

}