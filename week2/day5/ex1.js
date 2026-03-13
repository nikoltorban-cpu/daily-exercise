// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
console.log(funcOne()); // a = 3 because the argument if is true

// #1.2 What will happen if the variable is declared 
// with const instead of let ? it will give an error since const cannot change 

//#2
 a = 0;
function funcTwo() {
    a = 5;
} // a will be still a 0 since the function doesnt return the new value of a

function funcThree() {
    alert(`inside the funcThree function ${a}`); 
}

// #2.1 - run in the console:
console.log(funcThree());
console.log(funcTwo());
console.log(funcThree()); // a will get the 5 out of the function funcTwo()
// #2.2 What will happen if the variable is declared 
// with const instead of let ? // it will give an error because you cannot change a variable of const


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
console.log(funcFour());
console.log(funcFive()); // a = 'hello'

//#4
 a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`); // alerts a = test
}


// #4.1 - run in the console:
console.log(funcSix());
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
 a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // a = 5
}
alert(`outside of the if block ${a}`); // a = 2

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?