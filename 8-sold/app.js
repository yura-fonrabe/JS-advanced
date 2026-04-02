class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal () {
        return this.amount
    }
}

class fixBilling extends Billing {
    constructor(amount) {
        super(amount)
    }
}

class hourBilling extends Billing {
    constructor (amount, hour) {
        super()
        this.hour = hour;
    }

    calculateTotal () {
        return this.amount * this.hour;
    }
}

class itemBilling extends Billing {
    constructor(amount, item) {
        super(amount);
        this.item = item;
    }
    calculateTotal() {
        return this.amount * this.item;
    }
}
