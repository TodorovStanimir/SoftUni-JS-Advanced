function solve() {
   function handler() {
      let inputField = document.getElementById('chat_input');
      let messageField = document.getElementById('chat_messages');

      if (inputField === null && messageField === null) {
         throw new Error('Missing input element!!!')
      }
      let message = inputField.value;
      if (message !== '') {
         let newDivElement = document.createElement('div');
         newDivElement.setAttribute('class', 'message my-message');
         newDivElement.textContent = message;
         messageField.appendChild(newDivElement);
         inputField.value = ''
      }
   }
   let sendButton = document.getElementById('send').addEventListener('click', handler);
}