import { Task } from "./task.js"
import { User } from "./user.js";

const task1 = new Task('Написать текст');
const user1 = new User(task1);

user1.do();
