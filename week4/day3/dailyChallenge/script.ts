function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;
  return allowedTypes.includes(valueType);
}

console.log(validateUnionType(10, ["number", "string"])); 
// true

console.log(validateUnionType("hello", ["number", "string"])); 
// true

console.log(validateUnionType(true, ["number", "string"])); 
// false

console.log(validateUnionType({}, ["object"])); 
// true

console.log(validateUnionType([], ["object"])); 
// true