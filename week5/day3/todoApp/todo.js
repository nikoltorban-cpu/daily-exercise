

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({
      text: task,
      completed: false
    });
  }

  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.text} - ${
          task.completed ? "Completed" : "Not completed"
        }`
      );
    });
  }
}