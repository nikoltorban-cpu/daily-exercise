const tasks = [];
let sumbtn = document.getElementById("submit");
sumbtn.addEventListener("click", addTask);

function addTask(){
   let taskInput = document.getElementById("task");
   let task = taskInput.value.trim(); 
    if(task !== ""){
        tasks.push(task);
        displayTasks();
        taskInput.value = ""; 
    }
}

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });

}
addTask();
