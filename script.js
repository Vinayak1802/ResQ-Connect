
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot');

function toggleChatbot() {
  chatbotContainer.classList.toggle('hidden');
}

chatbotButton.addEventListener('click', toggleChatbot);
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
