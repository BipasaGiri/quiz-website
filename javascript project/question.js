
const questions = [
    {
      question: "1.What is the capital of Odisha?",
      options: ["Anugul", "Bhadrak", "Bhubaneswar", "Balasore"],
      answer: 2,
    },
    {
      question: "2.Which is the famous temple in Odisha?",
      options:  ["Jagannath Temple","Konark Temple","Lingraj Temple","Laxmi Temple"],
      answer: 0,
    },
    {
      question: "3.What is the old name of Odisha?",
      options: ["Udhiti", "Marag", "Kalinga", "Utkal"],
      answer: 2,
    },
    {
      question: "4.What is the biggest district of Odisha ?",
      options: ["Balasore", "Mayurbhanj", "Cuttack", "Jajpur"],
      answer: 1,
    },
    {
      question: "5.Which king build the Konark Temple in odisha? ",
      options: ["Anantavarman", "Harishchandra", "Narasimhadeva", "Dasharath"],
      answer: 2,
    },
    {
      question: "6.Who is the first odisha international cricket player?",
      options: ["Debasish Mohanty","Rajib Biswal","Shiv sundar Das","Aditya Behera"],
      answer: 0,
    },
    {
      question: "7.Simlipal national park is located in which district of odisha?",
      options: ["Kalahandi", "Nuapada", "Cuttack", "Mayurbhanj"],
      answer: 3,
    },
    {
      question: "8.How many radio stations are there in odisha?",
      options: ["21", "28", "4", "12"],
      answer: 1,
    },
    {
      question: "9.KIIT stadium is located in which place of odisha?",
      options: ["Rourkela", "Cuttack", "Bhubaneswar", "Balasore"],
      answer: 2,
    },
    {
      question: "10.Deomali peak lies in which district of odisha?",
      options: ["Koraput", "Gajapati", "Rayagada", "Baripada"],
      answer: 0,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.innerHTML = option;
      button.onclick = () => checkAnswer(button, index);
      optionsElement.appendChild(button);
    });
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(button, selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");
    if (selectedIndex === currentQuestion.answer) {
      button.classList.add("correct");
      score++;
      updateScore();
    } else {
      button.classList.add("wrong");
    }
  
    options.forEach((option, index) => {
      option.disabled = true;
      if (index === currentQuestion.answer) {
        option.classList.add("correct");
      }
    });
  
    document.getElementById("next-btn").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function updateScore() {
    document.getElementById("current-score").innerText = score;
  }
  
  function showScore() {
    const quizContainer = document.querySelector(".quiz-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");
  
    quizContainer.style.display = "block";
    scoreContainer.style.display = "block";
    scoreElement.innerHTML = score;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("current-score").innerText = score;
    document.querySelector(".quiz-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
  }
  
  window.onload = loadQuestion;
  