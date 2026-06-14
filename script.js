document.addEventListener('DOMContentLoaded', ()=>{
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  //all questions
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "Which language is used for web page styling?",
      choices: ["HTML", "CSS", "Java", "Python"],
      answer: "CSS",
    },
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which company developed JavaScript?",
      choices: ["Microsoft", "Netscape", "Google", "Oracle"],
      answer: "Netscape",
    },
    {
      question: "What is 12 × 8?",
      choices: ["86", "96", "108", "88"],
      answer: "96",
    },
    {
      question: "Which country is famous for the Taj Mahal?",
      choices: ["India", "China", "Japan", "Thailand"],
      answer: "India",
    },
    {
      question: "Which is the smallest prime number?",
      choices: ["0", "1", "2", "3"],
      answer: "2",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      choices: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "Which CSS property changes text color?",
      choices: ["font-color", "text-color", "color", "background-color"],
      answer: "color",
    },
    {
      question: "What does JS stand for?",
      choices: ["Java Source", "JavaScript", "Just Script", "JSON Script"],
      answer: "JavaScript",
    },
    {
      question:
        "Which method is used to print something in the browser console?",
      choices: ["console.log()", "print()", "document.write()", "alert.log()"],
      answer: "console.log()",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      choices: ["<!-- -->", "#", "//", "/* */"],
      answer: "//",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = "";

  //when start btn clicked then what happens
  startBtn.addEventListener("click", startQuiz);

  //when next btn clicked then what happens
  nextBtn.addEventListener("click", nextQuestion);

  //after totalScore restart the quiz
  restartBtn.addEventListener("click", restartQuiz)

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {

    selectedAnswer = ""
    nextBtn.classList.add("hidden");

    //that's how i get questions from array from 0th index
    questionText.textContent = questions[currentQuestionIndex].question;

    //clear previous choices
    choicesList.innerHTML = "";

    questions[currentQuestionIndex].choices.forEach((choice) => {
      //create choices list (answer optins)
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice, li));

      //append
      choicesList.appendChild(li);
    });
  }

  //when we select answer
  function selectAnswer(choice, selectLi) {
    selectedAnswer = choice;

    //remove selected class from all choices
    document.querySelectorAll("#choices-list li").forEach((li) => {
      li.classList.remove("selected");
    });

    //add selected class to clicked choice
    selectLi.classList.add("selected");

    //show next button
    nextBtn.classList.remove("hidden");
  }

  function nextQuestion(){

    if(selectedAnswer === questions[currentQuestionIndex].answer){
        score++
    }
    currentQuestionIndex++

    //when to show nextQuestion or result
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showResult()
    }
  }

  //result function
  function showResult(){
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden")

    scoreDisplay.textContent = `${score} / ${questions.length}`
  }

  function restartQuiz(){

    //declared all variables to 0 currentQuestionIndex equal to from
      currentQuestionIndex = 0;
      score = 0;
      selectedAnswer = "";

     resultContainer.classList.add("hidden")
     startBtn.classList.remove("hidden")
  }
})