// debut
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next_button");
let displayContainer = document.getElementById("display_container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user_score");
let startButton = document.getElementById("start_button");
let timeLeft = document.querySelector(".time_left");
let countOfQuestion = document.querySelector(".number_of_question");
let scoreContainer = document.querySelector("score_container");
let startScreen = document.querySelector(".start_screen");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// Questions et option

const quizzArray = [
  {
    id: "0",
    question: "Qui est le plus beau ?",
    options: ["caleb", "Axel", "theresia", "Alfio"],
    correct: "Alfio",
  },
  {
    id: "1",
    question: "Qui est le plus fort ?",
    options: ["caleb", "Axel", "theresia", "Alfio"],
    correct: "caleb",
  },
  {
    id: "2",
    question: "Qui est le plus intelligent ?",
    options: ["caleb", "Axel", "theresia", "Alfio"],
    correct: "Axel",
  },
  {
    id: "3",
    question: "Qui est la plus belle ?",
    options: ["caleb", "Axel", "theresia", "Alfio"],
    correct: "theresia",
  },
];

// Recommencer le quizz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

// Button suivant
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    if (questionCount == quizzArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Votre score est" + scoreCount + " sur " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " sur " + quizzArray.length + "questions";
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

// Compteur
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count === 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

// Afficher le quizz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container_mid");

  // cacher les autres cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });

  quizCards[questionCount].classList.remove("hide");
};

const quizCreator = () => {
  // Questions aleatoire
  quizzArray.sort(() => Math.random() - 0.5);

  // generation du quiz
  for (let i of quizzArray) {
    // Options aleatoire
    i.options.sort(() => Math.random() - 0.5);

    // Creation de card des questions
    let div = document.createElement("div");
    div.classList.add("container_mid", "hide");

    // Nombre de question
    countOfQuestion.innerHTML = 1 + " à " + quizzArray.length + " Questions";

    // Questions
    let question_div = document.createElement("p");
    question_div.innerHTML = i.question;
    div.appendChild(question_div);

    // options
    div.innerHTML += `
    <button class="option_div" onclick="checker(this)">${i.options[0]}</button>
    <button class="option_div" onclick="checker(this)">${i.options[1]}</button>
    <button class="option_div" onclick="checker(this)">${i.options[2]}</button>
    <button class="option_div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
};

// Verification des options si bonne ou mauvaise
const checker = (userOption) => {
  let userSolution = userOption.innertText;
  let question =
    document.getElementsByClassName("container_mid")[questionCount];
  let options = question.querySelectorAll(".option_div");

  // si on click est c'est la bonne reponse le mettre dans un objet
  if (userSolution === quizzArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    // pour afficher la bonne reponse
    options.forEach((element) => {
      if (element.innertText == quizzArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
};

// Initialisation
const initial = () => {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
};

// Quand on clique sur le bouton debuter
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

// Cacher les questions au debut
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
