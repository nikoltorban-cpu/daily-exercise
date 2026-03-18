function compareToTen(num) {
    return new Promise((resolve, reject) =>{
        if(num <= 10){
            return resolve('the number is less or equal to 10');
        } else {
            return reject('the number is grater than 10');
        }
    })
}

compareToTen(5)
  .then(result => console.log(result))
  .catch(error => console.log(error));