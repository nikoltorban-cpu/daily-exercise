//stars
let count = 1;
while (count <= 6) {
    let stars = "";
    for (let i = 0; i < count; i++) {
        stars += "* ";
    }
    console.log(stars);
    count++;
}

for (let i = 1; i <= 6; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "* ";
    }
    console.log(stars);
}