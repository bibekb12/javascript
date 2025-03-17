const person = {
  firstName: "bibek",
  lastName: "bhandari",
  age: 50,
};
//display all properites
document.writeln(Object.getOwnPropertyNames(person));

Object.defineProperty(person, "language", { enumerable: false });
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDay();
// let milliseconds = date.getMilliseconds();
// const timestamp = year + month + day + millisecond;
// alert("timestamp");

const myCar = new Car("bmw", 2014);
document.writeln(myCar.age(year));
function myDisplayer(some) {
  document.writeln(some);
}
let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  //some code (trying to change x to 5)
  if (x == 0) {
    myResolve("ok");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
