const prompt = require("prompt-sync")();
const jogos = [];

const nomeInvalido = nome  => nome == "" || nome.includes()

const indiceInvalido = indice => indice < 0 || indice >= jogos.length || isNaN(indice)

const mensagem = () => {
  console.log(`
    1. Criar jogo
    2. Atualizar jogo.
    3. Remover jogo.
    4. Listar jogo
    `);
  };
  
  const criar = () => {
    jogos.push(modelo())
    console.log("Jogo adicionado com sucesso.");
  };

  const atualizar = () => {
    while (true) {
      if (jogos.length == 0) {
        console.log("Lista de jogos vázia");
        break
      }

      const indice = parseInt(prompt("Qual é o indice que você deseja atualizar?"))
      if(indiceInvalido(indice)){
        console.log("Indice inválido")
      }else {
        const jogo = modelo()
        jogos[indice] = jogo
        break
      }
    }
  };
  
  const listagem = () => {
    jogos.forEach((jogo, i) => {
      console.log(
        `${i + 1} - ${jogo.nome} - ${jogo.ano} - ${jogo.duracao} - ${
          jogo.preco
        } - ${jogo.estudio} - ${jogo.sequencia}`
      );
    });
  };


  ///////////// Modelação de jogo.
const modelo = () => {
  let jogo;
  while (true) {
    jogo.nome = prompt("Qual é o nome do jogo? ");
    if (nomeInvalido(jogo.nome)) {
      console.log("O nome não pode ser vázio");
    } else {
      break;
    }
  }

  while (true) {
    if (jogos.length == 0) {
      jogo.sequencia = undefined;
      break;
    }
  }

  while (true) {
    jogo.ano = parseInt(prompt("Qual é o ano do jogo? "));
    if (jogo.ano < 1958 && jogo.ano > 2024) {
      console.log("O ano é inválido");
    } else {
      break;
    }
  }

  while (true) {
    jogo.duracao = +prompt("Qual é o duracao do jogo? ").replaceAll(",", ".");
    if (jogo.duracao <= 0 && isNaN(jogo.duracao)) {
      console.log("A duracao é inválida");
    } else {
      break;
    }
  }

  while (true) {
    jogo.preco = +prompt("Qual é o preco do jogo? ").replaceAll(",", ".");
    if (jogo.preco != 0 && isNaN(jogo.preco)) {
      console.log("A preço é inválido!");
    } else {
      break;
    }
  }

  while (true) {
    jogo.estudio = prompt("Qual é o estudio do jogo? ");
    if (nomeInvalido(jogo.nome)) {
      console.log("O estudio não pode ser vázio");
    } else {
      break;
    }
  }

  while (true) {
    if (jogos.length == 0) {
      jogo.sequencia = undefined;
      break;
    }

    // jogo.forEach((el, i) => {
    //   if (el.nome == jogo.sequencia) {
    //     jogo.sequencia = i;
    //     return;
    //   }
    // });
  return jogo;
  }
};

modelo()