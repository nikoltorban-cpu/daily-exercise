
function getBoldItems(){
    const allBoldItems = [];
    const bold = document.querySelectorAll('strong');
    bold.forEach((word) => {allBoldItems.push(word.textContent)});
    return allBoldItems;
}

function highlight(){
    const bold = document.querySelectorAll('strong');

    
    bold.forEach((word, index) => {
        if (word.textContent === allBoldItems[index]) {
            word.style.color = 'blue';
        }
    });
}

function returnItemsToDefault(){
const bold = document.querySelectorAll('strong');

    bold.forEach((word) => {
            word.style.color = 'black';
        }
    );
}
    
const allBoldItems = getBoldItems();
console.log(allBoldItems);

const p = document.querySelector("p");

p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault);