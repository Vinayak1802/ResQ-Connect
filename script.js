
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot');

function toggleChatbot() {
  chatbotContainer.classList.toggle('hidden');
}

chatbotButton.addEventListener('click', toggleChatbot);
