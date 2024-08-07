const johnSelectorBtn = document.querySelector('#john-selector');
const marrySelectorBtn = document.querySelector('#Marry-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');
const messages=[]

const chatMessageElement = (message) => `
    <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
`;

let messageSender = 'John'; 

const updatedMessageSender = (name) => {
    messageSender = name;
    chatHeader.innerText = `${messageSender} chatting Now...`;
    chatInput.placeholder = `Type here, ${messageSender}...`;

    if (name === 'John') {
        johnSelectorBtn.classList.add('active-person');
        marrySelectorBtn.classList.remove('active-person');
    } else if (name === 'Marry') {
        marrySelectorBtn.classList.add('active-person');
        johnSelectorBtn.classList.remove('active-person');
    }

    chatInput.focus();
};

johnSelectorBtn.onclick = () => updatedMessageSender('John');
marrySelectorBtn.onclick = () => updatedMessageSender('Marry');

const sendMessage = (e) => {
    e.preventDefault();
    const timeStamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp: timeStamp, 
    };
messages.push(message)
    localStorage.setItem('messages', JSON.stringify(message))
    chatMessages.innerHTML += chatMessageElement(message);
    chatInput.value = ''; 

    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage);
