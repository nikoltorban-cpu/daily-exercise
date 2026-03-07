const h1 = document.querySelector('h1');
console.log(h1.innerText);
const article = document.querySelector('article');
article.lastElementChild.remove();
const changeH2 = document.querySelector('h2');
const onClick = () => changeH2.style.backgroundColor = 'red';
changeH2.addEventListener('click', onClick); 

const hideH3 = document.querySelector('h3');
const onClick2 = () => hideH3.style.display = 'none';
hideH3.addEventListener('click', onClick2); 

const button = document.getElementById("allBold");
button.style.blockSize = '70px';
button.style.width = '80px';
const everyline = document.querySelector('body');
const onClick3 = () => everyline.style.fontWeight = 'bold';
button.addEventListener('click', onClick3);

