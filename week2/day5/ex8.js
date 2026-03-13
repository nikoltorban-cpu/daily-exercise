function makeJuice(size){

    const ingredients = [];

    function addIngredients(first, second, third){
        ingredients.push(first, second, third);
        
    }
    addIngredients('apple', 'orange', 'pear');
    addIngredients('bannana', 'milk', 'nuts');
    function displayJuice(){
        const li = document.createElement('li');
        const body = document.querySelector('body');

        li.textContent = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]} and ${ingredients[2]}`;
        body.appendChild(li);
    }
    
    displayJuice();
}
makeJuice('medium');