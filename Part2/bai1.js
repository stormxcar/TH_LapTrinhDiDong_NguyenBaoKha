var Dolphins_score = [20,23,21];
var Koalas_score = [65,54,49];

function calcAverage(arr) {
    var sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    return sum / 3;
}

console.log(calcAverage(Dolphins_score));
console.log(calcAverage(Koalas_score));

function checkWinner(avgTeam1, avgTeam2) {
    if (avgTeam1 >= 2 * avgTeam2) {
        console.log("Team 1 is win");
    } else if (avgTeam2 >= 2 * avgTeam1) {
        console.log("Team 2 is win");
    } else {
        console.log("Draw");
    }
}

checkWinner(calcAverage(Dolphins_score), calcAverage(Koalas_score));



        