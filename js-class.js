class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("BMW", 2019);

document.writeln("line no 11" + myCar1);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    alert(date.getTime());
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("ford", 2015);

//   document.writeln(myCar);
document.writeln(myCar.age());
