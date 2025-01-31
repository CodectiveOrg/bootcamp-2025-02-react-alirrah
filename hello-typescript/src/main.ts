import ReverseArray from "./reverse-array";

(function () {
  const numberArray = [1, 2, 3, 4, 5];
  console.log("reverse a simple array of numbers: ", ReverseArray(numberArray));

  const stringArray = ['a', 'b', 'c', 'd', 'e'];
  console.log("reverse a simple array of strings: ", ReverseArray(stringArray));

  const emptyArray: boolean[] = [];
  console.log("handle an empty array: ", ReverseArray(emptyArray));

  const oneElementArray: number[] = [10];
  console.log("handle an array with one element: ", ReverseArray(oneElementArray));

  const mixedTypeArray = [1, 'two', 3.1, true];
  console.log("reverse an array with mixed types: ", ReverseArray(mixedTypeArray));
})()
