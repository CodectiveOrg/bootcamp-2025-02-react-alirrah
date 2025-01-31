import reverseArray from "./reverse-array";
import countNumbersInArray from "./count-numbers-in-array";
import orderItemByTime, { Item } from "./order-item-by-time";

(function () {
  const numberArray = [1, 2, 3, 4, 5];
  console.log("reverse a simple array of numbers:", reverseArray(numberArray));

  const stringArray = ['a', 'b', 'c', 'd', 'e'];
  console.log("reverse a simple array of strings:", reverseArray(stringArray));

  const emptyArray: boolean[] = [];
  console.log("handle an empty array:", reverseArray(emptyArray));

  const oneElementArray: number[] = [10];
  console.log("handle an array with one element:", reverseArray(oneElementArray));

  const mixedTypeArray = [1, 'two', 3.1, true];
  console.log("reverse an array with mixed types:", reverseArray(mixedTypeArray));
})();

(function () {
  const numberArray = [1, 2, 3, 4, 5];
  console.log("count numbers in an array of numbers:", countNumbersInArray(numberArray));

  const mixedTypeArray = [1, 'text', true, 2, null, 3.5, 'another string', NaN, [2, 3]];
  console.log("count numbers in an array with various type:", countNumbersInArray(mixedTypeArray));

  const emptyArray: unknown[] = [];
  console.log("handle empty array:", countNumbersInArray(emptyArray));
})();

(function () {
  const onlyHaveCreatedAt: Item[] = [
    { created_at: '2022-01-03T10:00:00Z' },
    { created_at: '2022-01-02T10:00:00Z' },
    { created_at: '2022-01-01T10:00:00Z' },
  ];
  console.log("sort items by create_at when modified_at is not present:", orderItemByTime(onlyHaveCreatedAt));

  const SomeOfThemHaveModifiedAt: Item[] = [
    { created_at: '2022-01-01T10:00:00Z', modified_at: '2022-01-03T10:00:00Z' },
    { created_at: '2022-01-02T10:00:00Z' },
    { created_at: '2022-01-01T10:00:00Z', modified_at: '2022-01-01T10:00:00Z' },
  ];
  console.log("sort items by modified_at if present:", orderItemByTime(SomeOfThemHaveModifiedAt));

  const emptyArray: Item[] = [];
  console.log("handle an empty array:", orderItemByTime(emptyArray));

  const timestamp = '2022-01-01T10:00:00Z';
  const SameTime: Item[] = [
    { created_at: timestamp },
    { created_at: timestamp, modified_at: timestamp },
    { created_at: timestamp },
  ];
  console.log("handle all items with the same timestamp:", orderItemByTime(SameTime))
})();
