
(function(){
    function buildQuiz(){
   
      const output = [];
  
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  

          const answers = [];
  

          for(let letter in currentQuestion.answers){
  

            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"><ul> ${answers.join('')} </ul></div>`
          );
        }
      );
  

      quiz.innerHTML = output.join('');
    }
  
    function showResults(){

      const answerContainers = quiz.querySelectorAll('.answers');
  

      let numCorrect = 0;
  

      myQuestions.forEach( (currentQuestion, questionNumber) => {
  

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
  

          answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else{

          answerContainers[questionNumber].style.color = 'red';
        }
      });
  

      result.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    let quiz = document.querySelector<HTMLDivElement>('#quiz');
    let submit = document.querySelector<HTMLButtonElement>('#submit');
    let result = document.querySelector<HTMLDivElement>('#results');
    
    let myQuestions = [
        {
            question: "How does a WHILE loop start?",
            answers: {
                a: 'while (i<=10)',
                b: 'while i=1 to 10',
                c: 'while (i <=10; i++)'
            },
            correctAnswer: 'A'
        },
        {
            question: "How does a FOR loop start?",
            answers: {
                a: 'For i=1 to 5 ',
                b: 'For (i<=5; i++)',
                c: 'For (i=0;i<=5)',
                d: 'For (i=0;i<=5; i++)'
            },
            correctAnswer: 'd'
        },
        {
            question: "How can you add a comment in a JavaScript?",
            answers: {
                a: '<!-- comment -->',
                b: '// comment',
                c: '"this commment',
                d: '/* comment*/'
            },
            correctAnswer: 'b',
            correctAnswer1: 'd'
        }
    ];
  
  

    buildQuiz();
  

    submit.addEventListener('click', showResults);
  }
  
  )();