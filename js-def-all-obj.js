//construct function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nation = "Nepal";
}

// create dual object of person
const myFather = new Person("keshar", "bd", 50, "red");
const myMother = new Person("devi", "maay", "45", "green");

//display the nationality
const y =
  "my father nation is: " +
  myFather.nation +
  " my mother nation is " +
  myMother.nation;

document.writeln(y);
