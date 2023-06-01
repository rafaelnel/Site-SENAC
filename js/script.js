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
    document.getElementById("aviso1").innerHTML = null;
    document.getElementById("aviso2").innerHTML = null;
    document.getElementById("aviso1").classList.remove("avisocor2");
    document.getElementById("aviso2").classList.remove("avisocor2");
    document.getElementById("avisoc").classList.remove("avisocor1");
    document.getElementById("avisoc").classList.remove("avisocor2");


    if (rendapcap <= 1980 && anosCompletos >= 16) {
        document.getElementById("avisoc").innerHTML = "Sua inscrição pode ser realizada. Entre em contato pelo número. (99) 99999-9999";
        document.getElementById("avisoc").classList.add("avisocor1");


    } else {
        document.getElementById("avisoc").innerHTML = "Sua inscrição não pode ser realizada.";
        document.getElementById("avisoc").classList.add("avisocor2");
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


function media() {
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);
    let med = (n1 + n2 + n3) / 3;
    return med;
}


function frequencia() {
    let f1 = parseFloat(document.querySelector('input[name="dia1"]:checked').value);
    let f2 = parseFloat(document.querySelector('input[name="dia2"]:checked').value);
    let f3 = parseFloat(document.querySelector('input[name="dia3"]:checked').value);
    let f4 = parseFloat(document.querySelector('input[name="dia4"]:checked').value);
    let f5 = parseFloat(document.querySelector('input[name="dia5"]:checked').value);
    let f6 = parseFloat(document.querySelector('input[name="dia6"]:checked').value);
    let f7 = parseFloat(document.querySelector('input[name="dia7"]:checked').value);
    let f8 = parseFloat(document.querySelector('input[name="dia8"]:checked').value);
    let f9 = parseFloat(document.querySelector('input[name="dia9"]:checked').value);
    let f10 = parseFloat(document.querySelector('input[name="dia10"]:checked').value);
    let f11 = parseFloat(document.querySelector('input[name="dia11"]:checked').value);
    let f12 = parseFloat(document.querySelector('input[name="dia12"]:checked').value);
    let freq = (f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9 + f10 + f11 + f12) / 12;
    console.log(freq);

    return freq;

}


function VerificaAprovacao() {
    let m = media();
    let f = frequencia();

    document.getElementById("result").classList.remove("aprov");
    document.getElementById("result").classList.remove("reprov");
    document.getElementById("result").classList.remove("recup");

    if (m >= 6 && f >= 0.75) {
        document.getElementById("result").innerHTML = "Aprovado";
        document.getElementById("result").classList.add("aprov");

    } else if (m < 5 || f < 0.75) {
        document.getElementById("result").innerHTML = "Reprovado";
        document.getElementById("result").classList.add("reprov");

    } else {
        document.getElementById("result").innerHTML = "Recuperação";
        document.getElementById("result").classList.add("recup");


    }
}


function Mudarnav() {
    let a = document.querySelectorAll("a.aheader");
    let icon = document.getElementById("hamb");
    let display = window.getComputedStyle(icon).display;

    if (display == "none") {
        a.forEach(el => el.classList.add("mudaa"));
        let img = document.querySelectorAll("img.imglogo");
        img.forEach(el => el.src = "../img/logo-senac-negative.png");
        document.getElementById("imglogohome").src = "img/logo-senac-negative.png";
        document.getElementById("header").style.backgroundColor = "#F29100";
    }

}


function Voltarnav() {
    let a = document.querySelectorAll("a.aheader");
    let icon = document.getElementById("hamb");
    let display = window.getComputedStyle(icon).display;

    if (display == "none") {
        a.forEach(el => el.classList.remove("mudaa"));
        let img = document.querySelectorAll("img.imglogo");
        img.forEach(el => el.src = "../img/logo.png");
        document.getElementById("imglogohome").src = "img/logo.png";
        document.getElementById("header").style.backgroundColor = "white";
    }
}

function Navmobile() {
    let x = document.getElementById("topnav");
    let header = document.getElementById("header");
    if (x.style.display === "block") {
        x.style.display = "none";
        header.style.height = "100px";
        document.getElementById("imgmenu").src = "img/menu.png";
        document.getElementById("imglogohome").src = "img/logo.png";
        document.getElementById("header").style.backgroundColor = "white";

    } else {
        x.style.display = "block";
        header.style.height = "600px";
        document.getElementById("imgmenu").src = "img/sair.png";
        document.getElementById("imglogohome").src = "img/logo-senac-negative.png";
        document.getElementById("header").style.backgroundColor = "#F29100";
    }

}

function Reduzirmenu() {
    let icon = document.getElementById("hamb");
    let display = window.getComputedStyle(icon).display;

    if (display == "block") {
        let x = document.getElementById("topnav");
        let header = document.getElementById("header");
        x.style.display = "none";
        header.style.height = "100px";
        document.getElementById("imgmenu").src = "img/menu.png";
        document.getElementById("imglogohome").src = "img/logo.png";
        document.getElementById("header").style.backgroundColor = "white";
    }
}
