<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="keywords"
      content="bibek bhandari, bhandaribibek, bibek, bibekbhandari, bhandaribibek27, bibekbhandari.com.np"
    />
    <meta
      http-equiv="refresh"
      content="0; url=https://www.bibekbhandari.com.np"
    />
    <h2>bibek bhandari</h2>
  </head>
  <body>
    <script>
      const person = {
        firstName: "bibek",
        lastName: "bhandari",
        age: 50,
      };

      //seal object
      Object.seal(person);

      //Test error
      let text = "";
      try {
        delete person.age;
        text = Object.values(person);
      } catch (err) {
        text = err;
      }
      document.writeln(text);
    </script>
  </body>
</html>
