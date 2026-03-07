const form = document.querySelector('form');
console.log(form);
const inputs = document.querySelectorAll('input');
console.log(inputs);
const inputsName = document.querySelectorAll('input[name]');
console.log(inputsName);
const ul = document.querySelector(".usersAnswer");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {
        const value = input.value.trim();

        if (value !== "") { 
            const li = document.createElement("li");
            li.textContent = value;
            ul.appendChild(li);
        }
    });

});