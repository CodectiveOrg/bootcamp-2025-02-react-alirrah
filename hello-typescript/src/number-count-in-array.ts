export default function numberCountInArray(array: unknown[]): number {
  let numberCounter = 0;

  for (const index in array) {
    if (typeof array[index] === "number") {
      numberCounter++;
    }
  }

  return numberCounter;
}