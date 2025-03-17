class Car { constructor(brand) { this.carName = brand; } present() { return '"i
have a "' + this.carName; } } class Model extends Car { constructor(brand, mod) {
super(brand); this.model = mod; } show() { return this.present() + ", it is a "
+ this.model; } } // const myCar = new Car("bmw"); //
document.writeln(myCar.present()); const myCar = new Model("bmw", "black");
document.writeln(myCar.show());
