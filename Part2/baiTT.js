var temp1 = [17, 21, 23];
var temp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  var str = "";
  arr.forEach((e) => {
    let day = arr.indexOf(e) + 1;
    str += e + "°C in " + day + " days" + "\n";
  });

  console.log(str);
}

printForecast(temp1);
