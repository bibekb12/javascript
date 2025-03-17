
      function myDisplayer(some) {
        document.writeln(some);
      }

      async function myfunction() {
        return "hello";
      }

      myfunction().then(function (value) {
        myDisplayer(value);
      });
