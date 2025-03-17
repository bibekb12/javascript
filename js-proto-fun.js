function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.fullname = function () {
  return this.firstName + " " + this.lastName;
};
const myFather = new Person("keshar", "bd", 55, "red");
document.writeln(myFather.fullname());
