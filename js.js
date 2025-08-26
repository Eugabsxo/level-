alert ("Olá!. Aproveite a página.");

let visibilidade = false;
function whats() {
    if (visibilidade) {
        document.getElementById("mensagem").style="display: none;"
        visibilidade = false;
    } else {
    document.getElementById("mensagem").style="display: block;"
    visibilidade = true}   
}