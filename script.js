function outraMensagem() {
    document.write ("Outro exemplo!")
}

// Caixas de mensagem
//alert
//alert ("Estou usando o alert!");

//prompt
//prompt ("Quer um prompt?");

let nome = prompt ("Qual é o seu nome?");
document.write(nome + ", seja bem vindo!");


//confirm("Eu sou lindo");
//confirm
function confirma() {
    let opcao = confirm ("Deseja confirmar?");
    document.write ("Sua escolha foi: " + opcao);
}



