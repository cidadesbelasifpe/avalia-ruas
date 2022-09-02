import { useState, useContext } from "react";
import React from "react";
import "./App.css";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../../services/firebase";
import {AuthGoogleContext} from "../../contexts/authGoogle"

import a1_2 from '../../cidadesinteligentes/tela1/A1_2.png'
import apoiof_2 from '../../cidadesinteligentes/tela1/apoioF_2.png'
//tela 2
import apoioa_1 from '../../cidadesinteligentes/tela2/apoioA_1.png'
import gh1_1 from '../../cidadesinteligentes/tela2/GH1_1.png'
//tela 3
import apoiol_2 from '../../cidadesinteligentes/tela3/apoioI_2.png'
import e1_2 from '../../cidadesinteligentes/tela3/E1_2.png'
//tela 4
import k1_2 from '../../cidadesinteligentes/tela4/K1_2.png'
import l2_2 from '../../cidadesinteligentes/tela4/L2_2.png'
//tela 5
import apoiou_2 from '../../cidadesinteligentes/tela5/apoioU_2.png'
import q2_2 from '../../cidadesinteligentes/tela5/Q2_2.png'
//tela 6
import apoioh_2 from '../../cidadesinteligentes/tela6/apoioH_2.png'
import t2_2 from '../../cidadesinteligentes/tela6/T2_2.png'
//tela 7
import r1_apoio_1 from '../../cidadesinteligentes/tela7/F2_1.png'
import m1_1 from '../../cidadesinteligentes/tela7/M1_1.png'
//tela 8
import apoiol_1 from '../../cidadesinteligentes/tela8/apoioL_1.png'
import w2_1 from '../../cidadesinteligentes/tela8/W2_1.png'
//tela 9
import apoiok_1 from '../../cidadesinteligentes/tela9/apoioK_1.png'
import cd1_1 from '../../cidadesinteligentes/tela9/CD1_1.png'
//tela 10
import apoioh_1tela10 from '../../cidadesinteligentes/tela10/apoioH_1.png'
import g1_1 from '../../cidadesinteligentes/tela10/G1_1.png'
//tela 11
import q2_1 from '../../cidadesinteligentes/tela11/Q2_1.png'
import r1_1 from '../../cidadesinteligentes/tela11/R1_1.png'
//tela 12
import d1_1 from '../../cidadesinteligentes/tela12/D1_1.png'
import s2_2 from '../../cidadesinteligentes/tela12/S2_2.png'
//tela 13
import n2_2 from '../../cidadesinteligentes/tela13/N2_2.png'
import r1_apoio from '../../cidadesinteligentes/tela13/R1_apoio.png'
//tela 14
import apoiog_2tela14 from '../../cidadesinteligentes/tela14/apoioG_2.png'
import c2_2 from '../../cidadesinteligentes/tela14/C2_2.png'
//tela 15
import a1_1 from '../../cidadesinteligentes/tela15/A1_1.png'
import apoioc_1 from '../../cidadesinteligentes/tela15/apoioC_1.png'
//tela 16
import apoion_2 from '../../cidadesinteligentes/tela16/apoioN_2.png'
import g1_2 from '../../cidadesinteligentes/tela16/G1_2.png'
//tela 17
import apoioc_2 from '../../cidadesinteligentes/tela17/apoioC_2.png'
import h2_2 from '../../cidadesinteligentes/tela17/H2_2.png'
//tela 18
import apoios_2 from '../../cidadesinteligentes/tela18/apoioS_2.png'
import o1_2 from '../../cidadesinteligentes/tela18/O1_2.png'
//tela 19
import apoiou_2tela19 from '../../cidadesinteligentes/tela19/apoioU_2.png'
import q1_2 from '../../cidadesinteligentes/tela19/Q1_2.png'
//tela 20
import c2_1 from '../../cidadesinteligentes/tela20/C2_1.png'
import d2_1 from '../../cidadesinteligentes/tela20/D2_1.png'
//tela 21
import apoiog_1 from '../../cidadesinteligentes/tela21/apoioG_1.png'
import e2_1 from '../../cidadesinteligentes/tela21/E2_1.png'
//tela 22
import apoioj_1 from '../../cidadesinteligentes/tela22/apoioJ_1.png'
import o2_1 from '../../cidadesinteligentes/tela22/O2_1.png'
//tela 23
import mn1_1 from '../../cidadesinteligentes/tela23/MN1_1.png'
import apoiob_1 from '../../cidadesinteligentes/tela23/apoioB_1.png'
//tela 24
import q1_1 from '../../cidadesinteligentes/tela24/Q1_1.png'
import r1_1tela24 from '../../cidadesinteligentes/tela24/R1_1.png'
//tela 25
import ij1_1 from '../../cidadesinteligentes/tela25/IJ1_1.png'
import apoiom_1 from '../../cidadesinteligentes/tela25/apoioM_1.png'
//tela 26
import a2_2 from '../../cidadesinteligentes/tela26/A2_2.png'
import apoiof_2tela26 from '../../cidadesinteligentes/tela26/apoioF_2.png'
//tela 27
import d1_1tela27 from '../../cidadesinteligentes/tela27/D1_1.png'
import s1_2 from '../../cidadesinteligentes/tela27/S1_2.png'
//tela 28
import n1_2 from '../../cidadesinteligentes/tela28/N1_2.png'
import r1_2 from '../../cidadesinteligentes/tela28/R1_2.png'
//tela 29
import c1_2 from '../../cidadesinteligentes/tela29/C1_2.png'
import apoiog_2 from '../../cidadesinteligentes/tela29/apoioG_2.png'
//tela 30
import apoion_1 from '../../cidadesinteligentes/tela30/apoioN_1.png'
import b2_1 from '../../cidadesinteligentes/tela30/B2_1.png'
//tela 31
import apoiol_2tela31 from '../../cidadesinteligentes/tela31/apoioL_2.png'
import f1_2 from '../../cidadesinteligentes/tela31/F1_2.png'
//tela 32
import apoioc_2tela32 from '../../cidadesinteligentes/tela32/apoioC_2.png'
import h1_2 from '../../cidadesinteligentes/tela32/H1_2.png'
//tela 33
import l1_2 from '../../cidadesinteligentes/tela33/L1_2.png'
import k1_2tela33 from '../../cidadesinteligentes/tela33/K1_2.png'
//tela 34
import apoioa_1tela34 from '../../cidadesinteligentes/tela34/apoioA_1.png'
import gh2_1 from '../../cidadesinteligentes/tela34/GH2_1.png'
//tela 35
import a2_1 from '../../cidadesinteligentes/tela35/A2_1.png'
import apoioc_1tela35 from '../../cidadesinteligentes/tela35/apoioC_1.png'
//tela 36
import apoiob_2 from '../../cidadesinteligentes/tela36/apoioB_2.png'
import d2_2 from '../../cidadesinteligentes/tela36/D2_2.png'
//tela 37
import apoios_2tela37 from '../../cidadesinteligentes/tela37/apoioS_2.png'
import o2_2 from '../../cidadesinteligentes/tela37/O2_2.png'
//tela 38
import c1_1 from '../../cidadesinteligentes/tela38/C1_1.png'
import d2_1tela38 from '../../cidadesinteligentes/tela38/D2_1.png'
//tela 39
import apoion_1tela39 from '../../cidadesinteligentes/tela39/apoioN_1.png'
import b1_1 from '../../cidadesinteligentes/tela39/B1_1.png'
//tela 40
import apoioi_2 from '../../cidadesinteligentes/tela40/apoioI_2.png'
import e1_2tela40 from '../../cidadesinteligentes/tela40/E1_2.png'
//tela 41
import apoiol_2tela41 from '../../cidadesinteligentes/tela41/apoioL_2.png'
import f2_2 from '../../cidadesinteligentes/tela41/F2_2.png'
//tela 42
import apoiok_2 from '../../cidadesinteligentes/tela42/apoioK_2.png'
import m1_2 from '../../cidadesinteligentes/tela42/M1_2.png'
//tela 43
import apoiog_1tela43 from '../../cidadesinteligentes/tela43/apoioG_1.png'
import e1_1 from '../../cidadesinteligentes/tela43/E1_1.png'
//tela 44
import apoioj_1tela44 from '../../cidadesinteligentes/tela44/apoioJ_1.png'
import o1_1 from '../../cidadesinteligentes/tela44/O1_1.png'
//tela 45
import apoiol_1tela45 from '../../cidadesinteligentes/tela45/apoioL_1.png'
import w1_1 from '../../cidadesinteligentes/tela45/W1_1.png'
//tela 46
import g2_1 from '../../cidadesinteligentes/tela46/G2_1.png'
import apoioh_1 from '../../cidadesinteligentes/tela46/apoioH_1.png'
//tela 47
import apoiob_1tela47 from '../../cidadesinteligentes/tela47/apoioB_1.png'
import mn2_1 from '../../cidadesinteligentes/tela47/MN2_1.png'
//tela 48
import apoiom_1tela48 from '../../cidadesinteligentes/tela48/apoioM_1.png'
import ij2_1 from '../../cidadesinteligentes/tela48/IJ2_1.png'
//tela 49
import apoiob_2tela49 from '../../cidadesinteligentes/tela49/apoioB_2.png'
import d1_2 from '../../cidadesinteligentes/tela49/D1_2.png'
//tela 50
import apoion_2tela50 from '../../cidadesinteligentes/tela50/apoioN_2.png'
import g2_2 from '../../cidadesinteligentes/tela50/G2_2.png'
//tela 51
import j1_2 from '../../cidadesinteligentes/tela51/J1_2.png'
import k2_2 from '../../cidadesinteligentes/tela51/K2_2.png'
//tela 52
import apoiok_2tela52 from '../../cidadesinteligentes/tela52/apoioK_2.png'
import m2_2 from '../../cidadesinteligentes/tela52/M2_2.png'
//tela 53
import apoioh_2tela53 from '../../cidadesinteligentes/tela53/apoioH_2.png'
import t1_2 from '../../cidadesinteligentes/tela53/T1_2.png'
//tela 54
import apoioq_1 from '../../cidadesinteligentes/tela54/apoioQ_1.png'
import u1_2 from '../../cidadesinteligentes/tela54/U1_2.png'
//tela 55
import f1_1 from '../../cidadesinteligentes/tela55/F1_1.png'
import m1_1tela55 from '../../cidadesinteligentes/tela55/M1_1.png'
//tela 56
import apoioi_1 from '../../cidadesinteligentes/tela56/apoioI_1.png'
import z1_1 from '../../cidadesinteligentes/tela56/Z1_1.png'
//tela 57
import j2_2 from '../../cidadesinteligentes/tela57/J2_2.png'
import k2_2tela57 from '../../cidadesinteligentes/tela57/K2_2.png'
//tela 58
import apoioq_1tela58 from '../../cidadesinteligentes/tela58/apoioQ_1.png'
import u2_2 from '../../cidadesinteligentes/tela58/U2_2.png'
//tela 59
import apoiok_1tela59 from '../../cidadesinteligentes/tela59/apoioK_1.png'
import cd2_1 from '../../cidadesinteligentes/tela59/CD2_1.png'
//tela 60
import apoioi_1tela60 from '../../cidadesinteligentes/tela60/apoioI_1.png'
import z2_1 from '../../cidadesinteligentes/tela60/Z2_1.png'

