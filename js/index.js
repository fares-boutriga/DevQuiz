const quizzes = {
    HTML: [
      {
        question: "Que signifie HTML ?",
        options: [
          "Hyper Texte Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        answer: 0,
      },
      {
        question:
          "Quelle balise HTML est utilisée pour définir une feuille de style interne ?",
        options: ["<style>", "<css>", "<script>"],
        answer: 0,
      },
      {
        question:
          "Quel attribut HTML est utilisé pour définir un identifiant unique ?",
        options: ["class", "id", "unique"],
        answer: 1,
      },
      {
        question:
          "Quelle balise HTML est utilisée pour insérer une image ?",
        options: ["<image>", "<img>", "<pic>"],
        answer: 1,
      },
      {
        question: "Quel élément HTML définit un titre de niveau 1 ?",
        options: ["<header>", "<h1>", "<title>"],
        answer: 1,
      },
    ],
    CSS: [
      {
        question: "Que signifie CSS ?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
        ],
        answer: 0,
      },
      {
        question:
          "Quelle propriété est utilisée pour changer la couleur de fond ?",
        options: ["color", "background-color", "bgcolor"],
        answer: 1,
      },
      {
        question:
          "Quel est le sélecteur CSS correct pour sélectionner un élément avec l'id 'header' ?",
        options: ["#header", ".header", "header"],
        answer: 0,
      },
      {
        question: "Quelle propriété CSS contrôle la taille du texte ?",
        options: ["font-style", "text-size", "font-size"],
        answer: 2,
      },
      {
        question: "Quel outil CSS est utilisé pour centrer un élément ?",
        options: ["flexbox", "grid", "table"],
        answer: 0,
      },
    ],
    JavaScript: [
      {
        question: "Quelle entreprise a développé JavaScript ?",
        options: ["Microsoft", "Netscape", "Sun Microsystems"],
        answer: 1,
      },
      {
        question:
          "Quel symbole est utilisé pour les commentaires en JavaScript ?",
        options: ["//", "<!-- -->", "#"],
        answer: 0,
      },
      {
        question: "Comment déclare-t-on une variable en JavaScript ?",
        options: ["let", "var", "const"],
        answer: 0,
      },
      {
        question:
          "Quel type de données JavaScript est utilisé pour les valeurs vraies ou fausses ?",
        options: ["boolean", "string", "number"],
        answer: 0,
      },
      {
        question:
          "Quelle méthode JavaScript est utilisée pour ajouter un élément à un tableau ?",
        options: ["push", "add", "insert"],
        answer: 0,
      },
    ],
  };

  let score = 0;
  let currentQuestionIndex = 0;
  let currentQuiz = [];

  function startQuiz(language) {
    score = 0; // Reset score for new quiz
    currentQuestionIndex = 0;
    currentQuiz = quizzes[language];
    updateScore();

    if (currentQuiz && currentQuiz.length > 0) {
      showQuestion();
    } else {
      document.getElementById("quiz-container").innerHTML =
        "<p>Aucun quiz disponible pour ce langage.</p>";
    }
  }

  function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear previous content

    if (currentQuestionIndex < currentQuiz.length) {
      const currentQuestion = currentQuiz[currentQuestionIndex];

      const questionDiv = document.createElement("div");
      questionDiv.className = "my-3";

      const questionTitle = document.createElement("h5");
      questionTitle.textContent = `Question ${currentQuestionIndex + 1}/${
        currentQuiz.length
      }: ${currentQuestion.question}`;
      questionDiv.appendChild(questionTitle);

      currentQuestion.options.forEach((option, i) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "btn btn-outline-secondary m-1";
        optionBtn.textContent = option;
        optionBtn.onclick = () => {
          if (i === currentQuestion.answer) {
            score++;
            updateScore();
          }
          currentQuestionIndex++;
          if (currentQuestionIndex < currentQuiz.length) {
            showQuestion();
          } else {
            endQuiz();
          }
        };
        questionDiv.appendChild(optionBtn);
      });

      quizContainer.appendChild(questionDiv);
    }
  }

  function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<p>Quiz terminé ! Votre score est de ${score}/${currentQuiz.length}.</p>`;
    alert(
      `Félicitations ! Vous avez terminé le quiz. Votre score est de ${score}/${currentQuiz.length}.`
    );
  }

  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
    if (score > 2) {
      scoreElement.classList.add("celebration");
    } else {
      scoreElement.classList.remove("celebration");
    }
  }