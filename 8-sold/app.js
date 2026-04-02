class Count {
    constructor(){
        this.counter = 0
    }
}

class fixBilling extends Count {
    constructor() {
        this.counter = 1;
    }
}

class hourBilling extends Count{
    constructor(hours) {
        this.counter = hours;
    }
}

class itemBilling extends Count{
    constructor(items) {
        this.counter = items;
    }
}

class Billing {
    #amount;
    calculateTotal (var_counter) {
        return this.#amount * var_counter.counter;
    }
}
