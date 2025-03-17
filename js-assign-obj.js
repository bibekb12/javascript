
      //create targe object
      const person1 = {
        firstName: "bibek",
        lastName: "bhandari",
        age: 30,
        eyeColor: "brown",
      };

      //create source object
      const person2 = {
        firstName: "Alish",
        lastName: "Tudu",
      };

      //Assign source to target
      Object.assign(person1, person2);

      //display the target
      document.writeln(Object.entries(person1));

