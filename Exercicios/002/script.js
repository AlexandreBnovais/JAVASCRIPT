function validarLogin() {
    // Obtém os valores dos campos
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Variável para rastrear se há erros
    let erros = false;

    // Validação do campo email (deve ser um email válido)
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        document.getElementById('erroEmail').innerText = "Email inválido.";
        erros = true;
    } else {
        document.getElementById('erroEmail').innerText = "";
    }

    // Validação do campo senha (não pode estar vazio)
    if (senha === "") {
        document.getElementById('erroSenha').innerText = "Senha é obrigatória.";
        erros = true;
    } else {
        document.getElementById('erroSenha').innerText = "";
    }

    // Se houver erros, não enviar o formulário
    return !erros
}