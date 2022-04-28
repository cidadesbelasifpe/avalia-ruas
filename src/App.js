import { useState } from "react";

import "./App.css";


const questions = [
  {
    questionText: "...",
    answerOptions: [
      { image: "..."},
      { image: ".." },
    
    ],
  },
  {
    questionText: "...",
    answerOptions: [
      { image: getDownloadURL("https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fnaopavimentadas%2Foriginais%2F-7.96459_-34.851980000000005_heading%3D45.png?alt=media&token=e3354a98-1b0a-45e0-9c08-e72b9e0d980b")},
      { image: "...." },
    
    ],
  },
 
];


function App() {
  const [end, setend] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(answerOption) {


    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        setend(true);
    }
  }

  return (
    <div className="app">
      {end ? (
        <div className="score-section">
          Obrigado por responder o formulário 
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta número {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption)}
                  key={index}
                >
                  {answerOption.image}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;