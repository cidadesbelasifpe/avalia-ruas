import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImgComponent from './ImgComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Olá, Mundo!</h1>
);

const div_imagem = ReactDOM.createRoot(document.getElementById('div_imagem'));
div_imagem.render(
  <ImgComponent/>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
