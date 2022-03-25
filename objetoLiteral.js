

const user = {
   nome: "Thiago",
   email: "t@t.com",
   nascimento:"2021/01/01",
   role: "estudante",
   ativo: true,

   exibirInfos: function(){

    console.log(this.nome,this.email)

   }





}


const admin = {
   nome: "Alexandre",
   email: "a@a.com",
   nascimento:"2021/01/01",
   role: "admin",
  

   criarCurso(){

     console.log("Curso criado");

   }

 



}

//herdando propriedades e metodos de outros objetos.
Object.setPrototypeOf(admin,user)


admin.criarCurso()
admin.exibirInfos()
