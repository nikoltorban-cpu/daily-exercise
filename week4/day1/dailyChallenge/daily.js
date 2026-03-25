const form = document.getElementById("gifForm");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("searchInput").value;

  fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${value}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch gif");
      }
      return response.json();
    })
    .then(data => {
      const gifUrl = data.data.images.original.url;
      const gifDiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = gifUrl;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "DELETE";
      deleteBtn.addEventListener("click", () => {
        gifDiv.remove();
      });

      gifDiv.appendChild(img);
      gifDiv.appendChild(deleteBtn);

      container.appendChild(gifDiv);
    })
    .catch(error => console.log(error));

    deleteAllBtn.addEventListener("click", () => {
    container.innerHTML = "";
});
});