const colors = ["Blue", "Green", "Red", "Orange", "Violeta", "Indigo", "Yellow"];

colors.forEach((color, index) => console.log(`${index}# choice is ${color}`));

let isViolet = false;

colors.some(color => {if(color === "Violet"){
    isViolet = true;
}});

if(isViolet == true){
    console.log("yeah");
} else{
    console.log("no...");
}
