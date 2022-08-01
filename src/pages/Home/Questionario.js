import { useState, useContext } from "react";
import React from "react"; 
import "./App.css";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../../services/firebase";
import {AuthGoogleContext} from "../../contexts/authGoogle"

window.location.reload(false);


const questions = [
  {
    answerOptions: [
      {image:`https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fpavimentadas%2Foriginais%2F-7.9607_-34.82984999999999_heading%3D180.png?alt=media&token=e659773e-daa6-4bb4-81d0-181a124a677e`,imagePav:"Pavimentada"},
      {image:`https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fnaopavimentadas%2Foriginais%2F-7.96459_-34.851980000000005_heading%3D45.png?alt=media&token=e3354a98-1b0a-45e0-9c08-e72b9e0d980b`, imagePav:"Nao_Pavimentada"}

    ],
  },
  {
    answerOptions: [
      {image:`https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fnaopavimentadas%2Ftransformadas%2F-7.96926_-34.84271_heading%3D45.png--8.0221_-34.85243_heading%3D90.png?alt=media&token=f682edcd-103f-48df-a25c-36db7343a6a9`,imagePav:"Pavimentada"},
      {image:`https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fnaopavimentadas%2Foriginais%2F-7.96518_-34.84594_heading%3D45.png?alt=media&token=b4f3f8a7-2a11-42cf-8dda-9bef706e829e`, imagePav:"Nao_Pavimentada"}

    ],
  },
  {
    answerOptions: [
      {image:`https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fpavimentadas%2Foriginais%2F-7.96093_-34.82979999999999_heading%3D180.png?alt=media&token=0f08e8d3-3898-401d-825e-61fdc828e7d9`,imagePav:"Pavimentada"},
      {image:`https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fnaopavimentadas%2Foriginais%2F-7.96784_-34.84203000000001_heading%3D0.png?alt=media&token=69091202-3964-47e4-8ebe-dd59dd40fd49`, imagePav:"Nao_Pavimentada"}

    ],
  },

 
];



export const Home = () =>{  
  const {user} = useContext(AuthGoogleContext)
  let userlog = JSON.parse(user)
  function gravar(userId,pavimentadas, Nao_Pavimentada) {
    const db = getDatabase(app);
    set(ref(db, 'votos/' + userId), {
      Nao_Pavimentada: Nao_Pavimentada,
      pavimentadas: pavimentadas,
    }).then(() => {
        
    })
    .catch((error) => {
      // The write failed...
    });
  }
  
  const [end, setend] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [escolhaPav,setEscolhaPav] = useState(0);
  const [escolhaUnpav,setEscolhaUnpav] = useState(0);

    
  

  const handleAnswer=(answerOption) => {

      if (answerOption==="Pavimentada") {
        setEscolhaPav(escolhaPav+1)
      }else{
        setEscolhaUnpav(escolhaUnpav+1)
      }      
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
     
    } else {
        setend(true);
    } 
   
  }

 
if (end) {
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `votos/${userlog.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {

    } else {
      gravar(userlog.uid,escolhaPav,escolhaUnpav) 
    }
  }).catch((error) => {
    console.error(error);
  });
    }
 
  return (
    <div className="app">
      {end ? (
        <div className="score-section">
          Obrigado {userlog.displayName} por responder o questionário
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta número {currentQuestion+1}</span>/{questions.length}
            </div>
          </div>

          <div className="answer-section">
           {questions[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                  onClick={() => handleAnswer(answerOption.imagePav)}
                >
                  <img src= {answerOption.image}/>
                </button>
              )
          )}
          </div>
        </>
      )}
    </div>
  );
}
