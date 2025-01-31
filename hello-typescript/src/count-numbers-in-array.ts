export default function countNumbersInArray(array: unknown[]): number {
  let count = 0;

  for (const index in array) {
    if (typeof array[index] === "number") {
      count++;
    }
  }

  return count;
}