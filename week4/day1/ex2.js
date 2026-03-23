fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch gifs");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));