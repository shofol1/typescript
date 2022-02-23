const b: number = 334;
function add(number1: number, number2: number): number {
  return number1 + number2;
}
add(20, 20);
add(b, 39);

const sub = (number1: number, number2: number): number => {
  return number1 - number2;
};
sub(40, 22);

const arr: number[] = [22, 43, 43, 43];
const arr1: string[] = ["22", "43", "43", "43"];

type numberString = number | string;
const id: numberString = "33";

interface Iperson {
  id: number;
  name: string;
  gender: string;
}

const person: Iperson = {
  id: 1,
  name: "shofol",
  gender: "male",
};
