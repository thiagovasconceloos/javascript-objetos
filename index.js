import User from "./User.js";



const novoUser = new User('Alexandre','a@a.com', '2021-01-01')

console.log(novoUser.nome)

novoUser.nome = 'Thiago'


console.log(novoUser.nome)
