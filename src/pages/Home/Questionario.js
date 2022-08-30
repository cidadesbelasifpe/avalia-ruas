import { useState, useContext } from "react";
import React from "react";
import "./App.css";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../../services/firebase";
import {AuthGoogleContext} from "../../contexts/authGoogle"
import A1_2 from '../../CidadesInteligentes/tela 1/A1_2.png'
import apoioF_2 from '../../CidadesInteligentes/tela 1/apoioF_2.png'
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
import Q2_2Tela10 from '../../CidadesInteligentes/tela 10/Q2_2.png'
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
import apoioG_2Tela14 from '../../CidadesInteligentes/tela 14/apoioG_2.png'
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
import apoioU_2Tela19 from '../../CidadesInteligentes/tela 19/apoioU_2.png'
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
//Tela 23
import MN1_1 from '../../CidadesInteligentes/tela 23/MN1_1.png'
import apoioB_1 from '../../CidadesInteligentes/tela 23/apoioB_1.png'
//Tela 24
import Q1_1 from '../../CidadesInteligentes/tela 24/Q1_1.png'
import R1_1Tela24 from '../../CidadesInteligentes/tela 24/R1_1.png'
//Tela 25
import IJ1_1 from '../../CidadesInteligentes/tela 25/IJ1_1.png'
import apoioM_1 from '../../CidadesInteligentes/tela 25/apoioM_1.png'
//Tela 26
import A2_2 from '../../CidadesInteligentes/tela 26/apoioJ_1.png'
import apoioF_2Tela26 from '../../CidadesInteligentes/tela 26/apoioF_2.png'
//Tela 27
import D1_1Tela27 from '../../CidadesInteligentes/tela 27/D1_1Tela27.png'
import S1_2 from '../../CidadesInteligentes/tela 27/S1_2.png'
//Tela 28
import N1_2 from '../../CidadesInteligentes/tela 28/N1_2.png'
import R1_2 from '../../CidadesInteligentes/tela 28/R1_2.png'
//Tela 29
import C1_2 from '../../CidadesInteligentes/tela 29/C1_2.png'
import ApoioG_2 from '../../CidadesInteligentes/tela 29/ApoioG_2.png'
//Tela 30
import apoioN_1 from '../../CidadesInteligentes/tela 30/apoioN_1.png'
import B2_1 from '../../CidadesInteligentes/tela 30/B2_1.png'
//Tela 31
import apoioL_2 from '../../CidadesInteligentes/tela31/apoioL_2.png'
import F1_2 from '../../CidadesInteligentes/tela31/F1_2.png'
//Tela 32
import apoioC_2Tela32 from '../../CidadesInteligentes/tela32/apoioC_2.png'
import H1_2 from '../../CidadesInteligentes/tela32/H1_2.png'
//Tela 33
import L1_2 from '../../CidadesInteligentes/tela33/L1_2.png'
import K1_2Tela33 from '../../CidadesInteligentes/tela33/K1_2.png'
//Tela 34
import apoioA_1Tela34 from '../../CidadesInteligentes/tela34/apoioA_1.png'
import GH2_1 from '../../CidadesInteligentes/tela34/GH2_1.png'
//Tela 35
import A2_1 from '../../CidadesInteligentes/tela35/A2_1.png'
import apoioC_1Tela35 from '../../CidadesInteligentes/tela35/apoioC_1.png'
//Tela 36
import apoioB_2 from '../../CidadesInteligentes/tela36/apoioB_2.png'
import D2_2 from '../../CidadesInteligentes/tela36/D2_2.png'
//Tela 37
import apoioS_2Tela37 from '../../CidadesInteligentes/tela 37/apoioS_2.png'
import O2_2 from '../../CidadesInteligentes/tela 37/O2_2.png'
//Tela 38
import C1_1 from '../../CidadesInteligentes/tela 38/C1_1.png'
import D2_1Tela38 from '../../CidadesInteligentes/tela 38/D2_1.png'
//Tela 39
import apoioN_1Tela39 from '../../CidadesInteligentes/tela 39/apoioN_1.png'
import B1_1 from '../../CidadesInteligentes/tela 39/B1_1.png'
//Tela 40
import apoioI_2 from '../../CidadesInteligentes/tela 40/apoioI_2.png'
import E1_2Tela40 from '../../CidadesInteligentes/tela 40/E1_2.png'
//Tela 41
import apoioL_2Tela41 from '../../CidadesInteligentes/tela 41/apoioL_2.png'
import F2_2 from '../../CidadesInteligentes/tela 41/F2_2.png'
//Tela 42
import apoioK_2 from '../../CidadesInteligentes/tela 42/apoioK_2.png'
import M1_2 from '../../CidadesInteligentes/tela 42/M1_2.png'
//Tela 43
import apoioG_1Tela43 from '../../CidadesInteligentes/tela 43/apoioG_1.png'
import E1_1 from '../../CidadesInteligentes/tela 43/E1_1.png'
//Tela 44
import apoioJ_1Tela44 from '../../CidadesInteligentes/tela 44/apoioJ_1.png'
import O1_1 from '../../CidadesInteligentes/tela 44/O1_1.png'
//Tela 45
import apoioL_1Tela45 from '../../CidadesInteligentes/tela 45/apoioL_1.png'
import W1_1 from '../../CidadesInteligentes/tela 45/W1_1.png'
//Tela 46
import G2_1 from '../../CidadesInteligentes/tela 46/G2_1.png'
import apoioH_1 from '../../CidadesInteligentes/tela 46/apoioH_1.png'
//Tela 47
import apoioB_1Tela47 from '../../CidadesInteligentes/tela 47/apoioB_1.png'
import MN2_1 from '../../CidadesInteligentes/tela 47/MN2_1.png'
//Tela 48
import apoioM_1Tela48 from '../../CidadesInteligentes/tela 48/apoioM_1.png'
import IJ2_1 from '../../CidadesInteligentes/tela 48/IJ2_1.png'
//Tela 49
import apoioB_2Tela49 from '../../CidadesInteligentes/tela 49/apoioB_2.png'
import D1_2 from '../../CidadesInteligentes/tela 49/D1_2.png'
//Tela 50
import apoioN_2Tela50 from '../../CidadesInteligentes/tela 50/apoioN_2.png'
import G2_2 from '../../CidadesInteligentes/tela 50/G2_2.png'
//Tela 51
import J1_2 from '../../CidadesInteligentes/tela 51/J1_2.png'
import K2_2 from '../../CidadesInteligentes/tela 51/K2_2.png'
//Tela 52
import apoioK_2Tela52 from '../../CidadesInteligentes/tela 52/apoioK_2.png'
import M2_2 from '../../CidadesInteligentes/tela 52/M2_2.png'
//Tela 53
import apoioH_2Tela53 from '../../CidadesInteligentes/tela 53/apoioH_2.png'
import T1_2 from '../../CidadesInteligentes/tela 53/T1_2.png'
//Tela 54
import apoioQ_1 from '../../CidadesInteligentes/tela 54/apoioQ_1.png'
import U1_2 from '../../CidadesInteligentes/tela 54/U1_2.png'
//Tela 55
import F1_1 from '../../CidadesInteligentes/tela 55/F1_1.png'
import M1_1Tela55 from '../../CidadesInteligentes/tela 55/M1_1.png'
//Tela 56
import apoioI_1 from '../../CidadesInteligentes/tela 56/apoioI_1.png'
import Z1_1 from '../../CidadesInteligentes/tela 56/Z1_1.png'
//Tela 57
import J2_2 from '../../CidadesInteligentes/tela 57/J2_2.png'
import K2_2Tela57 from '../../CidadesInteligentes/tela 57/K2_2.png'
//Tela 58
import apoioQ_1Tela58 from '../../CidadesInteligentes/tela 58/apoioQ_1.png'
import U2_2 from '../../CidadesInteligentes/tela 58/U2_2.png'
//Tela 59
import apoioK_1Tela59 from '../../CidadesInteligentes/tela 59/apoioK_1.png'
import CD2_1 from '../../CidadesInteligentes/tela 59/CD2_1.png'
//Tela 60
import apoioI_1Tela60 from '../../CidadesInteligentes/tela 60/apoioI_1.png'
import Z2_1 from '../../CidadesInteligentes/tela 60/Z2_1.png'

