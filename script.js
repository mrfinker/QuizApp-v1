// debut
const quizDisplay = document.getElementById("display");
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

// Questions et options

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
];

const quizCreator = () => {
  // Questions aleatoire
  quizzArray.sort(() => Math.random() - 0.5)

  // generation du quiz
  for(let i of quizzArray){
    // Options aleatoire
    i.options.sort(() => Math.random() - 0.5)

    // Creation de card des questions
    let div = document.createElement('div')
    div.classList.add('container_mid');

    // Nombre de question
    countOfQuestion.innerHTML = 1 + 'à' + quizzArray.length + 'Questions'

    // Questions
    let question_div = document.createElement('p')
    question_div.innerHTML = i.question
  }
}