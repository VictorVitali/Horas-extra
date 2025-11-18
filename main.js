usuarios = ['teste'];
senhas = ['123'];
cargos = ['tec'];


function SelectFiltroDMA(Selected) {
    //VAI PEGAR TODOS OS DO FILTRO E PARA CADA UM REMOVER A CLASSE 'ACTIVE'
    document.querySelectorAll("#filtroDMA .active").forEach(el => el.classList.remove("active"));
    //VAI ADCIONAR ACTIVE NO SELECIONADO
    console.log(Selected);
    document.querySelector("#filtroDMA ." + Selected).classList.add('active');

}
function CriarNotificacao(tipo = "Erro", mensagem = "Função não implementada ainda (Fui jogar lol)") {
    //REMOVE OS TIPOS ANTERIORES(DAVA PRA RETIRAR NO CloseAlert(), MAS ASSIM FICA MAIS FACIL DE EXPLICAR) E ADICIONA O CERTO
    document.getElementById("Alert").classList.remove("Erro");
    document.getElementById("Alert").classList.remove("Sucesso");
    document.getElementById("Alert").classList.add(tipo);
    document.getElementById("Alert").style.display = ("flex");

    //ESCREVE A MSG QUE RECEBEU
    var notificacao = "<span>" + mensagem + "</span> <div onclick='CloseAlert()' class='CloseAlert'> x </div>";
    document.getElementById("ConteudoAlert").innerHTML = notificacao;

    // Depois de 3s (3000ms) vai executar a funcao de fechar o alerta
    setTimeout(CloseAlert, 3000);
}
function CloseAlert() {
    document.getElementById("Alert").style.display = ("none");
}
function criarCadastro(){
    var nome = document.getElementById('emailR').value;
    var senha = document.getElementById('passwordR').value;
    var tipo = document.getElementById("tipoR").value;

    usuarios.push(nome);
    senhas.push(senha);
    cargos.push(tipo);
}

function switchLoginRegistro() {
    var divs = document.getElementsByClassName("login-card");
    console.log('pq ta entrando aqui???');
    for (var i = 0; i < divs.length; i++) { //Faz a funcao igual um forEach, mas aqui usa for, entao vai percorrer X vezes sendo X a quantidade de elementos com esse classe.
        var div = divs[i];
        var displayAtual = div.style.display;     //Pega como está o display desse element
        if (displayAtual == 'none') {             //Se tiver none, vai mostrar
            div.style.display = ("block");
        } else {                                  //Se nao, vai esconder
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