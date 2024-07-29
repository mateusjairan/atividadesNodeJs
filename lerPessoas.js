// const data = require("./pessoasJson.json");

// let pessoasFront = data.filter ( pessoasFront => pessoasFront.type === "Desenvolvedor Front-end" )
// console.log( pessoasFront ) 

// module.exports = pessoasFront

// const data = require("./pessoasJson.json");

// let pessoasFront = data.filter(pessoasFront => pessoasFront.type === "Desenvolvedor Front-end");
// console.log(pessoasFront);

// module.exports = pessoasFront;

const data = require("./pessoasJson.json");

console.log("Conteúdo do JSON:", data);

let pessoasFront = data.filter(pessoa => pessoa.type === "Desenvolvedor Front-end");
console.log("Pessoas Front-end:", pessoasFront);

module.exports = pessoasFront;
