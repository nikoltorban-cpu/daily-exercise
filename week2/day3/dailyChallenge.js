const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

let stories = [];
let values = {};

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill all fields");
        return;
    }

    values = { noun, adjective, person, verb, place };

    stories = [
        `${person} went to the ${place} with a ${adjective} ${noun} and started to ${verb}.`,
        `One day ${person} found a ${adjective} ${noun} in the ${place} and decided to ${verb}.`,
        `At the ${place}, ${person} saw a ${adjective} ${noun} that wanted to ${verb}.`
    ];

    showRandomStory();
});

function showRandomStory() {
    let random = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[random];
}