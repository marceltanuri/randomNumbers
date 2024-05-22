class RandomNumbers {

    usedNumbers = []
    
    config = {
        "to": 0,
        "from": 10,
        "quantity": 1
    }

    constructor(config) {
        if(config==undefined)
            return;

        this.config = config

        if (this.config.to < this.config.from) {
            [this.config.from, this.config.to] = [this.config.to, this.config.from];
        }

        console.debug(this.config)
    }

    run() {
        const range = this.config.to - this.config.from + 1;

        if (this.usedNumbers.length > (range - this.config.quantity)) {
            throw new Error("No more non repeatable numbers available");
        }

        const numbers = new Set();


        while (numbers.size < this.config.quantity) {
            const random = Math.floor(Math.random() * range) + this.config .from
            if (!numbers.has(random) && !this.usedNumbers.includes(random))
                numbers.add(random)
        }

        console.debug(numbers)

        const _randomNumbers = Array.from(numbers)

        _randomNumbers.forEach(element => {
            this.usedNumbers.push(element)
        });

        return _randomNumbers
    }

    setConfig(config){
        this.config = config
    }

    reset() {
        this.usedNumbers = []
    }
}