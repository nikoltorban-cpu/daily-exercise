const div = document.querySelector('.content'); 
const btn = document.getElementById('findPerson');
const loader = document.querySelector('.loader');

btn.addEventListener('click', newPerson);

async function newPerson() {
  div.innerHTML = "";
  loader.style.display = "block"; 
  
  const id = Math.floor(Math.random() * 83) + 1;
  
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);
      
    if (!response.ok) {
      throw new Error("failed to load");
    }

    const data = await response.json();
    const person = data.result.properties;

    const homeWorldPromise = (await fetch(person.homeworld));
    const home = await homeWorldPromise.json();
    const nameOfHomeWorld = home.result.properties.name;
      
    loader.style.display = "none"; 

        div.innerHTML = `
          <h2>${person.name}</h2>
          <p>Birth Year: ${person.birth_year}</p>
          <p>Gender: ${person.gender}</p>
          <p>Height: ${person.height}</p>
          <p>Home World: ${nameOfHomeWorld}</p>
        `;
    
      } catch (error) {
        loader.style.display = "none";
        div.innerHTML = `<h2>Oh No! That person isn't available..</h2>`;
      }

}
  