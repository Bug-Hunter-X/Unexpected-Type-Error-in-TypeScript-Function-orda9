function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return "Invalid input: parameters must be numbers";
  }
}

let result1 = addSafe(10, 5); // result1 will be 15
let result2 = addSafe("hello", 5); // result2 will be "Invalid input: parameters must be numbers"
let result3 = addSafe(10, "world"); // result3 will be "Invalid input: parameters must be numbers"
console.log(result1, result2, result3); 