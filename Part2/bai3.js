function person(fname, mass, height) {
  this.fname = fname;
  this.mass = mass;
  this.height = height;
  this.bmi = calc_BMI(this.mass, this.height);
}

var p1 = new person("Mark Miller", 78, 1.69);
console.log(p1);




var person_1 = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  BMI: function () {
    return this.mass / (this.height * this.height);
  },
};
var person_2 = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  BMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// console.log(person_1.BMI().toFixed(2), person_2.BMI().toFixed(2));

function calc_BMI(mass, height) {
  return mass / (height * height);
}

// console.log(calc_BMI(person_1.mass, person_1.height));
// console.log(calc_BMI(person_2.mass, person_2.height));

var calcP1 = Math.ceil(calc_BMI(person_1.mass, person_1.height));
var calcP2 = Math.ceil(calc_BMI(person_2.mass, person_2.height));

if (
  calc_BMI(person_1.mass, person_1.height) >
  calc_BMI(person_2.mass, person_2.height)
) {
  console.log(
    person_1.name +
      " co BMI la " +
      calcP1 +
      " cao hon " +
      person_2.name +
      " co BMI la " +
      calcP2
  );
} else if (
  calc_BMI(person_1.mass, person_1.height) <
  calc_BMI(person_2.mass, person_2.height)
) {
  console.log(
    person_2.name +
      " co BMI la " +
      calcP2 +
      " cao hon " +
      person_1.name +
      " co BMI la " +
      calcP1
  );
} else {
  console.log(
    person_1.name +
      " co BMI la " +
      calcP1 +
      "va " +
      person_2.name +
      " co BMI la " +
      calcP2 +
      " bang nhau"
  );
}
