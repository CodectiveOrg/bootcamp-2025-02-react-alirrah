export default function ReverseArray<T>(array:T[]):T[] {
  let reversedArray: T[] = [];

  for (let i = array.length - 1; i >= 0 ; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}