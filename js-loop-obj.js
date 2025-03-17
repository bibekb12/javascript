const person = { firstName: "bibek", lastName: "bhandari", age: 50 };
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
document.writeln(text);
