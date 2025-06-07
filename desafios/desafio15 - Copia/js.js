

document.getElementById("meuform").addEventListener("submit", function(event){
    event.preventDefault();
    let emailid = document.getElementById("iemail");
    let senhaid = document.getElementById("isenha");

    let erroEmail = document.getElementById("msgerroe");
    let erroSenha = document.getElementById("msgerros");

    let email = emailid.value.trim();
    let senha = senhaid.value.trim();

    erroEmail.textContent = "";
    erroSenha.textContent = "";

    let verdadeiro = true;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);;

    if(!emailValido){
        erroEmail.textContent = "Email inválido, insira novamente!";
        verdadeiro = false;
    }

    if(senha.length < 6){
        erroSenha.textContent = "A senha deve ao menos 6 caracteres."
        verdadeiro = false;
    }

    if(verdadeiro){
        console.log("Formulário válido, enviando");
    }
} )

