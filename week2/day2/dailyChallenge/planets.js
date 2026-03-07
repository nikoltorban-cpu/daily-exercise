const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const cll = document.querySelector(".listPlanets");

planets.forEach((planet) => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add("planet");
    planetDiv.textContent = planet;
    planetDiv.style.display = "flex";
    planetDiv.style.justifyContent = "center";
    planetDiv.style.alignItems = "center";
    const color = ['red', 'orange', 'yellow', 'blue', 'purple', 'pink'];
    let indexColor = Math.floor(Math.random() * color.length);
    let rndColor = color[indexColor];
    planetDiv.style.backgroundColor = rndColor;
    cll.appendChild(planetDiv);

})
