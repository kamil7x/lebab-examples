class Car {
    constructor(brand, model, color = 'black') {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    drive() {
        console.log('Driving...');
    }

    getInfo() {
        console.log('This is', this.color, this.brand, this.model);
    }
}

class Truck extends Car {
    constructor(brand, model, color, capacity) {
        super(brand, model, color);

        this.capacity = capacity;
        this.currentLoad = 0;
    }

    load(volume) {
        console.log('Loading', volume);
        const newLoad = this.currentLoad + volume;
        this.currentLoad = Math.min(this.capacity, newLoad);
    }

    unload(volume) {
        console.log('Unloading', volume);
        const newLoad = this.currentLoad - volume;
        this.currentLoad = Math.max(0, newLoad);
    }

    getInfo() {
        super.getInfo();

        console.log('Capacity:', this.capacity);
    }
}

const ford = new Car('Ford', 'Focus', 'silver');
ford.getInfo();
ford.drive();

const kamaz = new Truck('Kamaz', '55111', 'white', 13000);
kamaz.getInfo();
kamaz.load(500);
kamaz.drive();