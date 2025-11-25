emails = ['gerente','encarregado', 'tecnico'];
senhas = ['123456', '654321', '162534'];
cargos = ['ger','enc','tec'];


function SelectFiltroDMA(Selected) {
    document.querySelectorAll("#filtroDMA .active").forEach(el => el.classList.remove("active"));
    document.querySelector("#filtroDMA ." + Selected).classList.add('active');

}
function CriarNotificacao(tipo = "Erro", mensagem = "Função não implementada ainda (Fui jogar lol)") {
    document.getElementById("Alert").classList.remove("Erro");
    document.getElementById("Alert").classList.remove("Sucesso");
    document.getElementById("Alert").classList.add(tipo);
    document.getElementById("Alert").style.display = ("flex");

    var notificacao = "<span>" + mensagem + "</span> <div onclick='CloseAlert()' class='CloseAlert'> x </div>";
    document.getElementById("ConteudoAlert").innerHTML = notificacao;

    setTimeout(CloseAlert, 2000);
}
function CloseAlert() {
    document.getElementById("Alert").style.display = ("none");
}
function criarCadastro(){
    var email = document.getElementById('emailR').value;
    var senha = document.getElementById('passwordR').value;
    var tipo = document.getElementById("tipoR").value;

    if(emails.includes(email)){
        CriarNotificacao("Error", "Email já registrado");
    }else{
        emails.push(email);
        senhas.push(senha);
        cargos.push(tipo);
    }
}

function switchLoginRegistro() {
    var divs = document.getElementsByClassName("login-card");
    console.log('pq ta entrando aqui???');
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var displayAtual = div.style.display; 
        if (displayAtual == 'none') {
            div.style.display = ("block");
        } else {
            div.style.display = ("none");
        }
    };
}

function changeAba(click){
    abas = ['banco', 'historico', 'solicitar', 'pedidos', 'relatorio'];
    abas.forEach(aba => {
        var div = document.querySelector("."+aba+"-container");
        if (click == aba) {
            div.style.display = ("block");
        } else {
            div.style.display = ("none");
        }
    });
}

function openModal(modal){
    document.getElementById("div"+modal).style.display = ("flex");
}

function fecharModal(modal) {
    document.querySelectorAll('.modal-'+modal).forEach(modal => {
        modal.style.display = 'none';
    });
}