import { people } from './data.js';

function averageAge(people) {
    let sumAge = 0;
    people.forEach(person => {
        sumAge += person.age;
    });

    let average = sumAge / people.length;

    return average;
}
const result = averageAge(people);
console.log(result);
