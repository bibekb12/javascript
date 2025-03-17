//constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + this.lastName;
  };
}
//create a Person object
const myMother = new Person("my", "mother", 54, "green");
const y = "aama ko naam: " + myMother.fullName();
document.writeln(y);
