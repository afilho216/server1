const http = require('http');
const server = http.createServer((request, response)=>{
console.log('acessado!');
const headers= request.headers;
const method = request.method;
const url = request.url;
const operacao= require('./operations.js');
const check = require('./validar.js');
const resultado = check(10);
if(request.url == '/teste'){
response.setHeader('Content-type','text/html');
response.end('<h1>Ola Mundo</h1>')
}else if (request.url == '/json') {
response.setHeader('Content-type', 'application/json');
const data = {
id: 2,
name: "user3"
};
response.end(JSON.stringify(data));

}
else{
response.setHeader('Content-type','text/html');
response.end("<h1>Pagina nao encontrada</h1>")
}
console.log(operacao.var2);
console.log(resultado.msg+'  '+resultado.value);
});

server.listen(3000);
