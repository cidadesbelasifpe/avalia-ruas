import { useState, useContext } from "react";
import React from "react";
import "./App.css";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../../services/firebase";
import {AuthGoogleContext} from "../../contexts/authGoogle"
import A1 from '../../CidadesInteligentes/tela 1/A1.png'
import B2 from '../../CidadesInteligentes/tela 1/B2.png'
//Tela 2
import C1 from '../../CidadesInteligentes/tela 2/C1.png'
import D2 from '../../CidadesInteligentes/tela 2/D2.png'
//Tela 3
import F1 from '../../CidadesInteligentes/tela 3/F1.png'
import M2 from '../../CidadesInteligentes/tela 3/M2.png'
//Tela 4
import K1 from '../../CidadesInteligentes/tela 4/K1.png'
import L2 from '../../CidadesInteligentes/tela 4/L2.png'
//Tela 5
import N1 from '../../CidadesInteligentes/tela 5/N1.png'
import P2 from '../../CidadesInteligentes/tela 5/P2.png'
//Tela 6
import S1 from '../../CidadesInteligentes/tela 6/S1.png'
import T2 from '../../CidadesInteligentes/tela 6/T2.png'
//Tela 7
import apoioG from '../../CidadesInteligentes/tela 7/apoioG.png'
import U1 from '../../CidadesInteligentes/tela 7/U1.png'
//Tela 8
import E2 from '../../CidadesInteligentes/tela 8/E2.png'
import V1 from '../../CidadesInteligentes/tela 8/V1.png'
//Tela 9
import H1 from '../../CidadesInteligentes/tela 9/H1.png'
import J2 from '../../CidadesInteligentes/tela 9/J2.png'
//Tela 10
import Q2 from '../../CidadesInteligentes/tela 10/Q2.png'
import R1 from '../../CidadesInteligentes/tela 10/R1.png'
//Tela 11
import A2 from '../../CidadesInteligentes/tela 11/A2.png'
import apoioC from '../../CidadesInteligentes/tela 11/apoioC.png'
//Tela 12
import B1 from '../../CidadesInteligentes/tela 12/B1.png'
import C2 from '../../CidadesInteligentes/tela 12/C2.png'
//Tela 13
import apoioD from '../../CidadesInteligentes/tela 13/apoioD.png'
import F2 from '../../CidadesInteligentes/tela 13/F2.png'
//Tela 14
import apoioF from '../../CidadesInteligentes/tela 14/apoioF.png'
import K2 from '../../CidadesInteligentes/tela 14/K2.png'
//Tela 15
import apoioJ from '../../CidadesInteligentes/tela 15/apoioJ.png'
import N2 from '../../CidadesInteligentes/tela 15/N2.png'
//Tela 16
import apoioB from '../../CidadesInteligentes/tela 16/apoioB.png'
import S2 from '../../CidadesInteligentes/tela 16/S2.png'
//Tela 17
import D1 from '../../CidadesInteligentes/tela 17/D1.png'
import U2 from '../../CidadesInteligentes/tela 17/U2.png'
//Tela 18
import apoioE from '../../CidadesInteligentes/tela 18/apoioE.png'
import V2 from '../../CidadesInteligentes/tela 18/V2.png'
//Tela 19
import G1 from '../../CidadesInteligentes/tela 19/G1.png'
import H2 from '../../CidadesInteligentes/tela 19/H2.png'
//Tela 20
import Q1 from '../../CidadesInteligentes/tela 20/Q1.png'
import R2 from '../../CidadesInteligentes/tela 20/R2.png'
//Tela 21
import apoioH from '../../CidadesInteligentes/tela 21/apoioH.png'
import G2 from '../../CidadesInteligentes/tela 21/G2.png'
//Tela 22
import O2 from '../../CidadesInteligentes/tela 22/O2.png'
import T1 from '../../CidadesInteligentes/tela 22/T1.png'


