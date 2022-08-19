import {requestAdvice} from "./adviceGenerator.js";

const button = document.querySelector('.button');

window.onload = () => {
    requestAdvice();
}

button.addEventListener('click', requestAdvice);