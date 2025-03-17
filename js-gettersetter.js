
      class Car {
        constructor(brand) {
          this.carName = brand;
        }
        get cnam() {
          return this.carName;
        }
        set cnam(x) {
          this.carName = x;
        }
      }

      const myCar = new Car("FOrd");
      document.writeln(myCar.cnam);

