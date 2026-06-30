const calcType = (a, b, res) =>
  a + b === res ? "addition":
  a - b === res ? "subtraction":
  a / b === res ? "division":
  a * b === res ? "multiplication":
  null;

  const a = 5;
  const b = 2;
  const res = 10;

console.log(calcType(a, b, res));
