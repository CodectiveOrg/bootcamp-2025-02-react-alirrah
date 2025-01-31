export default function countNumbersInArray(array: unknown[]): number {
  let count = 0;

  for (const item of array) {
    if (typeof item === "number") {
      count++;
    }
  }

  return count;
}