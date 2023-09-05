
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot');

function incrementManMadeCounter() {
  let manMadeDeaths = 0;
  const manMadeCounter = document.getElementById('man-made-counter');

  const interval = setInterval(() => {
      manMadeCounter.innerText = manMadeDeaths++;
      if (manMadeDeaths > 3100) {
          clearInterval(interval);
      }
  }, 1);
}

function incrementNaturalCounter() {
  let naturalDeaths = 0;
  const naturalCounter = document.getElementById('natural-counter');

  const interval = setInterval(() => {
      naturalCounter.innerText = naturalDeaths++;
      if (naturalDeaths > 2400) {
          clearInterval(interval);
      }
  }, 0);
}

// Event listener to start counters when the page loads
window.addEventListener('load', () => {
  incrementManMadeCounter();
  incrementNaturalCounter();
}); 

function toggleChatbot() {
  chatbotContainer.classList.toggle('hidden');
}

chatbotButton.addEventListener('click', toggleChatbot);
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
