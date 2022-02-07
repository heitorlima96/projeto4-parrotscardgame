let NumeroDeCartas = null;

function selectGame() {
  while (
    NumeroDeCartas > 14 ||
    NumeroDeCartas < 4 ||
    NumeroDeCartas % 2 !== 0
  ) {
    NumeroDeCartas = prompt("Quantas cartas? (Apenas pares de 4 a 14)");
  }
}

selectGame();

function comparador() {
  return Math.random() - 0.5;
}

function DistribuicaoDeCartas() {
  const gifs = document.querySelectorAll(".gifs img");
  let main = document.querySelector("main");
  let card = document.querySelector(".card");
  let cardBack = document.querySelector(".card-back");

  main.innerHTML = "";

  for (let i = 0; i < NumeroDeCartas / 2; i++) {
    cardBack.innerHTML = "";
    cardBack.appendChild(gifs[i]);
    main.appendChild(card.cloneNode(true));
    main.appendChild(card.cloneNode(true));
  }

  let newMain = document.querySelectorAll(".card");
  newMain = Array.from(newMain);
  newMain.sort(comparador);

  main.innerHTML = "";

  for (let j = 0; j < NumeroDeCartas; j++) {
    main.appendChild(newMain[j].cloneNode(true));
  }
}

DistribuicaoDeCartas();

let CartasViradas = [];

let NumeroDeCartasParaBaixo = 0;

let NumedoDeCartasParaCima = 0;

let gameTime = 0;

const interval = setInterval(() => {
  gameTime++;

  const counter = document.querySelector(".game-time");
  counter.innerHTML = gameTime;
}, 1000);

function flipCard(card) {
  if (!card.classList.contains("flip")) {
    CartasViradas.push(card);
    card.classList.add("flip");
  } else {
  }

  compareCards();
}

function compareCards() {
  const lastFlipedCard = CartasViradas[CartasViradas.length - 1];
  const penultFlipedCard = CartasViradas[CartasViradas.length - 2];

  if (CartasViradas.length % 2 === 0) {
    setTimeout(() => {
      if (!lastFlipedCard.isEqualNode(penultFlipedCard)) {
        lastFlipedCard.classList.remove("flip");
        penultFlipedCard.classList.remove("flip");
        NumeroDeCartasParaBaixo += 2;
      } else {
      }

      numberOfFlips = CartasViradas.length;
      NumedoDeCartasParaCima = numberOfFlips - NumeroDeCartasParaBaixo;

      if (NumedoDeCartasParaCima === parseInt(NumeroDeCartas)) {
        alert(`Você ganhou em ${numberOfFlips} jogadas e em ${gameTime}s!`);

        restartGame();
      } else {
      }
    }, 1000);
  } else {
  }
}

function restartGame() {
  while (restartGame !== "sim") {
    const restartGame = prompt("Gostaria de reiniciar a partida? (sim ou nao)");

    if (restartGame === "sim") {
      document.location.reload(true);
      break;
    } else if (restartGame === "nao") {
      clearInterval(interval);
      break;
    } else {
    }
  }
}
// COMENTARIOS
//linha3 tratar da seleçao de cartas
//linha15 comparador
//linha19 tratar da distribuição de cartas
//linha56 fazer o Contador de tempo
//linha64 virar cartas
//linha75 comparar se cartas sao iguais
//linha103 perguntar se ele quer jogar novamente
//olhar exercícios que o prof passou
