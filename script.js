var alunos = []

var alunoAlterado = null



function adicionar() {
    document.getElementById("ra").disabled = false
    alunoAlterado = null
    mostrarModal()
    limparform()
}
function alterar(ra) {
    //
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        if (aluno.ra == ra) {
            document.getElementById("ra").value = aluno.ra
            document.getElementById("nome").value = aluno.nome
            document.getElementById("estado").value = aluno.estado
            document.getElementById("cidade").value = aluno.cidade
            document.getElementById("curso").value = aluno.curso
            document.getElementById("telefone").value = aluno.telefone
            document.getElementById("nomedogato").value = aluno.nomedogato

            alunoAlterado = aluno
        }

    }
    document.getElementById("ra").disabled = true
    mostrarModal()
}
function excluir(ra) {
    if (confirm("Você deseja realmente excluir?")) {
   
        for (let i = 0; i < alunos.length; i++) {
            let aluno = alunos[i]
            if(aluno.ra == ra){
                alunos.splice(i,1)
            }

        }
    }
    exibirDados()
}


function mostrarModal() {
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
}
function ocultarModal() {
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}
function cancelar() {
    ocultarModal()
    limparform()

}
function salvar() {
    let ra = document.getElementById("ra").value
    let nome = document.getElementById("nome").value
    let estado = document.getElementById("estado").value
    let cidade = document.getElementById("cidade").value
    let curso = document.getElementById("curso").value
    let telefone = document.getElementById("telefone").value
    let nomedogato= document.getElementById("nomedogato").value


    if (alunoAlterado == null) {
        let aluno = {
            "ra": ra,
            "nome": nome,
            "estado": estado,
            "cidade": cidade,
            "curso": curso,
            "telefone": telefone,
            "nomedogato": nomedogato

        }
        alunos.push(aluno)
    }else{
        alunoAlterado.ra = ra
        alunoAlterado.nome = nome
        alunoAlterado.estado = estado
        alunoAlterado.cidade = cidade
        alunoAlterado.curso = curso
        alunoAlterado.telefone = telefone
        alunoAlterado.nomedogato = nomedogato
        
    }
    alunoAlterado = null
    limparform()
    ocultarModal()
    exibirDados()
}
function exibirDados() {
    let tbody = document.querySelector("#table-customers tbody")
    //antes de listar os clientes, limpa todas as linhas
    tbody.innerHTML = ""
    for (let i = 0; i < alunos.length; i++) {
        let linha = `
        <tr>
            <td>${alunos[i].ra}</td>
            <td>${alunos[i].nome}</td>
            <td>${alunos[i].estado}</td>
            <td>${alunos[i].cidade}</td>
            <td>${alunos[i].curso}</td>
            <td>${alunos[i].telefone}</td>
            <td>${alunos[i].nomedogato}</td>
            <td>
                <button onclick="alterar('${alunos[i].ra}')">Alterar</button>
                <button onclick="excluir('${alunos[i].ra}')" class="botão-excluir">Excluir</button>
            </td>
        </tr>`
        let tr = document.createElement("tr")
        tr.innerHTML = linha
        tbody.appendChild(tr)
    }
}
function limparform() {
    document.getElementById("ra").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("curso").value = ""
    document.getElementById("telefone").value = ""
    document.getElementById("nomedogato").value = ""

}