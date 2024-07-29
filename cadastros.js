const prompt = require('prompt-sync')();

const usuarios = [];
let ultimoID = 1;


const emailValido = email => {
    let valido = true
    usuarios.forEach(usuario => {
        if (email === usuario.email){
            console.log("email duplicado")
            valido = false
        }
    })
    return valido && email != ""
}

const modelo = () => {
    const nome = prompt("digite nome do usuario: ")
    const email = prompt("qual email: ")
    const telefones = []
    while(true){
        const telefone = prompt("digite um numero, ou digite sair pra sair")
        if (telefone == "sair") {
            break
        }
        telefones.push(telefone)
    }

    if (nome!= "" && telefones.length > 0 && emailValido(email)) { 
        const usuario = {
            nome,
            email,
            teleones,
            id: ultimoID,
        }
        ultimoID++
        return usuario
    }
    console.log("os dados sao invalidos")
}

const criar = () => {
    const usuario = modelo()
    if (usuario != undefined){
        usuarios.push(usuario)
    }
}

const ler = () => {
    usuarios.forEach(usuario => {
        console.log(`
        ID? ${usuario.id}
        Nome: ${usuario.nome}
        EMail: ${usuario.email}`)
        console.log("telefones: ")
        usuario.telefones.forEach(telefone => {
            console.log("telefone ${ibduce + 1: ${telefone}")
        })
    })
}