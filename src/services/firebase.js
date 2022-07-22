import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZy2Is_n9BaiK1EO7qNtHq0ZArRixzlUY",
  authDomain: "teste-gabriel-sofia.firebaseapp.com",
  databaseURL: "https://teste-gabriel-sofia-default-rtdb.firebaseio.com",
  projectId: "teste-gabriel-sofia",
  storageBucket: "teste-gabriel-sofia.appspot.com",
  messagingSenderId: "771920480213",
  appId: "1:771920480213:web:3d6834c33f8d05d4c95f5c"
};

export const app = initializeApp(firebaseConfig);