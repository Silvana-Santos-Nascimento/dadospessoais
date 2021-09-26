function validar() {
    if(document.getElementById("nome").value.length == 0) {
        alert("Nome vazio!")
        return false;
    }
    else if(document.getElementById("cpf").value.length == 0) {
        alert("CPF vazio!")
        return false;
    }
    else if(document.getElementById("logradouro").value.length == 0) {
        alert("Logradouro vazio!")
        return false;
    }
    else if(document.getElementById("numero").value.length == 0) {
        alert("Número vazio!")
        return false;
    }
    else if(document.getElementById("celular").value.length == 0) {
        alert("Celular vazio!")
        return false;
    }
    alert("Cadastro efetuado com sucesso!")
    return true;
}