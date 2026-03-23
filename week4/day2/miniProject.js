const div = document.querySelector('.content'); 
const btn = document.getElementById('findPerson');
const loader = document.querySelector('.loader');

loader.style.display = "none";

btn.addEventListener('click', newPerson);

function newPerson() {
  div.innerHTML = "";
  loader.style.display = "block"; 

  const id = Math.floor(Math.random() * 83) + 1;

  setTimeout(() => {
    fetch(`https://www.swapi.tech/api/people/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("failed to load");
        }
        return response.json();
      })
      .then(data => {
        loader.style.display = "none"; 

        const person = data.result.properties;

        div.innerHTML = `
          <h2>${person.name}</h2>
          <p>Birth Year: ${person.birth_year}</p>
          <p>Gender: ${person.gender}</p>
          <p>Height: ${person.height}</p>
        `;
      })
      .catch(error => {
        loader.style.display = "none";
        console.log("didn't find a person");
      });

  }, 1000);
}