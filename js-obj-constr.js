
      //constructor function for Person objects
      function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
      }
      //create a Person object
      const myFather = new Person("my", "father", 55);
      document.write(myFather.age);

      const myMother = new Person("my", "mother", 54, "green");
      document.getElementById("demo").innerHTML =
        "my mother age is: " + myMother.age;

