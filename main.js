const prompt = require('prompt-sync')()
const cadastros = require('./cadastros')
while (true){

    console.log(`
        1 - Criar
        2 - Listar
        3 - Atualizar
        4 - Remover
        5 - Sair
        `);

        const opcao = prompt("qual opcao deseja?")

        switch (opcao){
            case "1":
            cadastros.criar()
                break;
        }
}