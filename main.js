usuarios = ['teste'];
senhas = ['123'];
tipos = ['tec'];


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
function carregaUsuarios() {
    // Essa é a funcao mais dificil do site, entao vou explicar quase linha por linha
    //Isso le o arquivo, mas como nao quero usar funcao assincrona, vou usar o Then
    //oq o Then faz: Ele só faz aquilo que ta nele, DEPOIS de ter feito oq esta antes, sem isso, ele ia "Vou ler o arquivo" e ja ia pra proxima parte
    //Oq ocasionaria de ele tentar executar a proxima parte do codigo sem nem ter retornado com oq foi lá ler no arquivo.

    //Basicamente:
    // var texto = fetch('usuarios.txt'); // Me da o arquivo AGORA
    // console.log(texto); // vai dar Undefined pq o arquivo ainda não deu tempo de ler

    //OBS que descobri só hoje: o fetch nao funciona se não tiver um servidor (o chrome bloqueia de ler o arquivo)...
    //entao tem que usar a extensão Live Server xD
    fetch('./usuarios.txt')
        .then(response => response.text()) //response é oq veio do fetch, aqui ele vai transformar em um texto oq veio do fetch
        .then(texto => {

            // Divide por linhas
            const linhas = texto.split('\n');

            linhas.forEach(linha => {
                linha = linha.trim();

                const partes = linha.split(':');
                const usuario = partes[0].trim();
                const senha = partes[1].trim();
                const tipo = partes[2].trim();

                if (!usuarios.indexOf(usuario)) { //Se não existir no array ainda ele vai colocar
                    //O push ele insere na ultima posicao do array
                    usuarios.push(usuario);
                    senhas.push(senha);
                    tipos.push(tipo);
                }
            });
            return true;
        })
        .catch(error => { //Isso eu vou tirar no final é apenas para me ajudar, menos uma coisa para eu ter q explicar
            console.log("Deu ruim, vai olhar o console");
            return false;
        });
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

function changeAba(click){
    abas = ['banco', 'historico'];
    abas.forEach(aba => {
        var div = document.querySelector("."+aba+"-container");
        if (click == aba) {
            div.style.display = ("block");
        } else {
            div.style.display = ("none");
        }
    });
}

function openNotification(){
    document.getElementsByID("divNotificacao").style.display = ("block");
}