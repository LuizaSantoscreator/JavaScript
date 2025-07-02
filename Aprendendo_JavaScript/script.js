//define uma função que será executada quando o botão adicionar tarefa for cliclado
function adicionarTarefa() {
    let mensagemSucesso = "Tarefa adicionada com sucesso!" //guarda o texto que será exibido quando a tarefa for adicionada corretamente
    
    //Realiza o input
    let inputTarefa = document.getElementById("inputTarefa") //pega o elemento do input de texto usando o id="inputTarefa"
    let tarefa = inputTarefa.value//guarda o texto que o usuario digitou no input na variavel tarefa
    let mensagem = document.getElementById("mensagem")

    if (tarefa.trim() === ""){ //essa linha verifica se o conteudo da tarefa está vazio ou só tem espaços em brancos (.trim() ->remove os espaços antes e depois do texto) (==="" -> verifica se, depois de remover os espaços, sobrou nada)
        let mensagemErro = "Digite uma tarefa antes de adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro //se o campo estiver vazio, essa linha mostra a mensagem de erro no paragrafo com id="mensagem"
        return // faz a funçao parar aqui se a tarefa estiver vazia, assim evitando que o código continue e adicione uma lista em branco
    }

    mensagem.textContent = mensagemSucesso; // se a tarefa não estiver vazia essa linha mostra a mensagem de sucesso

    let listaTarefas = document.getElementById("listaTarefas") // aqui você pega o elemento ul da página onde as tarefas vao ser adicionadas
    let novaTarefa = document.createElement("li") //cria um novo elemento da lista, o item ira aparecer 

    novaTarefa.textContent = tarefa //define o texto desse novo item da lista com o valor que usuario digitou

    listaTarefas.appendChild(novaTarefa) //adiciona o li com a tarefa no ul e mostra na tela

    inputTarefa.value = "" // limpa o campo input
}