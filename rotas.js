const http = require("http");
const funcionarios = require("pessoasJson.json");
const todosFuncionarios = parseFloat(funcionariosJSON);

const desenvolvedores = funcionarios.filter(funcionario => funcionario.cargo === "Desenvolvedor Front-end" || funcionario.cargo === "Desenvolvedor Back-end" || funcionario.cargo === "Desenvolvedor Full-stack");

const server = http.createServer((req, res)
)