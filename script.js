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
    id: "1",
    question: "Qui est le plus intelligent ?",
    options: ["caleb", "Axel", "theresia", "Alfio"],
    correct: "Axel",
  },
];
