
      function myFunction() {
        document.writeln("I Love You !");
      }
      setTimeout(myFunction, 2000);

      function myLife(some) {
        document.writeln(some);
      }

      setTimeout(function () {
        myLife("I really love you !");
      }, 3000);

