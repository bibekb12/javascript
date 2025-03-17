
      function myFunction(a, b) {
        return a * b;
      }
      let x = myFunction(4, 3) * 2;
      document.writeln(x);

      function myNewFunction(a, b, c) {
        return arguments.length;
      }

      document.writeln(myNewFunction.toString());
 