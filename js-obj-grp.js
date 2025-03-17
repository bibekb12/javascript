//create an array
const fruits = [
  {
    name: "apples",
    quantity: 300,
  },
  {
    name: "bananas",
    quantity: 500,
  },
  {
    name: "oranges",
    quantity: 200,
  },
  {
    name: "kiwi",
    quantity: 150,
  },
];

//callback function to select low volumes
function myCallBack({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

//group by ok and low
const result = Object.groupBy(fruits, myCallBack);

//display result
let text = "These fruits are OK: <br>";
for (let [x, y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
text += "<br>These fruits are low: <br>";
for (let [x, y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
document.writeln(text);
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + " : " + amount + ",<br>";
}
document.writeln(text);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + " : " + value + "<br>";
}
document.writeln(text);
