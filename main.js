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