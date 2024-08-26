var dataBill = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
var tips = [];
var totals = [];

var calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
}


for (var i = 0; i < dataBill.length; i++) {
    tips.push(calcTip(dataBill[i]));
    totals.push(dataBill[i] + tips[i]);
}

console.log(tips , totals);

var average = function (arr) {
    var sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    return sum / arr.length;
}


console.log(average(totals));


