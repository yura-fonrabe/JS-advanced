export class Task {
    #mess;

    constructor(message) {
        this.#mess = message;
    }

    run() {
        console.log(this.#mess);
    }
}