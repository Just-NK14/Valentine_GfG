const sequence = [
    'Forever ❤️', 'You 🫵', 'Hug 🤗', 'You 🤝', 'Kiss 😘', 'You 👫', 'Cute 🥰', 'You 🫶',
    'Darling 💖', 'You 🫵', 'Heart ❤️', 'You 🤝', 'Love 💕', 'You 👫', 'Treasure 💎', 'You 🫶'
  ];
  let currentIndex = 0;
  
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.classList.add('faced-down');
    card.innerText = ''; 
  });
  
  let flippedCards = [];
  let matchedCount = 0;
  let currentWord = sequence[currentIndex];
  let flipCount = 0;

  const messages = [
    "Fate has a way of guiding your hands. ✨",
    "Another step closer to something special. 💕",
    "Some matches are meant to be. 💫",
    "Your heart remembers what your mind forgets. ❤️",
    "Love is found in the little moments. 🌸",
    "The pieces are falling into place. 🧩",
    "A quiet spark, a perfect match. 🔥",
    "Congratulations! You've unlocked my feelings. 💖🎉"
  ];


  function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = "toast show"; 
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
      </div>
    `;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }
  
  
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('faced-up') || flippedCards.length >= 2 || card.classList.contains('disabled')) return;
  
      card.classList.add('flipping');
      card.classList.remove('faced-down');
      card.classList.add('faced-up');
      card.innerText = currentWord;
  
      flippedCards.push({ card, index, word: currentWord });
  
      currentIndex++;
      if (currentIndex >= sequence.length) {
        currentIndex = 0; 
      }
      currentWord = sequence[currentIndex];
  
      flipCount++;

      if (flipCount % 2 === 0) {
        const messageIndex = (flipCount / 2) - 1; 
        if (messageIndex < messages.length) {
          showToast(`Flip ${flipCount}: ${messages[messageIndex]}`);
        }
      }
  
      if (flippedCards.length === 2) {
        setTimeout(() => {
          const [firstCard, secondCard] = flippedCards;
          if (firstCard.word === secondCard.word) {
              firstCard.card.classList.add('match', 'disabled');
              secondCard.card.classList.add('match', 'disabled');
              matchedCount++;
              showToast("You found the match! 🎉");
            }
            else {
            firstCard.card.classList.remove('faced-up');
            secondCard.card.classList.remove('faced-up');
            firstCard.card.classList.add('faced-down');
            secondCard.card.classList.add('faced-down');
          }
          flippedCards = [];
  
          if (flipCount === 16) {
            setTimeout(() => {
              window.location.href = 'wish.html';
            }, 2000);
          }
        }, 1000);
      }
    });
  });
  