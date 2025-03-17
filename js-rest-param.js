function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let x = sum(88, 202, 55, 22, 303, 123);
document.writeln(x);
