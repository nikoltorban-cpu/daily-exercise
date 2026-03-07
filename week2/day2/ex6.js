//change the NavBar
let navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");
let ul = document.querySelector('ul');
let newLi = document.createElement("li");
newLi.innerHTML = '<a href="#">LogOut</a>';
let logout = document.createTextNode(" LogOut");
newLi.appendChild(logout);
ul.appendChild(newLi);

let firstUl = ul.firstElementChild.textContent;
let lastUl = ul.lastElementChild.textContent;
console.log(firstUl, lastUl);
