const formTabela = document.querySelector("#form-container")
let linhas = ""

formTabela.addEventListener("submit", function(e) {
    e.preventDefault()
    adicionarLinha()
    tableCorpo()
})

function adicionarLinha() {

    const linhaNome = document.querySelector('#name')
    const linhaContato =  document.querySelector("#conctat")

    let linha = "<tr>";
    linha += `<td>${linhaNome.value}</td>`
    linha += `<td>${linhaContato.value}</td>`
    linha += "</tr>"

    linhas += linha;

    linhaNome.value = "";
    linhaContato.value = "";

}

function tableCorpo() {

    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas;
}