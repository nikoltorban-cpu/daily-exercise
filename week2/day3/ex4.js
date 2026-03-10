const form = document.getElementById("MyForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const radius = document.getElementById("radius").value;
    const volumeInput = document.getElementById("volume");

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    volumeInput.value = volume.toFixed(2);
});

const arr = [1,2,3,4,5,6,7,8,9.10];
arr.forEach((num) => {
    if (num % 2 === 0) 
        console.log(num);
});

const words = ["wow", "hey", "bye"];
const starts = words.some(word => word.startsWith('h'));