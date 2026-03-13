(function(username){

    const navbar = document.getElementById("navBar");

    const userDiv = document.createElement("div");

    const name = document.createElement("h4");
    name.textContent = 'Welcome ' + username + '!';

    const img = document.createElement("img");
    img.src = "https://cdn.drawception.com/images/avatars/647493-B9E.png.cc/40";

    userDiv.appendChild(img);
    userDiv.appendChild(name);

    navbar.appendChild(userDiv);

})("John");