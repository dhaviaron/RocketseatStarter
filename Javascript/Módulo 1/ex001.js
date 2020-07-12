
function printAdress(endereco){
    return(`O Usuário mora em ${endereco.cidade}/${endereco.uf} no bairro ${endereco.bairro}, na ${endereco.rua} com o numero ${endereco.numero}`)
} 
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
    
   };
  
   console.log(printAdress(endereco))