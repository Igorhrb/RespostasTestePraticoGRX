var pessoas, index;

function cadastroPessoa(nome, idade){
    pessoas = document.getElementById("tbPessoas");
    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellIdade = linha.insertCell(2);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellIdade.innerHTML = idade;
    
    preencheCamposForm();
}

function altPessoa(nome, idade) {

    pessoas.rows[index].cells[1].innerHTML = nome;
    pessoas.rows[index].cells[2].innerHTML = idade;
}

function preencheCamposForm() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    {
        pessoas.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtIdade").value = pessoas.rows[index].cells[2].innerText;
            

        }
    }
}

function delRegistro() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    {
        if (index == i) {
            pessoas.deleteRow(index);
            return;
        }
    }
}

