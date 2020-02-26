function mySolution() {
    const inputTxtElem = document.getElementById('inputSection').querySelector('textarea');
    const inputUserElem = document.getElementById('inputSection').querySelector('input[type=username]');
    const sendBtn = document.getElementById('inputSection').querySelector('button');
    const pendingQuestionsEl = document.getElementById('pendingQuestions');
    const openQuestionsEl = document.getElementById('openQuestions')

    sendBtn.addEventListener('click', function () {
        const question = inputTxtElem.value;
        const username = inputUserElem.value !== '' ? inputUserElem.value : 'Anonymous';

        if (question !== '') {
            let newQuestionEl = makeNewPendingQuestion(question, username);
            pendingQuestionsEl.appendChild(newQuestionEl);
            cleanValues();
        }

        function makeNewPendingQuestion(question, username) {
            const divEl = document.createElement('div');
            const imgEl = document.createElement('img');
            const spanEl = document.createElement('span');
            const pEl = document.createElement('p');
            const divBtnEl = document.createElement('div');
            const archiveBtn = document.createElement('button');
            const openBtn = document.createElement('button');

            divEl.setAttribute('class', 'pendingQuestion');
            imgEl.setAttribute('src', './images/user.png');
            imgEl.setAttribute('width', '32');
            imgEl.setAttribute('height', '32');
            spanEl.textContent = username;
            pEl.textContent = question;
            divBtnEl.setAttribute('class', 'actions');
            archiveBtn.setAttribute('class', 'archive');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', archive)
            openBtn.setAttribute('class', 'open');
            openBtn.textContent = 'Open';
            openBtn.addEventListener('click', open);

            divEl.appendChild(imgEl);
            divEl.appendChild(spanEl);
            divEl.appendChild(pEl);
            divBtnEl.appendChild(archiveBtn);
            divBtnEl.appendChild(openBtn);
            divEl.appendChild(divBtnEl);

            return divEl;
        }

        function open(event) {
            let openQuestionEl = event.target.parentElement.parentElement.cloneNode([true])
            archive(event);
            openQuestionEl.removeAttribute("class");
            openQuestionEl.setAttribute('class', 'openQuestion');
            openQuestionEl.lastChild.removeChild(openQuestionEl.lastChild.firstChild);
            openQuestionEl.lastChild.removeChild(openQuestionEl.lastChild.firstChild);

            let replyBtn = document.createElement('button');
            let divReplyEl = document.createElement('div');
            let inputReplyEl = document.createElement('input');
            let sendBtn = document.createElement('button');
            let olEl = document.createElement('ol');

            replyBtn.setAttribute('class', 'reply');
            replyBtn.textContent = 'Reply';
            replyBtn.addEventListener('click', reply)
            divReplyEl.setAttribute('class', 'replySection');
            divReplyEl.style.display = 'none';
            inputReplyEl.setAttribute('class', 'replyInput');
            inputReplyEl.setAttribute('type', 'text');
            inputReplyEl.setAttribute('placeholder', 'Reply to this question here...');
            sendBtn.setAttribute('class', 'replyButton');
            sendBtn.textContent = 'Send';
            sendBtn.addEventListener('click', send)
            olEl.setAttribute('class', 'reply');
            olEl.setAttribute('type', '1');

            openQuestionEl.lastChild.appendChild(replyBtn);
            divReplyEl.appendChild(inputReplyEl);
            divReplyEl.appendChild(sendBtn);
            divReplyEl.appendChild(olEl);
            openQuestionEl.appendChild(divReplyEl);

            openQuestionsEl.appendChild(openQuestionEl);
        }

        function archive(event) {
            event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement)
        }

        function cleanValues() {
            inputTxtElem.value = '';
            inputUserElem.value = '';
        }

        function reply(event) {

            if (event.target.textContent === 'Reply') {
                event.target.parentElement.nextElementSibling.style.display = 'block'
                event.target.textContent = 'Back';
            } else {
                event.target.parentElement.nextElementSibling.style.display = 'none'
                event.target.textContent = 'Reply';
            }
        }

        function send(event) {
            let parentEl = event.target.parentElement;
            let inputEl = parentEl.firstChild;
            let olEl = parentEl.lastChild;

            let replyText = inputEl.value;

            if (replyText !== '') {
                let liEl = document.createElement('li');
                liEl.textContent = replyText;
                olEl.appendChild(liEl);
                inputEl.value = '';
            }
        }
    });
}