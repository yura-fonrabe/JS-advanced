'use strict';

class Task {
    #mess;

    constructor(message) {
        this.#mess = message;
    }

    run() {
        console.log(this.#mess);
    }
}

class User {
    task;

    constructor(task) {
        this.task = task;
    }

    do() {
        this.task.run();
    }
}

const task1 = new Task('Написать текст');
const user1 = new User(task1);

user1.do();
