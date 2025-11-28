emails = ['gerente', 'encarregado', 'tecnico'];
senhas = ['123456', '654321', '162534'];
cargos = ['ger', 'enc', 'tec'];

let obras = [
    {
        id: 1,
        descricao: "A obra está atrasada.",
        tecnicos: "João"
    }
];


function CriarNotificacao(tipo = '', mensagem = '') {
    if(mensagem == '' || tipo == ''){
        return;
    }

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

//TELA DE LOGIN / CADASTRO
function criarCadastro() {
    var email = document.getElementById('emailR').value;
    var senha = document.getElementById('passwordR').value;
    var tipo = document.getElementById("tipoR").value;

    if (emails.includes(email)) {
        CriarNotificacao("Error", "Email já registrado");
    } else {
        emails.push(email);
        senhas.push(senha);
        cargos.push(tipo);

        document.getElementById('emailR').value = '';
        document.getElementById('passwordR').value = '';

        switchLoginRegistro();
    }
}
function switchLoginRegistro() {
    var divs = document.getElementsByClassName("login-card");

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

function changeAba(click) {
    abas = ['banco', 'historico', 'solicitar', 'relatorio', 'solicitacoes'];

    abas.forEach(aba => {
        var div = document.querySelector("." + aba + "-container");

        if (!div) {
            return;
        }

        if (click == aba) {
            div.style.display = ("block");
        } else {
            div.style.display = ("none");
        }
    });
}


function openModal(modal) {
    document.getElementById("div" + modal).style.display = ("flex");
}
function fecharModal(modal) {
    document.querySelectorAll('.modal-' + modal).forEach(modal => {
        modal.style.display = 'none';
    });
}


function SelectFiltroDMA(Selected) {
    document.querySelectorAll("#filtroDMA .active").forEach(el => el.classList.remove("active"));
    document.querySelector("#filtroDMA ." + Selected).classList.add('active');
}


function logout(){
    window.location.href = "../index.html";
}


function carregarObras(id) {
    var carregado = obras.find(obra => obra.id == id);

    if (!carregado) {
        obras.push({id: id, descricao: "", tecnicos: ""});
        document.getElementById("descTextarea").value = "";
        document.getElementById("tecTextarea").value = "";
        document.getElementById("obraIdHidden").value = id;
    }else{
        document.getElementById("descTextarea").value = carregado.descricao;
        document.getElementById("tecTextarea").value = carregado.tecnicos;
        document.getElementById("obraIdHidden").value = carregado.id;
    }

}


function saveObra(){
    var descricao = document.getElementById("descTextarea").value;
    var tecnicos = document.getElementById("tecTextarea").value;
    var id = document.getElementById("obraIdHidden").value;

    var carregado = obras.find(obra => obra.id == id);

    carregado.descricao = descricao;
    carregado.tecnicos = tecnicos;
}

function excluirObra() {
    var id = document.getElementById("obraIdHidden").value;
    obras = obras.filter(obra => obra.id != id);
}