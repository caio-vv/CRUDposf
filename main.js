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
                case "2":
                    cadastros.ler()
                    break;
                    case "3":
                        cadastros.atualizar()
                        break;
                        case "4":
                            cadastros.remover()
                            break;
                            case "5":
                                process.exit()
                                break;
        }
}