const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(){
    return new Promise((resolve, reject) => {try {
        const newObj = JSON.parse(morse);
        if(Object.keys(newObj).length === 0){
            reject('object is empty');
        } else{
            resolve(newObj);
        }
    }catch (error) {
      reject("Invalid JSON");
    }})
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {

    const input = prompt("Enter a word or sentence: ");
    const chars = input.toLowerCase().split("");
    const morseArray = [];

    for (let char of chars) {
      if (char === " ") {
        morseArray.push(" ");
      }
      else if (!morseJS[char]) {
        reject(`Character "${char}" does not exist in morse`);
        return;
      }
      else {
        morseArray.push(morseJS[char]);
      }
    }
    resolve(morseArray);
  });
}

toJs()
  .then(morseJS => toMorse(morseJS))
  .then(result => console.log(result))
  .catch(error => console.log(error));
