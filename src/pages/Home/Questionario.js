import { useState, useContext } from "react";
import React from "react";
import "./App.css";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../../services/firebase";
import {AuthGoogleContext} from "../../contexts/authGoogle"
import A1_2 from '../../CidadesInteligentes/tela 1/A1_2.png'
import apoioG_2_2 from '../../CidadesInteligentes/tela 1/apoioG_2_2.png'
//Tela 2
import apoioA_1 from '../../CidadesInteligentes/tela 2/apoioA_1.png'
import GH1_1 from '../../CidadesInteligentes/tela 2/GH1_1.png'
//Tela 3
import apoiol_2 from '../../CidadesInteligentes/tela 3/apoiol_2.png'
import E1_2 from '../../CidadesInteligentes/tela 3/E1_2.png'
//Tela 4
import K1_2 from '../../CidadesInteligentes/tela 4/K1_2.png'
import L2_2 from '../../CidadesInteligentes/tela 4/L2_2.png'
//Tela 5
import apoioU_2 from '../../CidadesInteligentes/tela 5/apoioU_2.png'
import Q2_2 from '../../CidadesInteligentes/tela 5/Q2_2.png'
//Tela 6
import apoioH_2 from '../../CidadesInteligentes/tela 6/apoioH_2.png'
import T2_2 from '../../CidadesInteligentes/tela 6/T2_2.png'
//Tela 7
import R1_apoio_1 from '../../CidadesInteligentes/tela 7/R1_apoio_1.png'
import M1_1 from '../../CidadesInteligentes/tela 7/M1_1.png'
//Tela 8
import apoioL_1 from '../../CidadesInteligentes/tela 8/apoioL_1.png'
import W2_1 from '../../CidadesInteligentes/tela 8/W2_1.png'
//Tela 9
import apoioK_1 from '../../CidadesInteligentes/tela 9/apoioK_1.png'
import CD1_1 from '../../CidadesInteligentes/tela 9/CD1_1.png'
//Tela 10
import Q2_2 from '../../CidadesInteligentes/tela 10/Q2_2.png'
import G1_1 from '../../CidadesInteligentes/tela 10/G1_1.png'
//Tela 11
import Q2_1 from '../../CidadesInteligentes/tela 11/Q2_1.png'
import R1_1 from '../../CidadesInteligentes/tela 11/R1_1.png'
//Tela 12
import D1_1 from '../../CidadesInteligentes/tela 12/D1_1.png'
import S2_2 from '../../CidadesInteligentes/tela 12/S2_2.png'
//Tela 13
import N2_2 from '../../CidadesInteligentes/tela 13/N2_2.png'
import R1_apoio from '../../CidadesInteligentes/tela 13/R1_apoio.png'
//Tela 14
import apoioG_2 from '../../CidadesInteligentes/tela 14/apoioG_2.png'
import C2_2 from '../../CidadesInteligentes/tela 14/C2_2.png'
//Tela 15
import A1_1 from '../../CidadesInteligentes/tela 15/A1_1.png'
import apoioC_1 from '../../CidadesInteligentes/tela 15/apoioC_1.png'
//Tela 16
import apoioN_2 from '../../CidadesInteligentes/tela 16/apoioN_2.png'
import G1_2 from '../../CidadesInteligentes/tela 16/G1_2.png'
//Tela 17
import apoioC_2 from '../../CidadesInteligentes/tela 17/apoioC_2.png'
import H2_2 from '../../CidadesInteligentes/tela 17/H2_2.png'
//Tela 18
import apoioS_2 from '../../CidadesInteligentes/tela 18/apoioS_2.png'
import O1_2 from '../../CidadesInteligentes/tela 18/O1_2.png'
//Tela 19
import apoioU_2 from '../../CidadesInteligentes/tela 19/apoioU_2.png'
import Q1_2 from '../../CidadesInteligentes/tela 19/Q1_2.png'
//Tela 20
import C2_1 from '../../CidadesInteligentes/tela 20/C2_1.png'
import D2_1 from '../../CidadesInteligentes/tela 20/D2_1.png'
//Tela 21
import apoioG_1 from '../../CidadesInteligentes/tela 21/apoioG_1.png'
import E2_1 from '../../CidadesInteligentes/tela 21/E2_1.png'
//Tela 22
import apoioJ_1 from '../../CidadesInteligentes/tela 22/apoioJ_1.png'
import O2_1 from '../../CidadesInteligentes/tela 22/O2_1.png'


