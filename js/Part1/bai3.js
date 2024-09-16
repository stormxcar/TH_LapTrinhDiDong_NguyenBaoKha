// code challenge #3
// data : There are two gymnastics teams, Dolphins and Koalas, each
// other 3 times. ==> The winner with the highest average score wins a trophy!
//              Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

var data_Dolphins_team = [96, 108, 89];
var data_Koalas_team = [88, 91, 110];

// var sum = 0;
// var average = sum / data_Dolphins_team.length;
// console.log(average);

function calc_average(arr) {
  if (arr.length === 0) {
    return "empty";
  }

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(calc_average(data_Dolphins_team));
console.log(calc_average(data_Koalas_team));

var vaL_Dolphins = Math.ceil(calc_average(data_Dolphins_team));
var val_Koalas = Math.ceil(calc_average(data_Koalas_team));

if (vaL_Dolphins > val_Koalas) {
  console.log(`Team Dolphins is win with ${vaL_Dolphins}`);
} else {
  console.log(`Team Koalas is win with ${val_Koalas}`);
}
