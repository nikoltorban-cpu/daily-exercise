let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries =() => (groceries.fruits.forEach((fruit) => console.log(fruit)));

displayGroceries();

const cloneGroceries = () => {
    const user = client;
    const shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
};

cloneGroceries();
console.log(groceries);
