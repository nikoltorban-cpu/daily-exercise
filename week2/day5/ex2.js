// function winBattle(){
//     return true;
// }

// to an arrow function

const winBattle = () => {return true};
let experiencePoints = 0;
if(winBattle) {
    experiencePoints = 10;
} else {
    experiencePoints = 1;
}

console.log(experiencePoints);