const chatBody = document.getElementById('chat-body');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');

        function appendMessage(message, sender) {
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('chat-message', sender);

            const messageBubble = document.createElement('div');
            messageBubble.classList.add('message');
            messageBubble.textContent = message;

            messageContainer.appendChild(messageBubble);
            chatBody.appendChild(messageContainer);

            chatBody.scrollTop = chatBody.scrollHeight; 
        }

        sendBtn.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                appendMessage(message, 'user');
                chatInput.value = '';

                
                setTimeout(() => {
                    appendMessage('This is a bot response.', 'bot');
                }, 1000);
            }
        });

        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendBtn.click();
            }
        });