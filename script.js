//Função para adicionar uma nova linha na tabela
function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let nota = document.getElementById('notaFinal').value
    let table = document.getElementById("myTable");



//Formata a data para o padrão brasileiro   
    var dataInput = dataNascimento;
    data = new Date(dataInput);
    dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    if(nome != "" && email != "" && telefone != "") { //valida se os dados foram preenchidos
        var row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
        var cell1 = row.insertCell(0); //Inserindo as celulas da linha
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        alert('Aluno "' + nome + '" cadastrado com sucesso!')
    } else {
        alert('ERRO, PREENCHA TODOS OS CAMPOS')
        return false
    }

    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover Aluno</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = nome;
    cell3.innerHTML = email;
    cell4.innerHTML = telefone;
    cell5.innerHTML = dataFormatada;
    cell6.innerHTML = nota;
    cell7.innerHTML = btnCode;

    //Limpando os campos de inserção de dados
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('dataNascimento').value = "";
    document.getElementById('notaFinal').value = "";
    //Retornando 'false' para impedir o reload da pagina
    return false;


}

//Função para remover uma linha
function removeToTable(id){
    if(confirm("Tem certeza que deseja apagar esse aluno?")) {
        let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
        row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
        row.parentNode.removeChild(row); //Removendo a linha
    }
    //Retornando 'false' para impedir o reload da pagina
    return false;
}




