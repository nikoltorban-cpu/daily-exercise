
import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask("Study React");
myTodos.addTask("Go to the gym");
myTodos.addTask("Finish homework");

myTodos.completeTask(0);
myTodos.completeTask(2);

myTodos.listTasks();