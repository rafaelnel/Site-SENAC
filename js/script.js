
function calcular() {
    const hoje = new Date()
    const nasc = new Date(document.getElementById("nasc").value)
    let anosCompletos = hoje.getFullYear() - nasc.getFullYear()
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        anosCompletos--
    }

    let renda = document.getElementById("renda").value;
    let npessoas = document.getElementById("npessoas").value;

    let rendapcap = renda / npessoas;

    document.getElementById("avisoc").innerHTML = null;
    document.getElementById("aviso1").innerHTML = null; document.getElementById("aviso2").innerHTML = null;
    document.getElementById("aviso1").classList.remove("avisocor2");
    document.getElementById("aviso2").classList.remove("avisocor2");
    document.getElementById("avisoc").classList.remove("avisocor1");


    if (rendapcap <= 1980 && anosCompletos >= 16) {
        document.getElementById("avisoc").innerHTML = "Sua inscrição pode ser feita.";
        document.getElementById("avisoc").classList.add("avisocor1");


    } else {
        if (rendapcap > 1980) {
            document.getElementById("aviso1").innerHTML = "Sua renda é muito alta para o benefício.";
            document.getElementById("aviso1").classList.add("avisocor2");
        }
        if (anosCompletos < 16) {
            document.getElementById("aviso2").innerHTML = "Você não tem idade suficiente.";
            document.getElementById("aviso2").classList.add("avisocor2");
        }
    }

    document.getElementById("nasc").value = null;
    document.getElementById("renda").value = null; document.getElementById("npessoas").value = null;


}
