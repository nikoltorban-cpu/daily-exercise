const product = require('./products.js');

function isThereProduct(someProduct) {
    for(let i = 0; i < product.length; i++) {
        if(product[i].name === someProduct){
            console.log("there's a match!");
            return;
        } 
    }
    console.log('no match');
}

console.log(isThereProduct('water'));
console.log(isThereProduct('bread'));
console.log(isThereProduct('milk'));
console.log(isThereProduct('toys'));
