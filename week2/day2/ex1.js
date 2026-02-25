//Find the numbers divisible by 23
sum2div = 0;
function displayNumbersDivisible(divisor){
    for(let i = 0; i <= 500; i++){
        if(i % divisor === 0){
            console.log(i);
            sum2div += i;
        }
    }
}
let divisor = prompt("Enter a divisor:");
displayNumbersDivisible(parseInt(divisor));
console.log(`the sum of the numbers divisible by ${divisor} is ${sum2div}`);