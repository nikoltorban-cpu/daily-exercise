// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

function anagram(str1, str2) {
  let arr1 = [...str1.toLowerCase().replace(/ /g, '')].sort();
  let arr2 = [...str2.toLowerCase().replace(/ /g, '')].sort();

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(anagram('Astronomer', 'Moon star  er'));
console.log(anagram('School master', 'The classroom'));
console.log(anagram('Aaron', 'Xiao'));
console.log(anagram('Aaron', 'Aaronzzzz'));