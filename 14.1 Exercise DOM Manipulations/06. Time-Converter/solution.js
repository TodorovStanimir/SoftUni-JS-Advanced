function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');


    let mapper = {
        days: sec => sec,
        hours: sec => sec / 24,
        minutes: sec => sec / 24 / 60,
        seconds: sec => sec / 24 / 60 / 60
    }


    const calculateResult = x => {
        hoursElement.value = (x * 24)
        minutesElement.value = (x * 24 * 60)
        secondsElement.value = (x * 24 * 60 * 60)
        daysElement.value = x
    }

    const handler = ev => {
        const inputElem = ev.target.previousElementSibling.id;
        const inputValue = ev.target.previousElementSibling.value;
        calculateResult(mapper[inputElem](inputValue))
    }

    Array.from(document.querySelectorAll('input[type="button"]')).map(e => e.addEventListener('click', handler))
}