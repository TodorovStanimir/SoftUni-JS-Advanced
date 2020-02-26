// function timeToWalk(steps, length, speed) {
//     let distance = steps * length;
//     let time = Math.ceil(distance / (speed * 1000 / 3600) + Math.floor(distance / 500) * 60);
//     let hours = Math.floor(time / 3600);
//     let minutes = Math.floor((time - hours * 3600) / 60);
//     let seconds = time - hours*3600 - minutes*60;
//     console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
// }

timeToWalk = (steps, lengthOfStep, speed) => {
    const totalTime = Math.ceil(Math.floor(steps * lengthOfStep / 500) * 60 + steps * lengthOfStep / (speed * 1000 / 3600));
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime - hours * 3600) / 60);
    const seconds = (totalTime - hours * 3600 - minutes * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
console.log(timeToWalk(4000, 0.60, 5))
console.log(timeToWalk(2564, 0.70, 5.5))