let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const indexChoice = Math.floor(Math.random() * 3);
  return choices[indexChoice];
}
function convert(letter) {
  if (letter === "r") return "Kamień";
  else if (letter === "p") return "Papier";
  else if (letter === "s") return "Nożyce";
}
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML =
    convert(user) + " pokonuje " + convert(computer) + ". WYGRAŁEŚ!";
  document.getElementById(user).classList.add("win-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("win-glow");
  }, 1000);
}
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convert(user) + " przegrywa z " + convert(computer) + ". PRZEGRAŁEŚ!";
  document.getElementById(user).classList.add("lose-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("lose-glow");
  }, 1000);
}
function draw(user, computer) {
  result_p.innerHTML =
    convert(user) + " remisuje z " + convert(computer) + ". REMIS!";
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    default:
      console.log("coś poszło nie tak");
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
