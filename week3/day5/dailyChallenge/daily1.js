function makeAllCaps(words){
   const isString = words.every(word => typeof word === "string");
   return new Promise((resolve, reject) => {
    if(isString){
        words.forEach((word, index, arr) => {
            arr[index] = word.toUpperCase();
         });
        resolve(words);    
    }
    else{
        reject(console.log('not every word is a string'));
    }
   });
}


function sortWords(upperCased){

    return new Promise((resolve, reject) =>{
        if(upperCased.length > 4) {
            resolve(upperCased.sort());
        }
        else {
            reject('the array is too short');
        }
    })

}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))