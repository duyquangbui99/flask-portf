// Function to handle sending the message
async function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() === "") {
        alert("Please enter a question");
        return;
    }

    // Display user's message in the chat box
    const chatBox = document.getElementById('chat-box');
    const userDiv = document.createElement('div');
    const userMessage = document.createElement('p')
    userDiv.classList.add('user-message');//add class for styling
    userMessage.textContent = userInput;
    userDiv.appendChild(userMessage)
    chatBox.appendChild(userDiv);

    // Send user input to the Flask API
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    // Clear the input field
    document.getElementById('user-input').value = "";

    // Create a container for the bot's response
    const botResponseContainer = document.createElement('div');
    botResponseContainer.classList.add('bot-response-container')

    // Create the bot icon image
    const botIcon = document.createElement('img');
    botIcon.src = '/static/images/bot.svg';
    botIcon.alt = 'botIcon';
    botIcon.classList.add('bot-icon');

    // Create the bot message div and p
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');

    const botMessage = document.createElement('p');
    if (data.response) {
        botMessage.textContent = data.response;
    } else {
        botMessage.textContent = (data.error || "Failed to get a response");
    }

    // Append the p to the botMessageDiv
    botMessageDiv.appendChild(botMessage);

    // Append the botIcon and botMessageDiv to the botResponseContainer
    botResponseContainer.appendChild(botIcon);
    botResponseContainer.appendChild(botMessageDiv);

    // Append the botResponseContainer to the chat box
    chatBox.appendChild(botResponseContainer);

    // Scroll the chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Listen for the click event on the "Send" button
document.getElementById('send-button').addEventListener('click', sendMessage);

// Listen for the "Enter" key press event in the input field
document.getElementById('user-input').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
