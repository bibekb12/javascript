const person = {
  name: "bibek",
  age: "50",
  city: "kathmandu",
};
let text = "";
for (let x in person) {
  text += person[x] + " ";
  document.writeln(text);
}
