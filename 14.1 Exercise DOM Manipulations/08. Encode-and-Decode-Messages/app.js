function encodeAndDecodeMessages() {
    const [encButton, decButton] = [...document.getElementsByTagName('button')];
    let [senderTextArea, receiverTextArea] = document.getElementsByTagName('textarea');
    
    encButton.addEventListener('click', () => {
        const encodeMessage = senderTextArea.value.split('').map(el => String.fromCharCode(el.charCodeAt() + 1)).join('');
        senderTextArea.value = '';
        receiverTextArea.value = encodeMessage;
    });

    decButton.addEventListener('click', () => {
        receiverTextArea.value = receiverTextArea.value.split('').map(el => String.fromCharCode(el.charCodeAt() - 1)).join('');
    });
}