import ReverseArray from "./reverse-array";
import numberCountInArray from "./number-count-in-array";

(function () {
  const numberArray = [1, 2, 3, 4, 5];
  console.log("reverse a simple array of numbers:", ReverseArray(numberArray));

  const stringArray = ['a', 'b', 'c', 'd', 'e'];
  console.log("reverse a simple array of strings:", ReverseArray(stringArray));

  const emptyArray: boolean[] = [];
  console.log("handle an empty array:", ReverseArray(emptyArray));

  const oneElementArray: number[] = [10];
  console.log("handle an array with one element:", ReverseArray(oneElementArray));

  const mixedTypeArray = [1, 'two', 3.1, true];
  console.log("reverse an array with mixed types:", ReverseArray(mixedTypeArray));
})();

(function () {
  const numberArray = [1, 2, 3, 4, 5];
  console.log("count numbers in an array of numbers:", numberCountInArray(numberArray));

  const mixedTypeArray = [1, 'text', true, 2, null, 3.5, 'another string', NaN, [2, 3]];
  console.log("count numbers in an array with various type:", numberCountInArray(mixedTypeArray));

  const emptyArray: unknown[] = [];
  console.log("handle empty array:", numberCountInArray(emptyArray));
})();
