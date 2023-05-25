
function calcularIdade() {
    let dataNasc = Date.parse(document.getElementById("nasc").value)
    let diferencaEntreDatas = Date.now() - dataNasc.getTime()
    let idade = new Date(diferencaEntreDatas)
    let anosCompletos = idade.getUTCFullYear() - 1970
    document.getElementById("resp").innerHTML = idade;
}