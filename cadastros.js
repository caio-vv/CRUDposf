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

const modelo = (id) => {
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
        let usuario 
        if (id != undefined) {
            usuario = {
                nome,
                email,
                teleones,
                id,
            }
           
        }else {
        usuario = {
            nome,
            email,
            telefones,
            id: ultimoID,
        }
        ultimoID++
    }
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
        usuario.telefones.forEach((telefone, indice) => {
            console.log(`telefone ${indice + 1} ${telefone}`)
        })
    })
}

const atualizar = () => {
    ler()
    const id = prompt("digite id")
    const novo = modelo(id)
    usuarios.forEach((usuario, indice) => {
        if(id == usuario.id){
        usuarios[indice] = novo
        }
    })
}

const remover = () => {
    ler()

    const id = prompt("digite id")
    usuarios.forEach((usuario, indice) => {
        if(id == usuario.id){
            const confirma = prompt("deseja remover? s para sim")
            if (confirma == "s"){
                usuarios.splice(indice, 1)
                console.log("USUARIO REMOVIDO")
            }
        }
       
    })
}

module.exports = {criar, modelo, ler, atualizar, remover}