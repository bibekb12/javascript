class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return;
    x.name + "how are you my friend?";
  }
}
const myCar = new Car("ford ");
document.writeln(Car.hello(myCar));