const questions = [
  {
    answerOptions: [
      {image: <img src= {A1_2}/>,id_image:"A1_2"},
      {image: <img src= {apoioG_2_2}/>, id_image:"apoioG_2_2"}

    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioA_1}/>,id_image:"apoioA_1"},
      {image: <img src= {GH1_1}/>, id_image:"GH1_1"}

    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoiol_2}/>,id_image:"apoiol_2"},
      {image: <img src= {E1_2}/>, id_image:"E1_2"}

    ],
  },
 {
    answerOptions: [
      {image: <img src= {K1_2}/>,id_image:"K1_2"},
      {image: <img src= {L2_2}/>, id_image:"L2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioU_2}/>,id_image:"apoioU_2"},
      {image: <img src= {Q2_2}/>, id_image:"Q2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioH_2}/>,id_image:"apoioH_2"},
      {image: <img src= {T2_2}/>, id_image:"T2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {R1_apoio_1}/>,id_image:"R1_apoio_1"},
      {image: <img src= {M1_1}/>, id_image:"M1_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioL_1}/>,id_image:"apoioL_1"},
      {image: <img src= {W2_1}/>, id_image:"W2_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioK_1}/>,id_image:"apoioK_1"},
      {image: <img src= {CD1_1}/>, id_image:"CD1_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Q2_2}/>,id_image:"Q2_2"},
      {image: <img src= {G1_1}/>, id_image:"G1_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Q2_1}/>,id_image:"Q2_1"},
      {image: <img src= {R1_1}/>, id_image:"R1_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {D1_1}/>,id_image:"D1_1"},
      {image: <img src= {S2_2}/>, id_image:"S2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {N2_2}/>,id_image:"N2_2"},
      {image: <img src= {R1_apoio}/>, id_image:"R1_apoio"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioG_2}/>,id_image:"apoioG_2"},
      {image: <img src= {C2_2}/>, id_image:"C2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {A1_1}/>,id_image:"A1_1"},
      {image: <img src= {apoioC_1}/>, id_image:"apoioC_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioN_2}/>,id_image:"apoioN_2"},
      {image: <img src= {G1_2}/>, id_image:"G1_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioC_2}/>,id_image:"apoioC_2"},
      {image: <img src= {H2_2}/>, id_image:"H2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioS_2}/>,id_image:"apoioS_2"},
      {image: <img src= {O1_2}/>, id_image:"O1_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioU_2}/>,id_image:"apoioU_2"},
      {image: <img src= {Q1_2}/>, id_image:"Q1_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {C2_1}/>,id_image:"C2_1"},
      {image: <img src= {D2_1}/>, id_image:"D2_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioG_1}/>,id_image:"apoioG_1"},
      {image: <img src= {E2_1}/>, id_image:"E2_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioJ_1}/>,id_image:"apoioJ_1"},
      {image: <img src= {O2_1}/>, id_image:"O2_1"}
     
    ],
  },
];



export const Home = () =>{  
  const {user} = useContext(AuthGoogleContext)

  function gravar(userId,A1_2,apoioG_2_2,apoioA_1,GH1_1,apoiol_2,E1_2,K1_2,L2_2,apoioU_2,Q2_2,apoioH_2,T2_2,R1_apoio_1,M1_1,apoioL_1,W2_1,apoioK_1,CD1_1,Q2_2,G1_1,Q2_1,R1_1,D1_1,S2_2,N2_2,apoioG_2,C2_2,A1_1,apoioC_1,apoioN_2,G1_2,apoioC_2,H2_2,apoioS_2,O1_2,apoioU_2,Q1_2,C2_1,D2_1,apoioG_1,E2_1,apoioJ_1,O2_1) {
    const db = getDatabase(app);
    set(ref(db, 'votos/' + userId), {
      A1_2:A1_2,
      apoioG_2_2:apoioG_2_2,
      apoioA_1:apoioA_1,
      GH1_1:GH1_1,
      apoiol_2:apoiol_2,
      E1_2:E1_2,
      K1_2:K1_2,
      L2_2:L2_2,
      apoioU_2:apoioU_2,                                                            
      Q2_2:Q2_2,                                                            
      apoioH_2:apoioH_2,                                                            
      T2_2:T2_2,                                                            
      R1_apoio_1:R1_apoio_1,                                                            
      M1_1:M1_1,                                                            
      apoioL_1:apoioL_1,                                                            
      W2_1:W2_1,                                                            
      apoioK_1:apoioK_1,                                                            
      CD1_1:CD1_1,                                                            
      Q2_2:Q2_2,                                                            
      G1_1:G1_1,                                                            
      Q2_1:Q2_1,                                                            
      R1_1:R1_1,                                                                                
      D1_1:D1_1,                                                            
      S2_2:S2_2,                                                            
      N2_2:N2_2,                                                      
      apoioG_2:apoioG_2,                                                        
      C2_2:C2_2,                                                            
      A1_1:A1_1,                                                        
      apoioC_1:apoioC_1,                                                            
      apoioN_2:apoioN_2,                                                        
      G1_2:G1_2,                                                            
      apoioC_2:apoioC_2,                                                            
      H2_2:H2_2,                                                            
      apoioS_2:apoioS_2,                                                        
      O1_2:O1_2,                                                            
      apoioU_2:apoioU_2,                                                            
      Q1_2:Q1_2,                                                            
      C2_1:C2_1,                                                            
      D2_1:D2_1,                                                          
      apoioG_1:apoioG_1,                                                        
      E2_1:E2_1,                                                            
      apoioJ_1:apoioJ_1,                                                            
      O2_1:O2_1,    

    }).then(() => {
       
    })
    .catch((error) => {
      // The write failed...
    });
  }
 
  const [end, setend] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [A1_2,setA1_2] = useState(0);
  const [apoioG_2_2,setapoioG_2_2] = useState(0);
  const [apoioA_1,setapoioA_1] = useState(0);
  const [GH1_1,setGH1_1] = useState(0);
  const [apoiol_2,setapoiol_2] = useState(0);
  const [E1_2,setE1_2] = useState(0);
  const [K1_2,setK1_2] = useState(0);
  const [L2_2,setL2_2] = useState(0);
  const [apoioU_2,setapoioU_2] = useState(0);
  const [Q2_2,setQ2_2] = useState(0);
  const [apoioH_2,setapoioH_2] = useState(0);
  const [T2_2,setT2_2] = useState(0);
  const [R1_apoio_1,setR1_apoio_1] = useState(0);
  const [M1_1,setM1_1] = useState(0);
  const [apoioL_1,setapoioL_1] = useState(0);
  const [W2_1,setW2_1] = useState(0);
  const [apoioK_1,setapoioK_1] = useState(0);
  const [CD1_1,setCD1_1] = useState(0);
  const [Q2_2,setQ2_2] = useState(0);
  const [G1_1,setG1_1] = useState(0);
  const [Q2_1,setQ2_1] = useState(0);
  const [R1_1,setR1_1] = useState(0);
  const [D1_1,setD1_1] = useState(0);
  const [S2_2,setS2_2] = useState(0);
  const [N2_2,setN2_2] = useState(0);
  const [apoioG_2,setapoioG_2] = useState(0);
  const [C2_2,setC2_2] = useState(0);
  const [A1_1,setA1_1] = useState(0);
  const [apoioC_1,setapoioC_1] = useState(0);
  const [apoioN_2,setapoioN_2] = useState(0);
  const [G1_2,setG1_2] = useState(0);
  const [apoioC_2,setapoioC_2] = useState(0);
  const [H2_2,setH2_2] = useState(0);
  const [apoioS_2,setapoioS_2] = useState(0);
  const [O1_2,setO1_2] = useState(0);
  const [apoioU_2,setapoioU_2] = useState(0);
  const [Q1_2,setQ1_2] = useState(0);
  const [C2_1,setC2_1] = useState(0);
  const [D2_1,setD2_1] = useState(0);
  const [apoioG_1,setapoioG_1] = useState(0);
  const [E2_1,setE2_1] = useState(0);
  const [apoioJ_1,setapoioJ_1] = useState(0);
  const [O2_1,setO2_1] = useState(0);


  const [userlog, setuserlog] = useState(null);

  const handleAnswer=(answerOption) => {
    setuserlog(user)
    switch (answerOption) {
      case "A1_2":
        setA1_2(A1_2+1)
        break;
      case "apoioG_2_2":
        setapoioG_2_2(apoioG_2_2+1)
        break;
      case "apoioA_1":
        setapoioA_1(apoioA_1+1)
        break;
      case "GH1_1":
        setGH1_1(GH1_1+1)
        break;
      case "apoiol_2":
        setapoiol_2(apoiol_2+1)
        break;
      case "E1_2":
        setE1_2(E1_2+1)
        break;
      case "K1_2":
        setK1_2(K1_2+1)
        break;
      case "L2_2":
        setL2_2(L2_2+1)
        break;
      case "apoioU_2":
        setapoioU_2(apoioU_2+1)
        break;                                                          
      case "Q2_2":
        setQ2_2(Q2_2+1)
        break;                                                            
      case"apoioH_2":
        setapoioH_2(apoioH_2+1)
        break;                                                          
      case "T2_2":
        setT2_2(T2_2+1)
        break;                                                            
      case"R1_apoio_1":
        setR1_apoio_1(R1_apoio_1+1)
        break;                                                            
      case"M1_1":
        setM1_1(M1_1+1)
        break;                                                            
      case"apoioL_1":
        setapoioL_1(apoioL_1+1)
        break;                                                            
      case"W2_1":
        setW2_1(W2_1+1)
        break;                                                            
      case "apoioK_1":
        setapoioK_1(apoioK_1+1)
        break;                                                            
      case"CD1_1":
        setCD1_1(CD1_1+1)
        break;                                                            
      case"Q2_2":
        setQ2_2(Q2_2+1)
        break;
      case "G1_1":
        setG1_1(G1_1+1)
        break;                                                            
      case "Q2_1":
        setQ2_1(Q2_1+1)
        break;                                                            
      case"R1_1":
        setR1_1(R1_1+1)
        break;                                                        
      case"D1_1":
        setD1_1(D1_1+1)
        break;                                                            
      case"S2_2":
        setS2_2(S2_2+1)
        break;                                                            
      case "N2_2":
        setN2_2(N2_2+1)
        break;                                                      
      case"apoioG_2":
        setapoioG_2(apoioG_2+1)
        break;                                                        
      case "C2_2":
        setC2_2(C2_2+1)
        break;                                                            
      case "A1_1":
        setA1_1(A1_1+1)
        break;                                                        
      case "apoioC_1":
        setapoioC_1(apoioC_1+1)
        break;                                                            
      case "apoioN_2":
        setapoioN_2(apoioN_2+1)
        break;                                                        
      case "G1_2":
        setG1_2(G1_2+1)
        break;                                                            
      case "apoioC_2":
        setapoioC_2(apoioC_2+1)
        break;                                                            
      case "H2_2":
        setH2_2(H2_2+1)
        break;                                                            
      case "apoioS_2":
        setapoioS_2(apoioS_2+1)
        break;                                                        
      case "O1_2":
        setO1_2(O1_2+1)
        break;                                                            
      case "apoioU_2":
        setapoioU_2(apoioU_2+1)
        break;                                                            
      case "Q1_2":
        setQ1_2(Q1_2+1)
        break;                                                            
      case "C2_1":
        setC2_1(C2_1+1)
        break;                                                            
      case "D2_1":
        setD2_1(D2_1+1)
        break;                                                          
      case "apoioG_1":
        setapoioG_1(apoioG_1+1)
        break;                                                        
      case "E2_1":
        setE2_1(E2_1+1)
        break;                                                            
      case "apoioJ_1":
        setapoioJ_1(apoioJ_1+1)
        break;                                                            
      case "O2_1":
        setO2_1(O2_1+1)
        break;
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
      gravar(userlog.uid,A1_2,apoioG_2_2,apoioA_1,GH1_1,apoiol_2,E1_2,K1_2,L2_2,apoioU_2,Q2_2,apoioH_2,T2_2,R1_apoio_1,M1_1,apoioL_1,W2_1,apoioK_1,CD1_1,Q2_2,G1_1,Q2_1,R1_1,D1_1,S2_2,N2_2,apoioG_2,C2_2,A1_1,apoioC_1,apoioN_2,G1_2,apoioC_2,H2_2,apoioS_2,O1_2,apoioU_2,Q1_2,C2_1,D2_1,apoioG_1,E2_1,apoioJ_1,O2_1)
    }
  }).catch((error) => {
    console.error(error);
  });
    }
 
  return (
      <div className="container">
        {end ? (
          <div className="score-section">
            Obrigado {userlog.displayName} por responder o questionário!
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Em qual ambiente você se sente mais seguro? {currentQuestion+1}</span>/{questions.length} 
              </div>
            </div>
            <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
                (answerOption) => (
                  <button
                    onClick={() => handleAnswer(answerOption.id_image)}
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
