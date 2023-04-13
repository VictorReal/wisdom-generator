import data from './data.js';
console.log(data);

let generateQuoteButtton = document.querySelector('#generate-quote');
generateQuoteButtton.addEventListener('click', getQuote);

let quoteText = document.querySelector('#quote-text');
let quoteAuthor = document.querySelector('#quote-author');

let handleCopyClick = document.querySelector('#copy-quote');



function getQuote(){
  const randomNumber = Math.floor(Math.random() * data.length)
  const quote = data[randomNumber];
  quoteText.textContent = quote.content;
  quoteAuthor.innerHTML = quote.author;
}  

handleCopyClick.addEventListener('click', () => {
  let text = quoteText.textContent;
  let author = quoteAuthor.textContent;
  navigator.clipboard.writeText(`${text} ${author}`);

  alert(`Quote by ${author} copied to clipboard!`);
});

//
const changeColorsBtn = document.getElementById('change-colors-btn');
const background = document.querySelector('.background');
const audio = document.getElementById("myAudio");

const navElement = document.querySelector("nav");
const mainElement = document.querySelector("main");
const gitElement = document.querySelector("#git_btn");
const cvElement = document.querySelector("#cv_btn");
const wgElement = document.querySelector("#prj_btn");

changeColorsBtn.addEventListener('click', function() {
  background.classList.remove('hidden')
  audio.play();
  navElement.style.backgroundColor = "#0057b7";
  mainElement.style.backgroundColor = "#0057b7";  
  gitElement.style.backgroundColor = "#0066cc";  
  cvElement.style.backgroundColor = "#0066cc";
  wgElement.style.backgroundColor = "#0066cc";
  changeColorsBtn.style.backgroundColor = "#0066cc";
});
