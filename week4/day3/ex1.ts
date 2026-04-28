// Exercise 1: Hello, World! Program
console.log('Hello World!');

// Exercise 2: Type Annotations
const age: number = 21;
const names: string = 'Nikol';
console.log(`My name is ${name} and I am ${age} years old`);

// Exercise 3: Union Types
let id: string | number;
id = 1;
id = "nu";

// Exercise 4: Control Flow with if...else
function whatIsNum(num: number): string {
    if(num === 0) {
        return 'the number is 0';
    } else {
        if(num < 0){
            return 'the number is negative';
        }
    } 
    return 'the number is positive';
}

console.log(whatIsNum(10));

// Exercise 5: Tuple Types
function getDetails(name: string, age: number) {
    const user = [name, age, `Hello ${name}! You are ${age} years old`];
    return user;
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);
// Expected output
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

// Exercise 6: Object Type Annotations
type Person = {name: string; age: number};

let person: Person = {
    name: 'Nikol',
    age: 21
};

function createPerson(name1: string, age1: number): Person{
    return{
        name: name1,
        age: age1
    }
}
console.log(createPerson('Nikol', 21));

//exercise 7:
const button = document.getElementById('button') as HTMLButtonElement;
button.innerText = 'Changed Button';

//exercise 8:
function getAction(role: string): string {
  switch (role) {
    case "admin":
    case "superadmin":
      return "Manage users and settings";

    case "editor":
    case "author":
      return "Edit content";

    case "viewer":
    case "user":
      return "View content";

    case "guest":
      return "Limited access";

    default:
      return "Invalid role";
  }
}


console.log(getAction("admin"));   // Manage users and settings
console.log(getAction("editor"));  // Edit content
console.log(getAction("viewer"));  // View content
console.log(getAction("guest"));   // Limited access
console.log(getAction("unknown")); // Invalid role

//exercise 9:
const greet = (name: string) => {
    if(!name) {
        return "greetings, user!"
    }
    else return `greetings, ${name}!`
};