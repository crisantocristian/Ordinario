document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var messageInput = document.getElementById('messageInput');
  var messages = document.getElementById('messages');

  var newMessage = document.createElement('p');
  newMessage.textContent = messageInput.value;

  messages.appendChild(newMessage);
  messageInput.value = '';
});
