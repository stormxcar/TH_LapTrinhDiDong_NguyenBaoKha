// Code challenge #1
// BMI = mass / height * 2  ( mass is in kg and height is in meters )

// data:
var mass_Marks_data = 78;
var height_Marks_data = 1.69;
var mass_John_data = 92;
var height_John_data = 1.95;

function calc_BMI(mass, height) {
  return mass / (height * height);
}

// console.log(calc_BMI(70,1.70))

var BMI_Marks = calc_BMI(mass_Marks_data, height_Marks_data);
var BMI_John = calc_BMI(mass_John_data, height_John_data);

// console.log("BMI of Marks: "+BMI_Marks, "\nBMI of Marks: "+BMI_John)

var markHigherBMI = BMI_Marks > BMI_John;
// console.log(markHigherBMI)

// Code challage #2
// data: input from console

const prompt = require("prompt-sync")();
var mass_Marks_input = prompt("Nhap can nang cua Mark : ");
var height_Mark_input = prompt("Nhap chieu cao cua Mark : ");

var mass_John_input = prompt("Nhap can nang cua John : ");
var height_John_input = prompt("Nhap chieu cao cua John : ");

var input =
  calc_BMI(mass_Marks_input, height_Mark_input) >
  calc_BMI(mass_John_input, height_John_input);
// console.log(input);
if (input) {
  console.log("Mark co BMI cao hon John");
} else {
  console.log("John co BMI cao hon Mark");
}


