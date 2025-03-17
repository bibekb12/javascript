const person = {
  firstName: "bibek",
  lastName: "bhandari",
  age: 50,
  eyeColor: "brown",
};

document.writeln(Object.keys(person));
const person = {
  firstName: "bibek",
  lastName: "bhandari",
  age: 50,
};

let text = Object.values(person);

document.writeln(text);

//create an object
const person = {
  firstName: "bibek",
  lastName: "bhandari",
  age: 50,
  language: "yes",
};

//Add property
Object.defineProperty(person, "year", { value: "2025" });

//change a property
Object.defineProperty(person, "language", { value: "no" });

//display
document.writeln(person.year);
document.writeln(person.language);

const fruits = { Bananas: 300, Oranges: 200, Apples: 400 };

const myMap = new Map(Object.entries(fruits));

document.writeln(myMap);

const person = {
  firstName: "bibek",
  lastName: "bhandari",
  id: 5555,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
person.name = function () {
  return this.firstName + this.lastName;
};
document.getElementById("demo").innerHTML = person.name();
//create an object
const person = new Object();
person.firstName = "bibek";
person.lastName = "bhandari";
person.age = 66;
person.eyeColor = "blue";

//display the data from object
const y = person.firstName + " " + person.lastName;
document.writeln(y);