const questions = [
  {
    answeroptions: [
      {image: <img src= {a1_2}/>,id_image:"a1_2"},
      {image: <img src= {apoiof_2}/>, id_image:"apoiof_2"}

    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoioa_1}/>,id_image:"apoioa_1"},
      {image: <img src= {gh1_1}/>, id_image:"gh1_1"}

    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiol_2}/>,id_image:"apoiol_2"},
      {image: <img src= {e1_2}/>, id_image:"e1_2"}

    ],
  },
 {
    answeroptions: [
      {image: <img src= {k1_2}/>,id_image:"k1_2"},
      {image: <img src= {l2_2}/>, id_image:"l2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiou_2}/>,id_image:"apoiou_2"},
      {image: <img src= {q2_2}/>, id_image:"q2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoioh_2}/>,id_image:"apoioh_2"},
      {image: <img src= {t2_2}/>, id_image:"t2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {r1_apoio_1}/>,id_image:"r1_apoio_1"},
      {image: <img src= {m1_1}/>, id_image:"m1_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiol_1}/>,id_image:"apoiol_1"},
      {image: <img src= {w2_1}/>, id_image:"w2_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiok_1}/>,id_image:"apoiok_1"},
      {image: <img src= {cd1_1}/>, id_image:"cd1_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoioh_1tela10}/>,id_image:"apoioh_1tela10"},
      {image: <img src= {g1_1}/>, id_image:"g1_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {q2_1}/>,id_image:"q2_1"},
      {image: <img src= {r1_1}/>, id_image:"r1_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {d1_1}/>,id_image:"d1_1"},
      {image: <img src= {s2_2}/>, id_image:"s2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {n2_2}/>,id_image:"n2_2"},
      {image: <img src= {r1_apoio}/>, id_image:"r1_apoio"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiog_2tela14}/>,id_image:"apoiog_2tela14"},
      {image: <img src= {c2_2}/>, id_image:"c2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {a1_1}/>,id_image:"a1_1"},
      {image: <img src= {apoioc_1}/>, id_image:"apoioc_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoion_2}/>,id_image:"apoion_2"},
      {image: <img src= {g1_2}/>, id_image:"g1_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoioc_2}/>,id_image:"apoioc_2"},
      {image: <img src= {h2_2}/>, id_image:"h2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoios_2}/>,id_image:"apoios_2"},
      {image: <img src= {o1_2}/>, id_image:"o1_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiou_2tela19}/>,id_image:"apoiou_2tela19"},
      {image: <img src= {q1_2}/>, id_image:"q1_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {c2_1}/>,id_image:"c2_1"},
      {image: <img src= {d2_1}/>, id_image:"d2_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoiog_1}/>,id_image:"apoiog_1"},
      {image: <img src= {e2_1}/>, id_image:"e2_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {apoioj_1}/>,id_image:"apoioj_1"},
      {image: <img src= {o2_1}/>, id_image:"o2_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {mn1_1}/>,id_image:"mn1_1"},
      {image: <img src= {apoiob_1}/>, id_image:"apoiob_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {q1_1}/>,id_image:"q1_1"},
      {image: <img src= {r1_1tela24}/>, id_image:"r1_1tela24"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {ij1_1}/>,id_image:"ij1_1"},
      {image: <img src= {apoiom_1}/>, id_image:"apoiom_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {a2_2}/>,id_image:"a2_2"},
      {image: <img src= {apoiof_2tela26}/>, id_image:"apoiof_2tela26"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {s1_2}/>,id_image:"s1_2"},
      {image: <img src= {d1_1tela27}/>, id_image:"d1_1tela27"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {n1_2}/>,id_image:"n1_2"},
      {image: <img src= {r1_2}/>, id_image:"r1_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {c1_2}/>,id_image:"c1_2"},
      {image: <img src= {apoiog_2}/>, id_image:"apoiog_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {b2_1}/>,id_image:"b2_1"},
      {image: <img src= {apoion_1}/>, id_image:"apoion_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {f1_2}/>,id_image:"f1_2"},
      {image: <img src= {apoiol_2tela31}/>, id_image:"apoiol_2tela31"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {h1_2}/>,id_image:"h1_2"},
      {image: <img src= {apoioc_2tela32}/>, id_image:"apoioc_2tela32"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {l1_2}/>,id_image:"l1_2"},
      {image: <img src= {k1_2tela33}/>, id_image:"k1_2tela33"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {gh2_1}/>,id_image:"gh2_1"},
      {image: <img src= {apoioa_1tela34}/>, id_image:"apoioa_1tela34"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {a2_1}/>,id_image:"a2_1"},
      {image: <img src= {apoioc_1tela35}/>, id_image:"apoioc_1tela35"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {d2_2}/>,id_image:"d2_2"},
      {image: <img src= {apoiob_2}/>, id_image:"apoiob_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {o2_2}/>,id_image:"o2_2"},
      {image: <img src= {apoios_2tela37}/>, id_image:"apoios_2tela37"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {c1_1}/>,id_image:"c1_1"},
      {image: <img src= {d2_1tela38}/>, id_image:"d2_1tela38"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {b1_1}/>,id_image:"b1_1"},
      {image: <img src= {apoion_1tela39}/>, id_image:"apoion_1tela39"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {e1_2tela40}/>,id_image:"e1_2tela40"},
      {image: <img src= {apoioi_2}/>, id_image:"apoioi_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {f2_2}/>,id_image:"f2_2"},
      {image: <img src= {apoiol_2tela41}/>, id_image:"apoiol_2tela41"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {m1_2}/>,id_image:"m1_2"},
      {image: <img src= {apoiok_2}/>, id_image:"apoiok_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {e1_1}/>,id_image:"e1_1"},
      {image: <img src= {apoiog_1tela43}/>, id_image:"apoiog_1tela43"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {o1_1}/>,id_image:"o1_1"},
      {image: <img src= {apoioj_1tela44}/>, id_image:"apoioj_1tela44"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {w1_1}/>,id_image:"w1_1"},
      {image: <img src= {apoiol_1tela45}/>, id_image:"apoiol_1tela45"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {g2_1}/>,id_image:"g2_1"},
      {image: <img src= {apoioh_1}/>, id_image:"apoioh_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {mn2_1}/>,id_image:"mn2_1"},
      {image: <img src= {apoiob_1tela47}/>, id_image:"apoiob_1tela47"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {ij2_1}/>,id_image:"ij2_1"},
      {image: <img src= {apoiom_1tela48}/>, id_image:"apoiom_1tela48"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {d1_2}/>,id_image:"d1_2"},
      {image: <img src= {apoiob_2tela49}/>, id_image:"apoiob_2tela49"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {g2_2}/>,id_image:"g2_2"},
      {image: <img src= {apoion_2tela50}/>, id_image:"apoion_2tela50"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {j1_2}/>,id_image:"j1_2"},
      {image: <img src= {k2_2}/>, id_image:"k2_2"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {m2_2}/>,id_image:"m2_2"},
      {image: <img src= {apoiok_2tela52}/>, id_image:"apoiok_2tela52"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {t1_2}/>,id_image:"t1_2"},
      {image: <img src= {apoioh_2tela53}/>, id_image:"apoioh_2tela53"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {u1_2}/>,id_image:"u1_2"},
      {image: <img src= {apoioq_1}/>, id_image:"apoioq_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {f1_1}/>,id_image:"f1_1"},
      {image: <img src= {m1_1tela55}/>, id_image:"m1_1tela55"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {z1_1}/>,id_image:"z1_1"},
      {image: <img src= {apoioi_1}/>, id_image:"apoioi_1"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {j2_2}/>,id_image:"j2_2"},
      {image: <img src= {k2_2tela57}/>, id_image:"k2_2tela57"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {u2_2}/>,id_image:"u2_2"},
      {image: <img src= {apoioq_1tela58}/>, id_image:"apoioq_1tela58"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {cd2_1}/>,id_image:"cd2_1"},
      {image: <img src= {apoiok_1tela59}/>, id_image:"apoiok_1tela59"}
     
    ],
  },
  {
    answeroptions: [
      {image: <img src= {z2_1}/>,id_image:"z2_1"},
      {image: <img src= {apoioi_1tela60}/>, id_image:"apoioi_1tela60"}
     
    ],
  },
];



export const Home = () =>{  
  const {user} = useContext(AuthGoogleContext)
  function gravar(userId,a1_2,apoiof_2,apoioa_1,gh1_1,apoiol_2,e1_2,k1_2,l2_2,apoiou_2,q2_2,apoioh_2,t2_2,r1_apoio_1,m1_1,apoiol_1,w2_1,apoiok_1,cd1_1,apoioh_1tela10,g1_1,q2_1,r1_1,d1_1,s2_2,n2_2,apoiog_2tela14,c2_2,a1_1,apoioc_1,apoion_2,g1_2,apoioc_2,h2_2,apoios_2,o1_2,apoiou_2tela19,q1_2,c2_1,d2_1,apoiog_1,e2_1,apoioj_1,o2_1,mn1_1,apoiob_1,q1_1,r1_1tela24,ij1_1,apoiom_1,a2_2,apoiof_2tela26,s1_2,d1_1tela27,n1_2,r1_2,c1_2,apoiog_2,b2_1,apoion_1,f1_2,apoiol_2tela31,h1_2,apoioc_2tela32,l1_2,k1_2tela33,gh2_1,apoioa_1tela34,a2_1,apoioc_1tela35,d2_2,apoiob_2,o2_2,apoios_2tela37,c1_1,d2_1tela38,b1_1,apoion_1tela39,e1_2tela40,apoioi_2,f2_2,apoiol_2tela41,m1_2,apoiok_2,e1_1,apoiog_1tela43,o1_1,apoioj_1tela44,w1_1,apoiol_1tela45,g2_1,apoioh_1,mn2_1,apoiob_1tela47,ij2_1,apoiom_1tela48,d1_2,apoiob_2tela49,g2_2,apoion_2tela50,j1_2,k2_2,m2_2,apoiok_2tela52,t1_2,apoioh_2tela53,u1_2,apoioq_1,f1_1,m1_1tela55,z1_1,apoioi_1,j2_2,k2_2tela57,u2_2,apoioq_1tela58,cd2_1,apoiok_1tela59,z2_1,apoioi_1tela60) {
    const db = getDatabase(app);
    set(ref(db, 'votos/' + userId), {
      A1_2:a1_2,
      apoioF_2:apoiof_2,
      apoioA_1:apoioa_1,
      GH1_1:gh1_1,
      apoioL_2:apoiol_2,
      E1_2:e1_2,
      K1_2:k1_2,
      L2_2:l2_2,
      apoioU_2:apoiou_2,                                                            
      Q2_2:q2_2,                                                            
      apoioH_2:apoioh_2,                                                            
      T2_2:t2_2,                                                            
      F2_1:r1_apoio_1,                                                            
      M1_1:m1_1,                                                            
      apoioL_1:apoiol_1,                                                            
      W2_1:w2_1,                                                            
      apoioK_1:apoiok_1,                                                            
      CD1_1:cd1_1,                                                            
      apoioH_1Tela10:apoioh_1tela10,                                                            
      G1_1:g1_1,                                                            
      Q2_1:q2_1,                                                            
      R1_1:r1_1,                                                                                
      D1_1:d1_1,                                                            
      S2_2:s2_2,                                                            
      N2_2:n2_2,                                                      
      apoioG_2Tela14:apoiog_2tela14,
      C2_2:c2_2,                                                            
      A1_1:a1_1,                                                        
      apoioC_1:apoioc_1,                                                            
      apoioN_2:apoion_2,                                                        
      G1_2:g1_2,                                                            
      apoioC_2:apoioc_2,                                                            
      H2_2:h2_2,                                                            
      apoioS_2:apoios_2,                                                        
      O1_2:o1_2,                                                            
      apoioU_2Tela19:apoiou_2tela19,                                                            
      Q1_2:q1_2,                                                            
      C2_1:c2_1,                                                            
      D2_1:d2_1,                                                          
      apoioG_1:apoiog_1,                                                        
      E2_1:e2_1,                                                            
      apoioJ_1:apoioj_1,                                                            
      O2_1:o2_1,
      MN1_1:mn1_1,
      apoioB_1:apoiob_1,
      Q1_1:q1_1,
      R1_1Tela24:r1_1tela24,
      IJ1_1:ij1_1,
      apoioM_1:apoiom_1,
      A2_2:a2_2,
      apoioF_2Tela26:apoiof_2tela26,
      S1_2:s1_2,
      D1_1Tela27:d1_1tela27,
      N1_2:n1_2,
      R1_2:r1_2,
      C1_2:c1_2,
      ApoioG_2:apoiog_2,
      B2_1:b2_1,
      apoioN_1:apoion_1,
      F1_2:f1_2,
      ApoioL_2Tela31:apoiol_2tela31,
      H1_2:h1_2,
      apoioC_2Tela32:apoioc_2tela32,
      L1_2:l1_2,
      K1_2Tela33:k1_2tela33,
      GH2_1:gh2_1,
      apoioA_1tela34:apoioa_1tela34,
      A2_1:a2_1,
      apoioC_1Tela35:apoioc_1tela35,
      D2_2:d2_2,
      apoioB_2:apoiob_2,
      O2_2:o2_2,
      apoioS_2Tela37:apoios_2tela37,
      C1_1:c1_1,
      D2_1Tela38:d2_1tela38,
      B1_1:b1_1,
      apoioN_1Tela39:apoion_1tela39,
      E1_2Tela40:e1_2tela40,
      apoioI_2:apoioi_2,
      F2_2:f2_2,
      apoioL_2Tela41:apoiol_2tela41,
      M1_2:m1_2,
      apoioK_2:apoiok_2,
      E1_1:e1_1,
      apoioG_1Tela43:apoiog_1tela43,
      O1_1:o1_1,
      apoioJ_1Tela44:apoioj_1tela44,
      W1_1:w1_1,
      apoioL_1Tela45:apoiol_1tela45,
      G2_1:g2_1,
      apoioH_1:apoioh_1,
      MN2_1:mn2_1,
      apoioB_1Tela47:apoiob_1tela47,
      IJ2_1:ij2_1,
      apoioM_1Tela48:apoiom_1tela48,
      D1_2:d1_2,
      apoioB_2Tela49:apoiob_2tela49,
      G2_2:g2_2,
      apoioN_2Tela50:apoion_2tela50,
      J1_2:j1_2,
      K2_2:k2_2,
      M2_2:m2_2,
      apoioK_2Tela52:apoiok_2tela52,
      T1_2:t1_2,
      apoioH_2Tela53:apoioh_2tela53,
      U1_2:u1_2,
      apoioQ_1:apoioq_1,
      F1_1:f1_1,
      M1_1Tela55:m1_1tela55,
      Z1_1:z1_1,
      apoioI_1:apoioi_1,
      J2_2:j2_2,
      K2_2Tela57:k2_2tela57,
      U2_2:u2_2,
      apoioQ_1Tela58:apoioq_1tela58,
      CD2_1:cd2_1,
      apoioK_1Tela59:apoiok_1tela59,
      Z2_1:z2_1,
      apoioI_1Tela60:apoioi_1tela60

    }).then(() => {
       
    })
    .catch((error) => {
      // The write failed...
    });
  }
 
  const [end, setend] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [a1_2,seta1_2] = useState(0);
  const [apoiof_2,setapoiof_2] = useState(0);
  const [apoioa_1,setapoioa_1] = useState(0);
  const [gh1_1,setgh1_1] = useState(0);
  const [apoiol_2,setapoiol_2] = useState(0);
  const [e1_2,sete1_2] = useState(0);
  const [k1_2,setk1_2] = useState(0);
  const [l2_2,setl2_2] = useState(0);
  const [apoiou_2tela19,setapoiou_2tela19] = useState(0);
  const [apoioh_1tela10,setapoioh_1tela10] = useState(0);
  const [apoioh_2,setapoioh_2] = useState(0);
  const [t2_2,sett2_2] = useState(0);
  const [r1_apoio_1,setr1_apoio_1] = useState(0);
  const [m1_1,setm1_1] = useState(0);
  const [apoiol_1,setapoiol_1] = useState(0);
  const [w2_1,setw2_1] = useState(0);
  const [apoiok_1,setapoiok_1] = useState(0);
  const [cd1_1,setcd1_1] = useState(0);
  const [q2_2,setq2_2] = useState(0);
  const [g1_1,setg1_1] = useState(0);
  const [q2_1,setq2_1] = useState(0);
  const [r1_1,setr1_1] = useState(0);
  const [d1_1,setd1_1] = useState(0);
  const [s2_2,sets2_2] = useState(0);
  const [n2_2,setn2_2] = useState(0);
  const [apoiog_2tela14,setapoiog_2tela14] = useState(0);
  const [c2_2,setc2_2] = useState(0);
  const [a1_1,seta1_1] = useState(0);
  const [apoioc_1,setapoioc_1] = useState(0);
  const [apoion_2,setapoion_2] = useState(0);
  const [g1_2,setg1_2] = useState(0);
  const [apoioc_2,setapoioc_2] = useState(0);
  const [h2_2,seth2_2] = useState(0);
  const [apoios_2,setapoios_2] = useState(0);
  const [o1_2,seto1_2] = useState(0);
  const [apoiou_2,setapoiou_2] = useState(0);
  const [q1_2,setq1_2] = useState(0);
  const [c2_1,setc2_1] = useState(0);
  const [d2_1,setd2_1] = useState(0);
  const [apoiog_1,setapoiog_1] = useState(0);
  const [e2_1,sete2_1] = useState(0);
  const [apoioj_1,setapoioj_1] = useState(0);
  const [mn1_1,setmn1_1] = useState(0);
  const [apoiob_1,setapoiob_1] = useState(0);
  const [q1_1,setq1_1] = useState(0);
  const [r1_1tela24,setr1_1tela24] = useState(0);
  const [ij1_1,setij1_1] = useState(0);
  const [apoiom_1,setapoiom_1] = useState(0);
  const [a2_2,seta2_2] = useState(0);
  const [apoiof_2tela26,setapoiof_2tela26] = useState(0);
  const [s1_2,sets1_2] = useState(0);
  const [d1_1tela27,setd1_1tela27] = useState(0);
  const [n1_2,setn1_2] = useState(0);
  const [r1_2,setr1_2] = useState(0);
  const [c1_2,setc1_2] = useState(0);
  const [apoiog_2,setapoiog_2] = useState(0);
  const [b2_1,setb2_1] = useState(0);
  const [apoion_1,setapoion_1] = useState(0);
  const [f1_2,setf1_2] = useState(0);
  const [apoiol_2tela31,setapoiol_2tela31] = useState(0);
  const [h1_2,seth1_2] = useState(0);
  const [apoioc_2tela32,setapoioc_2tela32] = useState(0);
  const [l1_2,setl1_2] = useState(0);
  const [k1_2tela33,setk1_2tela33] = useState(0);
  const [gh2_1,setgh2_1] = useState(0);
  const [apoioa_1tela34,setapoioa_1tela34] = useState(0);
  const [a2_1,seta2_1] = useState(0);
  const [apoioc_1tela35,setapoioc_1tela35] = useState(0);
  const [d2_2,setd2_2] = useState(0);
  const [apoiob_2,setapoiob_2] = useState(0);
  const [apoios_2tela37,setapoios_2tela37] = useState(0);
  const [c1_1,setc1_1] = useState(0);
  const [d2_1tela38,setd2_1tela38] = useState(0);
  const [b1_1,setb1_1] = useState(0);
  const [apoion_1tela39,setapoion_1tela39] = useState(0);
  const [e1_2tela40,sete1_2tela40] = useState(0);
  const [apoioi_2,setapoioi_2] = useState(0);
  const [f2_2,setf2_2] = useState(0);
  const [apoiol_2tela41,setapoiol_2tela41] = useState(0);
  const [m1_2,setm1_2] = useState(0);
  const [apoiok_2,setapoiok_2] = useState(0);
  const [e1_1,sete1_1] = useState(0);
  const [apoiog_1tela43,setapoiog_1tela43] = useState(0);
  const [o1_1,seto1_1] = useState(0);
  const [apoioj_1tela44,setapoioj_1tela44] = useState(0);
  const [w1_1,setw1_1] = useState(0);
  const [apoiol_1tela45,setapoiol_1tela45] = useState(0);
  const [g2_1,setg2_1] = useState(0);
  const [apoioh_1,setapoioh_1] = useState(0);
  const [mn2_1,setmn2_1] = useState(0);
  const [apoiob_1tela47,setapoiob_1tela47] = useState(0);
  const [ij2_1,setij2_1] = useState(0);
  const [apoiom_1tela48,setapoiom_1tela48] = useState(0);
  const [d1_2,setd1_2] = useState(0);
  const [apoiob_2tela49,setapoiob_2tela49] = useState(0);
  const [apoion_2tela50,setapoion_2tela50] = useState(0);
  const [j1_2,setj1_2] = useState(0);
  const [k2_2,setk2_2] = useState(0);
  const [m2_2,setm2_2] = useState(0);
  const [apoiok_2tela52,setapoiok_2tela52] = useState(0);
  const [t1_2,sett1_2] = useState(0);
  const [apoioh_2tela53,setapoioh_2tela53] = useState(0);
  const [u1_2,setu1_2] = useState(0);
  const [apoioq_1,setapoioq_1] = useState(0);
  const [f1_1,setf1_1] = useState(0);
  const [m1_1tela55,setm1_1tela55] = useState(0);
  const [z1_1,setz1_1] = useState(0);
  const [apoioi_1,setapoioi_1] = useState(0);
  const [j2_2,setj2_2] = useState(0);
  const [k2_2tela57,setk2_2tela57] = useState(0);
  const [u2_2,setu2_2] = useState(0);
  const [apoioq_1tela58,setapoioq_1tela58] = useState(0);
  const [cd2_1,setcd2_1] = useState(0);
  const [apoiok_1tela59,setapoiok_1tela59] = useState(0);
  const [z2_1,setz2_1] = useState(0);
  const [apoioi_1tela60,setapoioi_1tela60] = useState(0);
  const [o2_1,seto2_1] = useState(0);
  const [o2_2,seto2_2] = useState(0);
  const [g2_2,setg2_2] = useState(0);
  const [userlog, setuserlog] = useState(null);

  const handleAnswer=(answeroption) => {
    setuserlog(user)
    switch (answeroption) {
      case "a1_2":
        seta1_2(a1_2+1)
        break;
      case "apoiof_2":
        setapoiof_2(apoiof_2+1)
        break;
      case "apoioa_1":
        setapoioa_1(apoioa_1+1)
        break;
      case "gh1_1":
        setgh1_1(gh1_1+1)
        break;
      case "apoiol_2":
        setapoiol_2(apoiol_2+1)
        break;
      case "e1_2":
        sete1_2(e1_2+1)
        break;
      case "k1_2":
        setk1_2(k1_2+1)
        break;
      case "l2_2":
        setl2_2(l2_2+1)
        break;
      case "apoiou_2":
        setapoiou_2(apoiou_2+1)
        break;                                                          
      case "q2_2":
        setq2_2(q2_2+1)
        break;                                                            
      case"apoioh_2":
        setapoioh_2(apoioh_2+1)
        break;                                                          
      case "t2_2":
        sett2_2(t2_2+1)
        break;                                                            
      case"r1_apoio_1":
        setr1_apoio_1(r1_apoio_1+1)
        break;                                                            
      case"m1_1":
        setm1_1(m1_1+1)
        break;                                                            
      case"apoiol_1":
        setapoiol_1(apoiol_1+1)
        break;                                                            
      case"w2_1":
        setw2_1(w2_1+1)
        break;                                                            
      case "apoiok_1":
        setapoiok_1(apoiok_1+1)
        break;                                                            
      case"cd1_1":
        setcd1_1(cd1_1+1)
        break;                                                            
      case"apoioh_1tela10":
        setapoioh_1tela10(apoioh_1tela10+1)
        break;
      case "g1_1":
        setg1_1(g1_1+1)
        break;                                                            
      case "q2_1":
        setq2_1(q2_1+1)
        break;                                                            
      case"r1_1":
        setr1_1(r1_1+1)
        break;                                                        
      case"d1_1":
        setd1_1(d1_1+1)
        break;                                                            
      case"s2_2":
        sets2_2(s2_2+1)
        break;                                                            
      case "n2_2":
        setn2_2(n2_2+1)
        break;                                                      
      case"apoiog_2tela14":
        setapoiog_2tela14(apoiog_2tela14+1)
        break;                                                        
      case "c2_2":
        setc2_2(c2_2+1)
        break;
                                                                    
      case "a1_1":
        seta1_1(a1_1+1)
        break;                                                        
      case "apoioc_1":
        setapoioc_1(apoioc_1+1)
        break;                                                            
      case "apoion_2":
        setapoion_2(apoion_2+1)
        break;                                                        
      case "g1_2":
        setg1_2(g1_2+1)
        break;                                                            
      case "apoioc_2":
        setapoioc_2(apoioc_2+1)
        break;                                                            
      case "h2_2":
        seth2_2(h2_2+1)
        break;                                                            
      case "apoios_2":
        setapoios_2(apoios_2+1)
        break;                                                        
      case "o1_2":
        seto1_2(o1_2+1)
        break;                                                            
      case "apoiou_2tela19":
        setapoiou_2tela19(apoiou_2tela19+1)
        break;                                                            
      case "q1_2":
        setq1_2(q1_2+1)
        break;                                                            
      case "c2_1":
        setc2_1(c2_1+1)
        break;                                                            
      case "d2_1":
        setd2_1(d2_1+1)
        break;                                                          
      case "apoiog_1":
        setapoiog_1(apoiog_1+1)
        break;                                                        
      case "e2_1":
        sete2_1(e2_1+1)
        break;                                                            
      case "apoioj_1":
        setapoioj_1(apoioj_1+1)
        break;
        case "o2_1":
        seto2_1(o2_1+1)
        break;
      case "mn1_1":
        setmn1_1(mn1_1+1)
        break;
      case "apoiob_1":
        setapoiob_1(apoiob_1+1)
        break; 
      case "q1_1":
        setq1_1(q1_1+1)
        break;
      case "r1_1tela24":
        setr1_1tela24(r1_1tela24+1)
        break;
      case "ij1_1":
        setij1_1(ij1_1+1)
        break;
      case "apoiom_1":
        setapoiom_1(apoiom_1+1)
        break;
      case "a2_2":
        seta2_2(a2_2+1)
        break;
      case "apoiof_2tela26":
        setapoiof_2tela26(apoiof_2tela26+1)
        break;
      case "s1_2":
        sets1_2(s1_2+1)
        break;
      case "d1_1tela27":
        setd1_1tela27(d1_1tela27+1)
        break;
      case "n1_2":
        setn1_2(n1_2+1)
        break;
      case "r1_2":
        setr1_2(r1_2+1)
        break;
      case "c1_2":
        setc1_2(c1_2+1)
        break;
      case "apoiog_2":
        setapoiog_2(apoiog_2+1)
        break;
      case "b2_1":
        setb2_1(b2_1+1)
        break;
      case "apoion_1":
        setapoion_1(apoion_1+1)
        break;
      case "f1_2":
        setf1_2(f1_2+1)
        break;
        case "apoiol_2tela31":
        setapoiol_2tela31(apoiol_2tela31+1)
        break;
      case "h1_2":
        seth1_2(h1_2+1)
        break;
      case "apoioc_2tela32":
        setapoioc_2tela32(apoioc_2tela32+1)
        break;
      case "l1_2":
        setl1_2(l1_2+1)
        break;
      case "k1_2tela33":
        setk1_2tela33(k1_2tela33+1)
        break;
      case "gh2_1":
        setgh2_1(gh2_1+1)
        break;
      case "apoioa_1tela34":
        setapoioa_1tela34(apoioa_1tela34+1)
        break;
      case "a2_1":
        seta2_1(a2_1+1)
        break;
      case "apoioc_1tela35":
        setapoioc_1tela35(apoioc_1tela35+1)
        break;
      case "d2_2":
        setd2_2(d2_2+1)
        break;
      case "apoiob_2":
        setapoiob_2(apoiob_2+1)
        break;
      case "o2_2":
        seto2_2(o2_2+1)
        break;
      case "apoios_2tela37":
        setapoios_2tela37(apoios_2tela37+1)
        break;
      case "c1_1":
        setc1_1(c1_1+1)
        break;
      case "d2_1tela38":
        setd2_1tela38(d2_1tela38+1)
        break;
      case "b1_1":
        setb1_1(b1_1+1)
        break;
      case "apoion_1tela39":
        setapoion_1tela39(apoion_1tela39+1)
        break;
      case "e1_2tela40":
        sete1_2tela40(e1_2tela40+1)
        break;
      case "apoioi_2":
        setapoioi_2(apoioi_2+1)
        break;
      case "f2_2":
        setf2_2(f2_2+1)
        break;
      case "apoiol_2tela41":
        setapoiol_2tela41(apoiol_2tela41+1)
        break;
      case "m1_2":
        setm1_2(m1_2+1)
        break;
      case "apoiok_2":
        setapoiok_2(apoiok_2+1)
        break;
      case "e1_1":
        sete1_1(e1_1+1)
        break;
      case "apoiog_1tela43":
        setapoiog_1tela43(apoiog_1tela43+1)
        break;
      case "o1_1":
        seto1_1(o1_1+1)
        break;
      case "apoioj_1tela44":
        setapoioj_1tela44(apoioj_1tela44+1)
        break;
      case "w1_1":
        setw1_1(w1_1+1)
        break;
      case "apoiol_1tela45":
        setapoiol_1tela45(apoiol_1tela45+1)
        break;
      case "apoioh_1":
        setapoioh_1(apoioh_1+1)
        break;
      case "g2_1":
        setg2_1(g2_1+1)
        break;
      case "mn2_1":
        setmn2_1(mn2_1+1)
        break;
      case "apoiob_1tela47":
        setapoiob_1tela47(apoiob_1tela47+1)
        break;
      case "ij2_1":
        setij2_1(ij2_1+1)
        break;
      case "apoiom_1tela48":
        setapoiom_1tela48(apoiom_1tela48+1)
        break;
      case "d1_2":
        setd1_2(d1_2+1)
        break;
      case "apoiob_2tela49":
        setapoiob_2tela49(apoiob_2tela49+1)
        break;
      case "g2_2":
        setg2_2(g2_2+1)
        break;
      case "apoion_2tela50":
        setapoion_2tela50(apoion_2tela50+1)
        break;
      case "j1_2":
        setj1_2(j1_2+1)
        break;
      case "k2_2":
        setk2_2(k2_2+1)
        break;
      case "m2_2":
        setm2_2(m2_2+1)
        break;
      case "apoiok_2tela52":
        setapoiok_2tela52(apoiok_2tela52+1)
        break;
      case "t1_2":
        sett1_2(t1_2+1)
        break;
      case "apoioh_2tela53":
        setapoioh_2tela53(apoioh_2tela53+1)
        break;
      case "u1_2":
        setu1_2(u1_2+1)
        break;
      case "apoioq_1":
        setapoioq_1(apoioq_1+1)
        break;
      case "f1_1":
        setf1_1(f1_1+1)
        break;
      case "m1_1tela55":
        setm1_1tela55(m1_1tela55+1)
        break;
      case "z1_1":
        setz1_1(z1_1+1)
        break;
      case "apoioi_1":
        setapoioi_1(apoioi_1+1)
        break;
      case "j2_2":
        setj2_2(j2_2+1)
        break;
      case "k2_2tela57":
        setk2_2tela57(k2_2tela57+1)
        break;
      case "u2_2":
        setu2_2(u2_2+1)
        break;
      case "apoioq_1tela58":
        setapoioq_1tela58(apoioq_1tela58+1)
        break;
      case "cd2_1":
        setcd2_1(cd2_1+1)
        break;
      case "apoiok_1tela59":
        setapoiok_1tela59(apoiok_1tela59+1)
        break;
      case "z2_1":
        setz2_1(z2_1+1)
        break;
      case "apoioi_1tela60":
        setapoioi_1tela60(apoioi_1tela60+1)
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
      gravar(userlog.uid,a1_2,apoiof_2,apoioa_1,gh1_1,apoiol_2,e1_2,k1_2,l2_2,apoiou_2,q2_2,apoioh_2,t2_2,r1_apoio_1,m1_1,apoiol_1,w2_1,apoiok_1,cd1_1,apoioh_1tela10,g1_1,q2_1,r1_1,d1_1,s2_2,n2_2,apoiog_2tela14,c2_2,a1_1,apoioc_1,apoion_2,g1_2,apoioc_2,h2_2,apoios_2,o1_2,apoiou_2tela19,q1_2,c2_1,d2_1,apoiog_1,e2_1,apoioj_1,o2_1,mn1_1,apoiob_1,q1_1,r1_1tela24,ij1_1,apoiom_1,a2_2,apoiof_2tela26,s1_2,d1_1tela27,n1_2,r1_2,c1_2,apoiog_2,b2_1,apoion_1,f1_2,apoiol_2tela31,apoiol_2,h1_2,apoioc_2tela32,l1_2,k1_2tela33,gh2_1,apoioa_1tela34,a2_1,apoioc_1tela35,d2_2,apoiob_2,o2_2,apoios_2tela37,c1_1,d2_1tela38,b1_1,apoion_1tela39,e1_2tela40,apoioi_2,f2_2,apoiol_2tela41,m1_2,apoiok_2,e1_1,apoiog_1tela43,o1_1,apoioj_1tela44,w1_1,apoiol_1tela45,g2_1,apoioh_1,mn2_1,apoiob_1tela47,ij2_1,apoiom_1tela48,d1_2,apoiob_2tela49,g2_2,apoion_2tela50,j1_2,k2_2,m2_2,apoiok_2tela52,t1_2,apoioh_2tela53,u1_2,apoioq_1,f1_1,m1_1tela55,z1_1,apoioi_1,j2_2,k2_2,u2_2,apoioq_1tela58,cd2_1,apoiok_1tela59,z2_1,apoioi_1tela60)
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
            {questions[currentQuestion].answeroptions.map(
                (answeroption) => (
                  <button
                    onClick={() => handleAnswer(answeroption.id_image)}
                  >
                    {answeroption.image}
                  </button>
                )
            )}
            </div>
          </>
        )}
      </div>
  );
}
