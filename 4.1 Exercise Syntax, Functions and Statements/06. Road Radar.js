function roadRadar([speed, area]) {
    const speedObj = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130,
        0: 'speeding',
        1: 'excessive speeding',
        2: 'reckless driving',
        toPrint: function (overSpeed) {
            return result = this[parseInt(overSpeed / 20.5)] || this[2];
        }
    }
    const speeding = speed - speedObj[area];
    if (speeding > 0)
        console.log(speedObj.toPrint(speeding));
}
roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway'])