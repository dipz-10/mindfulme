document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    const input = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages-container');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = input.value;
        
        // Append user message to the chat window
        appendMessage('user', message);

        // Simulate bot response (replace this with actual bot interaction)
        setTimeout(() => {
            const response = 'Hello! I\'m here to help. Let\'s start by taking a mental health assessment. Answer the following questions as honestly as possible.';
            appendMessage('bot', response);
        }, 1000);

        // Clear input field
        input.value = '';
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender + '-message');
        messageElement.innerText = message;
        messagesContainer.appendChild(messageElement);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});