function solution() {
    const [addSection, listSection, sendSection, discartedSecction] = Array.from(document.getElementsByClassName('card'))
    const inputEl = addSection.querySelector('input')
    const addBtn = addSection.querySelector('button')


    addBtn.addEventListener('click', function (event) {
        if (inputEl.value !== '') {
            let textGift = inputEl.value;
            let liEl = document.createElement('li');
            let sendBtn = document.createElement('button');
            let discardBtn = document.createElement('button');

            liEl.setAttribute('class', 'gift');
            liEl.textContent = textGift;
            sendBtn.setAttribute('id', 'sendButton');
            sendBtn.textContent = 'Send';
            sendBtn.addEventListener('click', send)
            discardBtn.setAttribute('id', 'discardButton');
            discardBtn.textContent = 'Discard';
            discardBtn.addEventListener('click', discard);
            liEl.appendChild(sendBtn);
            liEl.appendChild(discardBtn);

            listSection.querySelector('ul').appendChild(liEl);

            let liiEl = Array.from(listSection.querySelector('ul').querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent));

            listSection.querySelector('ul').innerHTML = '';

            liiEl.forEach(element => { listSection.querySelector('ul').appendChild(element) });
            inputEl.value = '';
        }

        function send(event) {
            const present = event.target.parentNode.firstChild.textContent;
            let liEl = document.createElement('li');
            liEl.setAttribute('class', 'gift');
            liEl.textContent = present;

            sendSection.querySelector('ul').appendChild(liEl);
            event.target.parentNode.remove();
        }

        function discard(event) {
            const present = event.target.parentNode.firstChild.textContent;

            let liEl = document.createElement('li');
            liEl.setAttribute('class', 'gift');
            liEl.textContent = present;

            discartedSecction.querySelector('ul').appendChild(liEl);
            event.target.parentNode.remove();
        }
    })
}