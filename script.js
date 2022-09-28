var carta1 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: "https://www.pngmart.com/files/12/Star-Wars-Darth-Vader-PNG-HD.png",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem:
    "http://2.bp.blogspot.com/-AIu4hOl_azQ/Udx3-E71ljI/AAAAAAAAALI/jxz6bw1xRno/s1600/Shiryu_3_cloth.png",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

//sorteia uma carta para a maquina e outra para o jogador
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length); //numero indice aleatório até posição total de cartas
  cartaMaquina = cartas[numeroCartaMaquina]; //carta sorteada para a maquina
  console.log("Carta da Máquina:");
  console.log(cartaMaquina); //mostra no console pra poder testar e saber se está tudo certo com o código

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador]; //carta sorteada para o jogador
  console.log("Carta do Jogador:");
  console.log(cartaJogador); //mostra no console pra poder testar e saber se está tudo certo com o código

  document.getElementById("btnSortear").disabled = true; //desabilita o botão sortear
  document.getElementById("btnJogar").disabled = false; //habilita o botão jogar

  //exibirOpcoes();
  exibirCartaJogador();
}

//exibite na tela as opções dos atributos
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  //percorre todas os atributos que existem dentro da carta do Jogador e exibe na tela
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type= 'radio' name='atributo' value= '" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

//define qual atributo foi escolhido pelo jogador
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  //percorre todos os atributos para ver qual foi clicado
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value; //retorna o atributo clicado
    }
  }
  alert("Escolha um atributo para jogar"); //alert para quando não escolher nenhum atributo
}

//inicia o jogo
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado(); //inicia a função e armazena em atributoSelecionado
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]; //atributo da carta sorteada
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]; //atributo da carta sorteada
  //console.log(cartaJogador.atributos[atributoSelecionado]);
  //console.log(cartaMaquina.atributos[atributoSelecionado]);

  //condições para exibir os resultados do jogo
  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class ='resultado-final'>Você venceu!</p>";
    document.getElementById("btnNovaRodada").disabled = false; //habilita o botão iniciar nova rodada
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class ='resultado-final'>Você perdeu!</p>";
    document.getElementById("btnNovaRodada").disabled = false; //habilita o botão iniciar nova rodada
  } else if (valorCartaMaquina == undefined || valorCartaJogador == undefined) {
    return;
  } else {
    htmlResultado = "<p class ='resultado-final'>Empate!</p>";
    document.getElementById("btnNovaRodada").disabled = false; //habilita o botão iniciar nova rodada
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

//inicia nova rodada
function iniciarNovaRodada() {
  document.getElementById("btnSortear").disabled = false; //habilita o botão sortear
  document.getElementById("btnJogar").disabled = true; // desabilita o botão jogar
  document.getElementById("btnNovaRodada").disabled = true; //desabilita o botão jogar
  var elementoResultado = document.getElementById("resultado");
  var divCartaJogador = document.getElementById("carta-jogador");
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  //limpa a div que apresenta as opções na tela
  opcoes.innerHTML = "";

  //limpa a div que apresenta as mensagens do resultado ma tela
  elementoResultado.innerHTML = "";

  //limpa a imagem da carta do jogador na tela
  divCartaJogador.style.backgroundImage = `url(${""})`;

  //limpa a imagem da carta da maquina na tela
  divCartaMaquina.style.backgroundImage = `url(${""})`;

  //limpa o nome do jogador que aparece na tela e exibe a moldura
  var nome = `<p class = "carta-subtitle">${""}</p>`;
  divCartaJogador.innerHTML = nome + moldura;

  //limpa o nome da carta da maquina que aparece na tela e exibe a moldura
  var nome = `<p class = "carta-subtitle">${""}</p>`;
  divCartaMaquina.innerHTML = nome + moldura;
}

//mostra a carta sorteada do jogador
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //alterando o backgroundImage do CSS
  //divCartaJogador.style.backgroundImage = "url("+ cartaJogador.imagem + ")" //mesma coisa que o código acima
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  //percorre todas os atributos que existem dentro da carta do Jogador e exibe na tela
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type= 'radio' name='atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

//mostra a carta sorteada da maquina
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //alterando o backgroundImage do CSS
  //divCartaMaquina.style.backgroundImage = "url("+ cartaMaquina.imagem + ")" //mesma coisa que o código acima
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  //percorre todas os atributos que existem dentro da carta do Jogador e exibe na tela
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type= 'text' name='atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}