function mySolution() {
    const sendButton = document.getElementsByTagName('button')[0];
    sendButton.addEventListener('click', sendQuestion);
    //test 1 and 2
    function sendQuestion() {
        let inputElement = document.querySelectorAll('#inputSection textarea')[0];
        let userElement = document.querySelectorAll('input[type=username]')[0];
        let question = inputElement.value;
        let userName = userElement.value ? userElement.value : 'Anonymous'
        let divPendingQuestionsElement = document.getElementById('pendingQuestions');
        let newDivElement = document.createElement('div');
        newDivElement.setAttribute('class', 'pendingQuestion');
        let newImgElement = document.createElement('img');
        setAttributes(newImgElement, [['src', './images/user.png'], ['width', '32'], ['height', '32']])
        let newSpanElement = document.createElement('span');
        newSpanElement.textContent = userName;
        let newPElement = document.createElement('p');
        newPElement.textContent = question;
        let newDiv2Element = document.createElement('div');
        newDiv2Element.setAttribute('class', 'actions')
        let buttonElement1 = document.createElement('button');
        buttonElement1.setAttribute('class', 'archive');
        buttonElement1.textContent = 'Archive';
        buttonElement1.addEventListener('click', archiveQuestion)
        let buttonElement2 = document.createElement('button');
        buttonElement2.setAttribute('class', 'open');
        buttonElement2.textContent = 'Open';
        buttonElement2.addEventListener('click', moveQuestionToOpenQuestions)
        appendChilds(newDiv2Element, [buttonElement1, buttonElement2])
        appendChilds(newDivElement, [newImgElement, newSpanElement, newPElement, newDiv2Element])
        divPendingQuestionsElement.appendChild(newDivElement)
        inputElement.value = '';
        userElement.value = '';
    }
    //test 4
    function moveQuestionToOpenQuestions(even) {
        let oldDivElem = even.target.previousElementSibling.parentElement.parentElement
        let newDivElem = oldDivElem.cloneNode(true);
        newDivElem.removeAttribute('class', 'pendingQuestion');
        newDivElem.setAttribute('class', 'openQuestion')
        let button1 = newDivElem.getElementsByTagName('button')[0];
        let button2 = newDivElem.getElementsByTagName('button')[1]
        button1.remove();
        button2.remove()
        let newDiv2Elem = newDivElem.getElementsByTagName('div')[0];
        let newButton = document.createElement('button');
        newButton.setAttribute('class', 'reply');
        newButton.textContent = 'Reply';
        newButton.addEventListener('click', showAndHideDivElem);
        newDiv2Elem.appendChild(newButton);
        let newDiv3Elem = document.createElement('div');
        newDiv3Elem.setAttribute('class', 'replySection');
        newDiv3Elem.style.display = 'none';
        let newInputElem = document.createElement('input');
        setAttributes(newInputElem, [['class', 'replyInput'], ['type', 'text'], ['placeholder', 'Reply to this question here...']])
        newDiv3Elem.appendChild(newInputElem);
        let newButton3Elem = document.createElement('button');
        newButton3Elem.setAttribute('class', 'replyButton');
        newButton3Elem.textContent = 'Send';
        newButton3Elem.addEventListener('click', reply);
        newDiv3Elem.appendChild(newButton3Elem);
        let newOlElem = document.createElement('ol');
        setAttributes(newOlElem, [['class', 'reply'], ['type', '1']])
        newDiv3Elem.appendChild(newOlElem);
        newDivElem.appendChild(newDiv3Elem);
        let openQuestionsElement = document.getElementById('openQuestions');
        openQuestionsElement.appendChild(newDivElem);
        oldDivElem.remove()
    }
    //test 3 and 8
    function archiveQuestion(even) {
        let oldDivElem = even.target.parentElement.parentElement;
        oldDivElem.remove();
    }
    //test 5
    function showAndHideDivElem(even) {
        if (even.target.parentElement.parentElement.getElementsByTagName('div')[1].style.display === 'none') {
            even.target.parentElement.parentElement.getElementsByTagName('div')[1].style.display = 'block';
            even.target.textContent = 'Back';
        } else {
            even.target.parentElement.parentElement.getElementsByTagName('div')[1].style.display = 'none';
            even.target.textContent = 'Reply';
        }
    }
    //test 6, 7 and 9
    function reply(even) {
        let inputElem = even.target.previousElementSibling;

        if (inputElem.value !== '') {
            let reply = inputElem.value;
            let olElement = even.target.parentElement.getElementsByTagName('ol')[0];
            let newLiElement = document.createElement('li');
            newLiElement.textContent = reply;
            olElement.appendChild(newLiElement);
            inputElem.value = ''
        }
    }

    function appendChilds(parElem, arrChilds) {
        arrChilds.map(el => parElem.appendChild(el));
    }

    function setAttributes(htmlElem, arrAtributes) {
        arrAtributes.map(attribute => htmlElem.setAttribute(`${attribute[0]}`, `${attribute[1]}`))
    }
}