function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', powerGradient);
    gradient.addEventListener('mouseout', stopGradient);
    function powerGradient(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.floor(power * 100);
        document.getElementById('result').textContent = power + '%';
    }
    function stopGradient() {
        document.getElementById('result').textContent = '';
    }
}