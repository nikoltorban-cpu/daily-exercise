const tasks = [];

let sumbtn = document.getElementById("submit");
let clearBtn = document.getElementById("clear");

sumbtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTasks);

function addTask(){
   let taskInput = document.getElementById("taskInput");
   let task = taskInput.value.trim(); 

    if(task !== ""){
        tasks.push(task);
        displayTasks();
        taskInput.value = ""; 
    }
}

function displayTasks(){
    let taskList = document.querySelector(".tasks");
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let leftSide = document.createElement("div");
        leftSide.classList.add("taskLeft");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("change", function(){
        li.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });
        let text = document.createTextNode(task);

        leftSide.appendChild(checkbox);
        leftSide.appendChild(text);

        let delBtn = document.createElement("button");
        delBtn.classList.add("deleteBtn");
        delBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="black">
            <path d="M3 6h18v2H3zm2 3h14l-1 12H6zm5-7h4l1 2H9z"/>
            </svg>
            `;

        delBtn.addEventListener("click", function(){
            tasks.splice(index, 1);
            displayTasks();
        });

        li.appendChild(leftSide);
        li.appendChild(delBtn);

        taskList.appendChild(li);
    });

}

function clearTasks(){
    tasks.length = 0;
    displayTasks();
}