const questions = [
  {
    answerOptions: [
      {image: <img src= {A1}/>,id_image:"a1"},
      {image: <img src= {B2}/>, id_image:"b2"}

    ],
  },
  {
    answerOptions: [
      {image: <img src= {C1}/>,id_image:"c1"},
      {image: <img src= {D2}/>, id_image:"d2"}

    ],
  },
  {
    answerOptions: [
      {image: <img src= {F1}/>,id_image:"f1"},
      {image: <img src= {M2}/>, id_image:"m2"}

    ],
  },
 {
    answerOptions: [
      {image: <img src= {K1}/>,id_image:"k1"},
      {image: <img src= {L2}/>, id_image:"l2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {N1}/>,id_image:"n1"},
      {image: <img src= {P2}/>, id_image:"p2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {S1}/>,id_image:"s1"},
      {image: <img src= {T2}/>, id_image:"t2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioG}/>,id_image:"apoioG"},
      {image: <img src= {U1}/>, id_image:"u1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {E2}/>,id_image:"e2"},
      {image: <img src= {V1}/>, id_image:"v1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {H1}/>,id_image:"h1"},
      {image: <img src= {J2}/>, id_image:"j2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Q2}/>,id_image:"q2"},
      {image: <img src= {R1}/>, id_image:"r1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {A2}/>,id_image:"a2"},
      {image: <img src= {apoioC}/>, id_image:"apoioC"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {B1}/>,id_image:"b1"},
      {image: <img src= {C2}/>, id_image:"c2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioD}/>,id_image:"apoioD"},
      {image: <img src= {F2}/>, id_image:"f2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioF}/>,id_image:"apoioF"},
      {image: <img src= {K2}/>, id_image:"k2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioJ}/>,id_image:"apoioJ"},
      {image: <img src= {N2}/>, id_image:"n2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioB}/>,id_image:"apoioB"},
      {image: <img src= {S2}/>, id_image:"s2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {D1}/>,id_image:"d1"},
      {image: <img src= {U2}/>, id_image:"u2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioE}/>,id_image:"apoioE"},
      {image: <img src= {V2}/>, id_image:"v2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {G1}/>,id_image:"g1"},
      {image: <img src= {H2}/>, id_image:"h2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Q1}/>,id_image:"q1"},
      {image: <img src= {R2}/>, id_image:"r2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioH}/>,id_image:"apoioH"},
      {image: <img src= {G2}/>, id_image:"g2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {O2}/>,id_image:"O2"},
      {image: <img src= {T1}/>, id_image:"t1"}
     
    ],
  },
];



export const Home = () =>{  
  const {user} = useContext(AuthGoogleContext)

  function gravar(userId,a1,b2,c1,d2,f1,m2,k1,l2,n1,p2,s1,t2,apoioG,u1,e2,v1,h1,j2,q2,r1,a2,apoioC,b1,c2,apoioD,apoioF,k2,apoioJ,n2,apoioB,s2,d1,u2,apoioE,v2,g1,h2,q1,r2,apoioH,g2,o2,t1) {
    const db = getDatabase(app);
    set(ref(db, 'votos/' + userId), {
      A1:a1,
      B2:b2,
      C1:c1,
      D2:d2,
      F1:f1,
      M2:m2,
      K1:k1,
      L2:l2,
      N1:n1,                                                            
      P2:p2,                                                            
      S1:s1,                                                            
      T2:t2,                                                            
      apoioG:apoioG,                                                            
      U1:u1,                                                            
      E2:e2,                                                            
      V1:v1,                                                            
      H1:h1,                                                            
      J2:j2,                                                            
      Q2:q2,                                                            
      R1:r1,                                                            
      A2:a2,                                                            
      apoioC:apoioC,                                                                                
      B1:b1,                                                            
      C2:c2,                                                            
      apoioD:apoioD,                                                      
      apoioF:apoioF,                                                        
      K2:k2,                                                            
      apoioJ:apoioJ,                                                        
      N2:n2,                                                            
      apoioB:apoioB,                                                        
      S2:s2,                                                            
      D1:d1,                                                            
      U2:u2,                                                            
      apoioE:apoioE,                                                        
      V2:v2,                                                            
      G1:g1,                                                            
      H2:h2,                                                            
      Q1:q1,                                                            
      R2:r2,                                                          
      apoioH:apoioH,                                                        
      G2:g2,                                                            
      O2:o2,                                                            
      T1:t1,    

    }).then(() => {
       
    })
    .catch((error) => {
      // The write failed...
    });
  }
 
  const [end, setend] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [a1,seta1] = useState(0);
  const [b2,setb2] = useState(0);
  const [c1,setc1] = useState(0);
  const [d2,setd2] = useState(0);
  const [f1,setf1] = useState(0);
  const [m2,setm2] = useState(0);
  const [k1,setk1] = useState(0);
  const [l2,setl2] = useState(0);
  const [n1,setn1] = useState(0);
  const [p2,setp2] = useState(0);
  const [s1,sets1] = useState(0);
  const [t2,sett2] = useState(0);
  const [apoioG,setapoioG] = useState(0);
  const [u1,setu1] = useState(0);
  const [e2,sete2] = useState(0);
  const [v1,setv1] = useState(0);
  const [h1,seth1] = useState(0);
  const [j2,setj2] = useState(0);
  const [q2,setq2] = useState(0);
  const [r1,setr1] = useState(0);
  const [a2,seta2] = useState(0);
  const [apoioC,setapoioC] = useState(0);
  const [b1,setb1] = useState(0);
  const [c2,setc2] = useState(0);
  const [apoioD,setapoioD] = useState(0);
  const [apoioF,setapoioF] = useState(0);
  const [k2,setk2] = useState(0);
  const [apoioJ,setapoioJ] = useState(0);
  const [n2,setn2] = useState(0);
  const [apoioB,setapoioB] = useState(0);
  const [s2,sets2] = useState(0);
  const [d1,setd1] = useState(0);
  const [u2,setu2] = useState(0);
  const [apoioE,setapoioE] = useState(0);
  const [v2,setv2] = useState(0);
  const [g1,setg1] = useState(0);
  const [h2,seth2] = useState(0);
  const [q1,setq1] = useState(0);
  const [r2,setr2] = useState(0);
  const [apoioH,setapoioH] = useState(0);
  const [g2,setg2] = useState(0);
  const [o2,seto2] = useState(0);
  const [t1,sett1] = useState(0);


  const [userlog, setuserlog] = useState(null);

  const handleAnswer=(answerOption) => {
    setuserlog(user)
    switch (answerOption) {
      case "a1":
        seta1(a1+1)
        break;
      case "b2":
        setb2(b2+1)
        break;
      case "c1":
        setc1(c1+1)
        break;
      case "d2":
        setd2(d2+1)
        break;
      case "f1":
        setf1(f1+1)
        break;
      case "m2":
        setm2(m2+1)
        break;
      case "k1":
        setk1(k1+1)
        break;
      case "l2":
        setl2(l2+1)
        break;
      case "n1":
        setn1(n1+1)
        break;                                                          
      case "p2":
        setp2(p2+1)
        break;                                                            
      case"s1":
        sets1(s1+1)
        break;                                                          
      case "t2":
        sett2(t2+1)
        break;                                                            
      case"apoioG":
        setapoioG(apoioG+1)
        break;                                                            
      case"u1":
        setu1(u1+1)
        break;                                                            
      case"e2":
        sete2(e2+1)
        break;                                                            
      case"v1":
        setv1(v1+1)
        break;                                                            
      case "h1":
        seth1(h1+1)
        break;                                                            
      case"j2":
        setj2(j2+1)
        break;                                                            
      case"q2":
        setq2(q2+1)
        break;
      case "r1":
        setr1(r1+1)
        break;                                                            
      case "a2":
        seta2(a2+1)
        break;                                                            
      case"apoioC":
        setapoioC(apoioC+1)
        break;                                                        
      case"b1":
        setb1(b1+1)
        break;                                                            
      case"c2":
        setc2(c2+1)
        break;                                                            
      case "apoioD":
        setapoioD(apoioD+1)
        break;                                                      
      case"apoioF":
        setapoioF(apoioF+1)
        break;                                                        
      case "k2":
        setk2(k2+1)
        break;                                                            
      case "apoioJ":
        setapoioJ(apoioJ+1)
        break;                                                        
      case "n2":
        setn2(n2+1)
        break;                                                            
      case "apoioB":
        setapoioB(apoioB+1)
        break;                                                        
      case "s2":
        sets2(s2+1)
        break;                                                            
      case "d1":
        setd1(d1+1)
        break;                                                            
      case "u2":
        setu2(u2+1)
        break;                                                            
      case "apoioE":
        setapoioE(apoioE+1)
        break;                                                        
      case "v2":
        setv2(v2+1)
        break;                                                            
      case "g1":
        setg1(g1+1)
        break;                                                            
      case "h2":
        seth2(h2+1)
        break;                                                            
      case "q1":
        setq1(q1+1)
        break;                                                            
      case "r2":
        setr2(r2+1)
        break;                                                          
      case "apoioH":
        setapoioH(apoioH+1)
        break;                                                        
      case "g2":
        setg2(g2+1)
        break;                                                            
      case "o2":
        seto2(o2+1)
        break;                                                            
      case "t1":
        sett1(t1+1)
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
      gravar(userlog.uid,a1,b2,c1,d2,f1,m2,k1,l2,n1,p2,s1,t2,apoioG,u1,e2,v1,h1,j2,q2,r1,a2,apoioC,b1,c2,apoioD,apoioF,k2,apoioJ,n2,apoioB,s2,d1,u2,apoioE,v2,g1,h2,q1,r2,apoioH,g2,o2,t1)
    }
  }).catch((error) => {
    console.error(error);
  });
    }
 
  return (
    <div className="app">
      {end ? (
        <div className="score-section">
          Obrigado {userlog.displayName} por responder o questionário!
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
