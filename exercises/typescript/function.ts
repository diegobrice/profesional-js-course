function add(a: number, b: number) {
  return a + b;
}

const suma = add(4, 8);
console.log(suma);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(fourPlus6);

function fullName(firstName: string, lastName: string = ""): string {
  return `${firstName} ${lastName}`;
}

const diego = fullName("Diego");
console.log(diego);
