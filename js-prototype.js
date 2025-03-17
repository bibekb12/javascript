function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.nation = "Nepal";

const myFather = new Person("keshar", "bd", 50, "red");
document.writeln(myFather.nation);
