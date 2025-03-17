function myDisplayer(some) {
  document.writeln(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(3, 4);
myDisplayer(result);
