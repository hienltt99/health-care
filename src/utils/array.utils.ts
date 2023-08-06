export const initArr = (arrayLength: number) => {
  const arr = new Array(arrayLength);
  for (let i = 0; i < arrayLength; i++) {
    arr[i] = i;
  }

  return arr;
}
