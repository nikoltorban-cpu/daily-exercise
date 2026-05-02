function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42, "world"]));
console.log(getFirstElement([100, "test", 200])); 