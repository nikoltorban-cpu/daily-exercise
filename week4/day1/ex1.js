fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then(obj => console.log(obj))
  .catch(error => console.log(error));