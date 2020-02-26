function solve() {
  const answers = {
    'onclick': true,
    'onmouseclick': false,
    'JSON.toString()': false,
    'JSON.stringify()': true,
    'A programming API for HTML and XML documents': true,
    'The DOM is your source HTML': false,
    'givenAnswers': [],
  };
  
  let liElements = document.getElementsByTagName('section');
  let button = document.getElementById('quizzie');


  function handler(e) {
    console.log(e.currentTarget);
    answers.givenAnswers.push(answers[e.target.textContent]);
    liElements[answers.givenAnswers.length - 1].style.display = 'none';
    if (answers.givenAnswers.length < 3) {
      liElements[answers.givenAnswers.length].style.display = 'block'
    } else {
      answers.givenAnswers = answers.givenAnswers.filter(el => el === true);
      let resultElement = document.getElementById('results');
      resultElement.style.display = 'block';
      resultElement.querySelector('h1').textContent = (answers.givenAnswers.length === 3)
        ? `You are recognized as top JavaScript fan!`
        : `You have ${answers.givenAnswers.length} right answers`;
    }
  }
  button.addEventListener('click', handler);
}

