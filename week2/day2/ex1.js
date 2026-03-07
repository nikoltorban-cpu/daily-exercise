// //Find the numbers divisible by 23
// sum2div = 0;
// function displayNumbersDivisible(divisor){
//     for(let i = 0; i <= 500; i++){
//         if(i % divisor === 0){
//             console.log(i);
//             sum2div += i;
//         }
//     }
// }
// let divisor = prompt("Enter a divisor:");
// displayNumbersDivisible(parseInt(divisor));
// console.log(`the sum of the numbers divisible by ${divisor} is ${sum2div}`);

// //shopping list
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// const shoppingList = ["banana", "orange", "apple"];
// function myBill(){
//     let total = 0; 
//     for(let i = 0; i < shoppingList.length; i++){
//         if(stock[shoppingList[i]] > 0){
//             total += prices[shoppingList[i]];
//             stock[shoppingList[i]] -= 1;
//         }
//     }
//     return total;

// }
// console.log(myBill());

// //What is in my wallet
// function changeEnough(itemPrice, amountOfChange){
//     let totalChange = 0;
//     totalChange += amountOfChange[0] * 0.25;
//     totalChange += amountOfChange[1] * 0.10;
//     totalChange += amountOfChange[2] * 0.05;
//     totalChange += amountOfChange[3] * 0.01;
//     return totalChange >= itemPrice;
// }
// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

// //vacation costs 
// function hotelCost(){
//     numOfNights = prompt("how many nights would you like to stay? ");
//     if(isNaN(numOfNights) || numOfNights <= 0){
//         alert("Please enter a valid number of nights.");
//         return hotelCost(); 
//     }
//     return numOfNights * 140; 

// }

// function planeRideCost(){
//     let destination = prompt("What's your destination? ");
//     if(typeof destination !== "string" || destination.trim() === ""){
//         alert("Please enter a valid destination.");
//         return planeRideCost(); 
//     }
//     destination = destination.toLowerCase();
//     switch(destination){
//         case "london":
//             return 183;
//         case "paris":
//             return 220;
//         default:
//             return 300;
//     }
// }

// function rentalCarCost(){
//     let numOfDays = prompt("How many days would you like to rent the car? "); 
//     if(numOfDays === NaN || numOfDays <= 0){
//         alert("Please enter a valid number of days.");
//         return rentalCarCost(); 
//     }
//     let cost = numOfDays * 40; 
//     if(numOfDays > 10){
//         cost *= 0.95; 
//     }
//     return cost;
// }

// function totalVacationCost(){
//     const hotel = hotelCost();
//     const plane = planeRideCost();
//     const car = rentalCarCost();
//     const total = hotel + plane + car;
//     console.log(`The hotel cost: $${hotel}`);
//     console.log(`The plane tickets cost: $${plane}`);
//     console.log(`The car rental cost: $${car}`);
//     console.log(`Total vacation cost: $${total}`);
// }
// totalVacationCost();

//users
let div = document.getElementById("container");
console.log(div);
let lis = document.querySelectorAll(".list li");
lis[1].textContent = "Richard";
lis[3].remove();
lis[0].textContent = "Nikol";
lis[2].textContent = "Nikol";
let newAdd = document.querySelectorAll(".list")
newAdd.forEach(list => list.classList.add("student_list"));
newAdd[0].classList.add("university","attendance");
div.style.backgroundColor = '#7ebef9';
div.style.padding = '10px';
let items = document.querySelectorAll("li");
items[3].style.display = "none";
items[1].style.border = "1px solid black";
let change = document.querySelector("body");
change.style.fontSize = "30px";