const questions = [
  {
    answerOptions: [
      {image: <img src= {A1_2}/>,id_image:"A1_2"},
      {image: <img src= {apoioF_2}/>, id_image:"apoioF_2"}

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
      {image: <img src= {Q2_2Tela10}/>,id_image:"Q2_2Tela10"},
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
      {image: <img src= {apoioG_2Tela14}/>,id_image:"apoioG_2Tela14"},
      {image: <img src= {C2_2}/>, id_image:"C2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {apoioG_2}/>,id_image:"apoioG_2"},
      {image: <img src= {C1_2}/>, id_image:"C1_2"}
     
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
      {image: <img src= {apoioU_2Tela19}/>,id_image:"apoioU_2Tela19"},
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
  {
    answerOptions: [
      {image: <img src= {MN1_1}/>,id_image:"MN1_1"},
      {image: <img src= {apoioB_1}/>, id_image:"apoioB_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Q1_1}/>,id_image:"Q1_1"},
      {image: <img src= {R1_1Tela24}/>, id_image:"R1_1Tela24"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {IJ1_1}/>,id_image:"IJ1_1"},
      {image: <img src= {apoioM_1}/>, id_image:"apoioM_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {A2_2}/>,id_image:"A2_2"},
      {image: <img src= {apoioF_2Tela26}/>, id_image:"apoioF_2Tela26"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {S1_2}/>,id_image:"S1_2"},
      {image: <img src= {D1_1Tela27}/>, id_image:"D1_1Tela27"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {N1_2}/>,id_image:"N1_2"},
      {image: <img src= {R1_2}/>, id_image:"R1_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {C1_2}/>,id_image:"C1_2"},
      {image: <img src= {ApoioG_2}/>, id_image:"ApoioG_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {B2_1}/>,id_image:"B2_1"},
      {image: <img src= {apoioN_1}/>, id_image:"apoioN_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {F1_2}/>,id_image:"F1_2"},
      {image: <img src= {apoioL_2}/>, id_image:"apoioL_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {H1_2}/>,id_image:"H1_2"},
      {image: <img src= {apoioC_2Tela32}/>, id_image:"apoioC_2Tela32"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {L1_2}/>,id_image:"L1_2"},
      {image: <img src= {K1_2Tela33}/>, id_image:"K1_2Tela33"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {GH2_1}/>,id_image:"GH2_1"},
      {image: <img src= {apoioA_1}/>, id_image:"apoioA_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {A2_1}/>,id_image:"A2_1"},
      {image: <img src= {apoioC_1Tela35}/>, id_image:"apoioC_1Tela35"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {D2_2}/>,id_image:"D2_2"},
      {image: <img src= {apoioB_2}/>, id_image:"apoioB_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {O2_2}/>,id_image:"O2_2"},
      {image: <img src= {apoioS_2Tela37}/>, id_image:"apoioS_2Tela37"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {C1_1}/>,id_image:"C1_1"},
      {image: <img src= {D2_1Tela38}/>, id_image:"D2_1Tela38"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {B1_1}/>,id_image:"B1_1"},
      {image: <img src= {apoioN_1Tela39}/>, id_image:"apoioN_1Tela39"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {E1_2Tela40}/>,id_image:"E1_2Tela40"},
      {image: <img src= {apoioI_2}/>, id_image:"apoioI_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {F2_2}/>,id_image:"F2_2"},
      {image: <img src= {apoioL_2Tela41}/>, id_image:"apoioL_2Tela41"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {M1_2}/>,id_image:"M1_2"},
      {image: <img src= {apoioK_2}/>, id_image:"apoioK_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {E1_1}/>,id_image:"E1_1"},
      {image: <img src= {apoioG_1Tela43}/>, id_image:"apoioG_1Tela43"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {O1_1}/>,id_image:"O1_1"},
      {image: <img src= {apoioJ_1Tela44}/>, id_image:"apoioJ_1Tela44"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {W1_1}/>,id_image:"W1_1"},
      {image: <img src= {apoioL_1Tela45}/>, id_image:"apoioL_1Tela45"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {G2_1}/>,id_image:"G2_1"},
      {image: <img src= {apoioH_1}/>, id_image:"apoioH_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {MN2_1}/>,id_image:"MN2_1"},
      {image: <img src= {apoioB_1Tela47}/>, id_image:"apoioB_1Tela47"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {IJ2_1}/>,id_image:"IJ2_1"},
      {image: <img src= {apoioM_1Tela48}/>, id_image:"apoioM_1Tela48"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {D1_2}/>,id_image:"D1_2"},
      {image: <img src= {apoioB_2Tela49}/>, id_image:"apoioB_2Tela49"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {G2_2}/>,id_image:"G2_2"},
      {image: <img src= {apoioN_2Tela50}/>, id_image:"apoioN_2Tela50"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {J1_2}/>,id_image:"J1_2"},
      {image: <img src= {K2_2}/>, id_image:"K2_2"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {M2_2}/>,id_image:"M2_2"},
      {image: <img src= {apoioK_2Tela52}/>, id_image:"apoioK_2Tela52"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {T1_2}/>,id_image:"T1_2"},
      {image: <img src= {apoioH_2Tela53}/>, id_image:"apoioH_2Tela53"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {U1_2}/>,id_image:"U1_2"},
      {image: <img src= {apoioQ_1}/>, id_image:"apoioQ_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {F1_1}/>,id_image:"F1_1"},
      {image: <img src= {M1_1Tela55}/>, id_image:"M1_1Tela55"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Z1_1}/>,id_image:"Z1_1"},
      {image: <img src= {apoioI_1}/>, id_image:"apoioI_1"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {J2_2}/>,id_image:"J2_2"},
      {image: <img src= {K2_2Tela57}/>, id_image:"K2_2Tela57"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {U2_2}/>,id_image:"U2_2"},
      {image: <img src= {apoioQ_1Tela58}/>, id_image:"apoioQ_1Tela58"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {CD2_1}/>,id_image:"CD2_1"},
      {image: <img src= {apoioK_1Tela59}/>, id_image:"apoioK_1Tela59"}
     
    ],
  },
  {
    answerOptions: [
      {image: <img src= {Z2_1}/>,id_image:"Z2_1"},
      {image: <img src= {apoioI_1Tela60}/>, id_image:"apoioI_1Tela60"}
     
    ],
  },
];



export const Home = () =>{  
  const {user} = useContext(AuthGoogleContext)

  function gravar(userId,A1_2,apoioF_2,apoioA_1,GH1_1,apoiol_2,E1_2,K1_2,L2_2,apoioU_2,Q2_2,apoioH_2,T2_2,R1_apoio_1,M1_1,apoioL_1,W2_1,apoioK_1,CD1_1,Q2_2Tela10,G1_1,Q2_1,R1_1,D1_1,S2_2,N2_2,apoioG_2Tela14,C2_2,A1_1,apoioC_1,apoioN_2,G1_2,apoioC_2,H2_2,apoioS_2,O1_2,apoioU_2Tela19,Q1_2,C2_1,D2_1,apoioG_1,E2_1,apoioJ_1,O2_1,MN1_1,apoioB_1,Q1_1,R1_1,IJ1_1,apoioM_1,A2_2,apoioF_2Tela26,S1_2,D1_1Tela27,N1_2,R1_2,C1_2,apoioG_2,B2_1,apoioN_1,F1_2,apoioL_2,H1_2,apoioC_2Tela32,L1_2,K1_2Tela33,GH2_1,apoioA_1,A2_1,apoioC_1Tela35,D2_2,apoioB_2,O2_2,apoioS_2Tela37,C1_1,D2_1Tela38,B1_1,apoioN_1Tela39,E1_2Tela40,apoioI_2,F2_2,apoioL_2Tela41,M1_2,apoioK_2,E1_1,apoioG_1Tela43,O1_1,apoioJ_1Tela44,W1_1,apoioL_1Tela45,G2_1,apoioH_1,MN2_1,apoioB_1Tela47,IJ2_1,apoioM_1Tela48,D1_2,apoioB_2Tela49,G2_2,apoioN_2Tela50,J1_2,K2_2,M2_2,apoioK_2Tela52,T1_2,apoioH_2Tela53,U1_2,apoioQ_1,F1_1,M1_1Tela55,Z1_1,apoioI_1,J2_2,K2_2Tela57,U2_2,apoioQ_1Tela58,CD2_1,apoioK_1Tela59,Z2_1,apoioI_1Tela60) {
    const db = getDatabase(app);
    set(ref(db, 'votos/' + userId), {
      A1_2:A1_2,
      apoioF_2:apoioF_2,
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
      Q2_2Tela10:Q2_2Tela10,                                                            
      G1_1:G1_1,                                                            
      Q2_1:Q2_1,                                                            
      R1_1:R1_1,                                                                                
      D1_1:D1_1,                                                            
      S2_2:S2_2,                                                            
      N2_2:N2_2,                                                      
      apoioG_2Tela14:apoioG_2Tela14,
      C2_2:C2_2,                                                            
      A1_1:A1_1,                                                        
      apoioC_1:apoioC_1,                                                            
      apoioN_2:apoioN_2,                                                        
      G1_2:G1_2,                                                            
      apoioC_2:apoioC_2,                                                            
      H2_2:H2_2,                                                            
      apoioS_2:apoioS_2,                                                        
      O1_2:O1_2,                                                            
      apoioU_2Tela19:apoioU_2Tela19,                                                            
      Q1_2:Q1_2,                                                            
      C2_1:C2_1,                                                            
      D2_1:D2_1,                                                          
      apoioG_1:apoioG_1,                                                        
      E2_1:E2_1,                                                            
      apoioJ_1:apoioJ_1,                                                            
      O2_1:O2_1,
      MN1_1:MN1_1,
      apoioB_1:apoioB_1,
      Q1_1:Q1_1,
      R1_1Tela24:R1_1Tela24,
      IJ1_1:IJ1_1,
      apoioM_1:apoioM_1,
      A2_2:A2_2,
      apoioF_2Tela26:apoioF_2Tela26,
      S1_2:S1_2,
      D1_1Tela27:D1_1Tela27,
      N1_2:N1_2,
      R1_2:R1_2,
      C1_2:C1_2,
      ApoioG_2:ApoioG_2,
      B2_1:B2_1,
      apoioN_1:apoioN_1,
      F1_2:F1_2,
      apoioL_2:apoioL_2,
      H1_2:H1_2,
      apoioC_2Tela32:apoioC_2Tela32,
      L1_2:L1_2,
      K1_2Tela33:K1_2Tela33,
      GH2_1:GH2_1,
      apoioA_1:apoioA_1,
      A2_1:A2_1,
      apoioC_1Tela35:apoioC_1Tela35,
      D2_2:D2_2,
      apoioB_2:apoioB_2,
      O2_2:O2_2,
      apoioS_2Tela37:apoioS_2Tela37,
      C1_1:C1_1,
      D2_1Tela38:D2_1Tela38,
      B1_1:B1_1,
      apoioN_1Tela39:apoioN_1Tela39,
      E1_2Tela40:E1_2Tela40,
      apoioI_2:apoioI_2,
      F2_2:F2_2,
      apoioL_2Tela41:apoioL_2Tela41,
      M1_2:M1_2,
      apoioK_2:apoioK_2,
      E1_1:E1_1,
      apoioG_1Tela43:apoioG_1Tela43,
      O1_1:O1_1,
      apoioJ_1Tela44:apoioJ_1Tela44,
      apoioJ_1Tela44:apoioJ_1Tela44,
      apoioL_1Tela45:apoioL_1Tela45,
      G2_1:G2_1,
      apoioH_1:apoioH_1,
      MN2_1:MN2_1,
      apoioB_1Tela47:apoioB_1Tela47,
      IJ2_1:IJ2_1,
      apoioM_1Tela48:apoioM_1Tela48,
      D1_2:D1_2,
      apoioB_2Tela49:apoioB_2Tela49,
      G2_2:G2_2,
      apoioN_2Tela50:apoioN_2Tela50,
      J1_2:J1_2,
      K2_2:K2_2,
      M2_2:M2_2,
      apoioK_2Tela52:apoioK_2Tela52,
      T1_2:T1_2,
      apoioH_2Tela53:apoioH_2Tela53,
      U1_2:U1_2,
      apoioQ_1:apoioQ_1,
      F1_1:F1_1,
      M1_1Tela55:M1_1Tela55,
      Z1_1:Z1_1,
      apoioI_1:apoioI_1,
      J2_2:J2_2,
      K2_2Tela57:K2_2Tela57,
      U2_2:U2_2,
      apoioQ_1Tela58:apoioQ_1Tela58,
      CD2_1:CD2_1,
      apoioK_1Tela59:apoioK_1Tela59,
      Z2_1:Z2_1,
      apoioI_1Tela60:apoioI_1Tela60,

    }).then(() => {
       
    })
    .catch((error) => {
      // The write failed...
    });
  }
 
  const [end, setend] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [A1_2,setA1_2] = useState(0);
  const [apoioF_2,setapoioF_2] = useState(0);
  const [apoioA_1,setapoioA_1] = useState(0);
  const [GH1_1,setGH1_1] = useState(0);
  const [apoiol_2,setapoiol_2] = useState(0);
  const [E1_2,setE1_2] = useState(0);
  const [K1_2,setK1_2] = useState(0);
  const [L2_2,setL2_2] = useState(0);
  const [apoioU_2Tela19,setapoioU_2Tela19] = useState(0);
  const [Q2_2Tela10,setQ2_2Tela10] = useState(0);
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
  const [apoioG_2Tela14,setapoioG_2Tela14] = useState(0);
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
      case "apoioF_2":
        setapoioF_2(apoioF_2+1)
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
      case"Q2_2Tela10":
        setQ2_2Tela10(Q2_2Tela10+1)
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
      case"apoioG_2Tela14":
        setapoioG_2Tela14(apoioG_2Tela14+1)
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
      case "apoioU_2Tela19":
        setapoioU_2Tela19(apoioU_2Tela19+1)
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
      case "MN1_1":
        setMN1_1(MN1_1+1)
        break;
      case "apoioB_1":
        setapoioB_1(apoioB_1+1)
        break; 
      case "Q1_1":
        setQ1_1(Q1_1+1)
        break;
      case "R1_1Tela24":
        setR1_1Tela24(R1_1Tela24+1)
        break;
      case "IJ1_1":
        setIJ1_1(IJ1_1+1)
        break;
      case "apoioM_1":
        setapoioM_1(apoioM_1+1)
        break;
      case "A2_2":
        setA2_2(A2_2+1)
        break;
      case "apoioF_2Tela26":
        setapoioF_2Tela26(apoioF_2Tela26+1)
        break;
      case "S1_2":
        setS1_2(S1_2+1)
        break;
      case "D1_1Tela27":
        setD1_1Tela27(D1_1Tela27+1)
        break;
      case "N1_2":
        setN1_2(N1_2+1)
        break;
      case "R1_2":
        setR1_2(R1_2+1)
        break;
      case "C1_2":
        setC1_2(C1_2+1)
        break;
      case "ApoioG_2":
        setApoioG_2(ApoioG_2+1)
        break;
      case "B2_1":
        setB2_1(B2_1+1)
        break;
      case "apoioN_1":
        setapoioN_1(apoioN_1+1)
        break;
      case "F1_2":
        setF1_2(F1_2+1)
        break;
      case "apoioL_2":
        setapoioL_2(apoioL_2+1)
        break;
      case "H1_2":
        setH1_2(H1_2+1)
        break;
      case "apoioC_2Tela32":
        setapoioC_2Tela32(apoioC_2Tela32+1)
        break;
      case "L1_2":
        setL1_2(L1_2+1)
        break;
      case "K1_2Tela33":
        setK1_2Tela33(K1_2Tela33+1)
        break;
      case "GH2_1":
        setGH2_1(GH2_1+1)
        break;
      case "apoioA_1":
        setapoioA_1(apoioA_1+1)
        break;
      case "A2_1":
        setA2_1(A2_1+1)
        break;
      case "apoioC_1Tela35":
        setapoioC_1Tela35(apoioC_1Tela35+1)
        break;
      case "D2_2":
        setD2_2(D2_2+1)
        break;
      case "apoioB_2":
        setapoioB_2(apoioB_2+1)
        break;
      case "O2_2":
        setO2_2(O2_2+1)
        break;
      case "apoioS_2Tela37":
        setapoioS_2Tela37(apoioS_2Tela37+1)
        break;
      case "C1_1":
        setC1_1(C1_1+1)
        break;
      case "D2_1Tela38":
        setD2_1Tela38(D2_1Tela38+1)
        break;
      case "B1_1":
        setB1_1(B1_1+1)
        break;
      case "apoioN_1Tela39":
        setapoioN_1Tela39(apoioN_1Tela39+1)
        break;
      case "E1_2Tela40":
        setE1_2Tela40(E1_2Tela40+1)
        break;
      case "F2_2":
        setF2_2(F2_2+1)
        break;
      case "apoioL_2Tela41":
        setapoioL_2Tela41(apoioL_2Tela41+1)
        break;
      case "M1_2":
        setM1_2(M1_2+1)
        break;
      case "apoioK_2":
        setapoioK_2(apoioK_2+1)
        break;
      case "E1_1":
        setE1_1(E1_1+1)
        break;
      case "apoioG_1Tela43":
        setapoioG_1Tela43(apoioG_1Tela43+1)
        break;
      case "O1_1":
        setO1_1(O1_1+1)
        break;
      case "apoioJ_1Tela44":
        setapoioJ_1Tela44(apoioJ_1Tela44+1)
        break;
      case "W1_1":
        setW1_1(W1_1+1)
        break;
      case "apoioL_1Tela45":
        setapoioL_1Tela45(apoioL_1Tela45+1)
        break;
      case "apoioH_1":
        setapoioH_1(apoioH_1+1)
        break;
      case "MN2_1":
        setMN2_1(MN2_1+1)
        break;
      case "apoioB_1Tela47":
        setapoioB_1Tela47(apoioB_1Tela47+1)
        break;
      case "IJ2_1":
        setIJ2_1(IJ2_1+1)
        break;
      case "apoioM_1Tela48":
        setapoioM_1Tela48(apoioM_1Tela48+1)
        break;
      case "D1_2":
        setD1_2(D1_2+1)
        break;
      case "apoioB_2Tela49":
        setapoioB_2Tela49(apoioB_2Tela49+1)
        break;
      case "G2_2":
        setG2_2(G2_2+1)
        break;
      case "apoioN_2Tela50":
        setapoioN_2Tela50(apoioN_2Tela50+1)
        break;
      case "J1_2":
        setJ1_2(J1_2+1)
        break;
      case "K2_2":
        setK2_2(K2_2+1)
        break;
      case "M2_2":
        setM2_2(M2_2+1)
        break;
      case "apoioK_2Tela52":
        setapoioK_2Tela52(apoioK_2Tela52+1)
        break;
      case "T1_2":
        setT1_2(T1_2+1)
        break;
      case "apoioH_2Tela53":
        setapoioH_2Tela53(apoioH_2Tela53+1)
        break;
      case "U1_2":
        setU1_2(U1_2+1)
        break;
      case "apoioQ_1":
        setapoioQ_1(apoioQ_1+1)
        break;
      case "F1_1":
        setF1_1(F1_1+1)
        break;
      case "M1_1Tela55":
        setM1_1Tela55(M1_1Tela55+1)
        break;
      case "Z1_1":
        setZ1_1(Z1_1+1)
        break;
      case "apoioI_1":
        setapoioI_1(apoioI_1+1)
        break;
      case "J2_2":
        setJ2_2(J2_2+1)
        break;
      case "K2_2Tela57":
        setK2_2Tela57(K2_2Tela57+1)
        break;
      case "U2_2":
        setU2_2(U2_2+1)
        break;
      case "apoioQ_1Tela58":
        setapoioQ_1Tela58(apoioQ_1Tela58+1)
        break;
      case "CD2_1":
        setCD2_1(CD2_1+1)
        break;
      case "apoioK_1Tela59":
        setapoioK_1Tela59(apoioK_1Tela59+1)
        break;
      case "Z2_1":
        setZ2_1(Z2_1+1)
        break;
      case "apoioI_1Tela60":
        setapoioI_1Tela60(apoioI_1Tela60+1)
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
      gravar(userlog.uid,A1_2,apoioF_2,apoioA_1,GH1_1,apoiol_2,E1_2,K1_2,L2_2,apoioU_2,Q2_2,apoioH_2,T2_2,R1_apoio_1,M1_1,apoioL_1,W2_1,apoioK_1,CD1_1,Q2_2Tela10,G1_1,Q2_1,R1_1,D1_1,S2_2,N2_2,apoioG_2Tela14,C2_2,A1_1,apoioC_1,apoioN_2,G1_2,apoioC_2,H2_2,apoioS_2,O1_2,apoioU_2Tela19,Q1_2,C2_1,D2_1,apoioG_1,E2_1,apoioJ_1,O2_1,MN1_1,apoioB_1,Q1_1,R1_1,IJ1_1,apoioM_1,A2_2,apoioF_2Tela26,S1_2,D1_1Tela27,N1_2,R1_2,C1_2,apoioG_2,B2_1,apoioN_1,F1_2,apoioL_2,H1_2,apoioC_2Tela32,L1_2,K1_2Tela33,GH2_1,apoioA_1,A2_1,apoioC_1Tela35,D2_2,apoioB_2,O2_2,apoioS_2Tela37,C1_1,D2_1Tela38,B1_1,apoioN_1Tela39,E1_2Tela40,apoioI_2,F2_2,apoioL_2Tela41,M1_2,apoioK_2,E1_1,apoioG_1Tela43,O1_1,apoioJ_1Tela44,W1_1,apoioL_1Tela45,G2_1,apoioH_1,MN2_1,apoioB_1Tela47,IJ2_1,apoioM_1Tela48,D1_2,apoioB_2Tela49,G2_2,apoioN_2Tela50,J1_2,K2_2,M2_2,apoioK_2Tela52,T1_2,apoioH_2Tela53,U1_2,apoioQ_1,F1_1,M1_1Tela55,Z1_1,apoioI_1,J2_2,K2_2,U2_2,apoioQ_1Tela58,CD2_1,apoioK_1Tela59,Z2_1,apoioI_1Tela60)
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
