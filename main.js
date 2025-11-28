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
    //REMOVE OS TIPOS ANTERIORES(DAVA PRA RETIRAR NO CloseAlert(), MAS ASSIM FICA MAIS FACIL DE EXPLICAR) E ADICIONA O CERTO
    document.getElementById("Alert").classList.remove("Erro");
    document.getElementById("Alert").classList.remove("Sucesso");
    document.getElementById("Alert").classList.add(tipo);
    document.getElementById("Alert").style.display = ("flex");

    //ESCREVE A MSG QUE RECEBEU
    var notificacao = "<span>" + mensagem + "</span> <div onclick='CloseAlert()' class='CloseAlert'> x </div>";
    document.getElementById("ConteudoAlert").innerHTML = notificacao;

    // Depois de 2s (2000ms) vai executar a funcao de fechar o alerta automaticamente
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

        //LIMPAR OS CAMPOS, NAO É OBRIGATORIO, MAS FICA BOM
        document.getElementById('emailR').value = '';
        document.getElementById('passwordR').value = '';

        //VOLTAR PARA A TELA DE LOGIN
        switchLoginRegistro();
    }
}
function switchLoginRegistro() {
    var divs = document.getElementsByClassName("login-card");

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

//FUNCAO QUE TROCA DE ABA AO CLICAR NA BARRA LATERAL
function changeAba(click) {
    abas = ['banco', 'historico', 'solicitar', 'relatorio'];
    //PARA CADA ABA ELE VAI ESCONDER OU MOSTRAR ELAS.
    abas.forEach(aba => {
        var div = document.querySelector("." + aba + "-container");

        if (!div) {
            return;
        }

        if (click == aba) {
            div.style.display = ("block"); //QUANDO FOR A ABA CLICADA, EM VEZ DE ESCONDER ELE VAI MOSTRAR
        } else {
            div.style.display = ("none"); //QUANDO FOR QUALQUER OUTRA ABA, ELE VAI ESCONDER
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
    //VAI PEGAR TODOS OS DO FILTRO E PARA CADA UM REMOVER A CLASSE 'ACTIVE'
    document.querySelectorAll("#filtroDMA .active").forEach(el => el.classList.remove("active"));
    //VAI ADCIONAR ACTIVE NO SELECIONADO
    document.querySelector("#filtroDMA ." + Selected).classList.add('active');
}


function logout(){
    window.location.href = "../index.html";
}


function carregarObras(id) {
    var carregado = obras.find(obra => obra.id == id);

    if (!carregado) {
        obras.push({id: id, descricao: "", tecnicos: ""});
    }

    document.getElementById("descTextarea").value = carregado.descricao;
    document.getElementById("tecTextarea").value = carregado.tecnicos;
    document.getElementById("obraIdHidden").value = carregado.id;
}


function saveObra(){
    var descricao = document.getElementById("descTextarea").value;
    var tecnicos = document.getElementById("tecTextarea").value;
    var id = document.getElementById("obraIdHidden").value;

    var carregado = obras.find(obra => obra.id == id);

    carregado.descricao = descricao;
    carregado.tecnicos = tecnicos;
}