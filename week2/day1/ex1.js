//list of people
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Greg"), 1);
people[people.indexOf("James")] = "Jason";
people.push("Nikol");
console.log(people.indexOf("Mary"));
let newPeople = people.slice(1,3);
console.log(people.indexOf("Foo"));
console.log(people);
console.log(newPeople);
let last = people[people.length - 1];
console.log(last);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

//favorite colors
let colors = ["blue", "red", "green", "yellow", "purple"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

//repeat the question
let num = prompt("Pick a number");
num.typeof = "number";
while (num < 10) {
    num = prompt("Pick a number");
    num.typeof = "number";
}


//building management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
    console.log(building.numberOfFloors);
    console.log(building.numberOfAptByFloor.firstFloor);
    console.log(building.numberOfAptByFloor.thirdFloor);
    console.log(building.nameOfTenants[1]);
    console.log(building.numberOfRoomsAndRent.dan[0]);
    if(building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1]){ 
        building.numberOfRoomsAndRent.dan[1] = 1200;
        console.log(building.numberOfRoomsAndRent.dan[1]);

    }

//family
let family = {
    dad: "John",
    mom: "Jane",
    son: "Jack",
    daughter: "Jill",
}
for (let key in family) {
    console.log(key);
}
for (let key in family) {
    console.log(family[key]);
}

//rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
for (let key in details) {
    console.log(key + " " + details[key]);
}

//secret group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretName = "";
for (let i = 0; i < names.length; i++) {
    secretName += names[i][0];
}
console.log(secretName);


