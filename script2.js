const alternatives = [
  { text: "Happy Valentine's Day! ❤️", images: "images/cat-01.gif" },
  { text: "Wishing you lots of love and joy! 💕", images: "images/cat-02.gif" },
  { text: "You're special today and always! 🌸", images: "images/cat-03.gif" },
  { text: "Sending you virtual hugs! 🤗", images: "images/cat-04.gif" },
  { text: "May your day be full of love! 💖", images: "images/cat-05.gif" },
];

const cat = document.querySelector('.cat');
const text = document.querySelector('.text');

let count = 0;

function updateDisplay() {
  cat.src = alternatives[count].images;
  text.innerHTML = alternatives[count].text;
  
  count = (count + 1) % alternatives.length; 
}

setInterval(updateDisplay, 3000); 

updateDisplay();
