const form = document.getElementById("MyForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const radius = document.getElementById("radius").value;
    const volumeInput = document.getElementById("volume");

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    volumeInput.value = volume.toFixed(2);
});