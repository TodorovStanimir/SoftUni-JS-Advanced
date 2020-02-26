// function personalBmi(name, age, weight, height) {
//     let result = {
//         name,
//         personalInfo: {
//             age,
//             weight,
//             height
//         },
//         BMI: Math.round(weight / (height / 100 * height / 100)),
//         status: ''
//     }

//     if (result.BMI < 18.5) {
//         result.status = 'underweight';
//     } else if (result.BMI < 25) {
//         result.status = 'normal';
//     } else if (result.BMI < 30) {
//         result.status = 'overweight';
//     } else {
//         result.status = 'obese';
//         result.recommendation = 'admission required'
//     }
//     return result
// }
function personalBmi(name, age, weight, height) {
    let result = {
        name,
        personalInfo: { age, weight, height },
        BMI: Math.round(weight / (height / 100 * height / 100)),
        status: function () {
            if (this.BMI < 18.5) {
                this.status = 'underweight'
            } else if (this.BMI < 25) {
                this.status = 'normal'
            } else if (this.BMI < 30) {
                this.status = 'overweight'
            } else {
                this.status = 'obese'
                this.recommendation = 'admission required'
            }
        }
    };
    result.status();
    return result;
}
console.log(personalBmi('Peter', 29, 75, 182));
console.log(personalBmi('Honey Boo Boo', 9, 57, 137));