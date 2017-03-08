function Car(brand, model, color) {
    color = color || 'black';

    this.brand = brand;
    this.model = model;
    this.color = color;
}

Car.prototype.drive = function() {
    console.log('Driving...');
};
Car.prototype.getInfo = function() {
    console.log('This is', this.color, this.brand, this.model);
};

function Truck(brand, model, color, capacity) {
    Car.call(this, brand, model, color);

    this.capacity = capacity;
    this.currentLoad = 0;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(volume) {
    console.log('Loading', volume);
    var newLoad = this.currentLoad + volume;
    this.currentLoad = Math.min(this.capacity, newLoad);
};
Truck.prototype.unload = function(volume) {
    console.log('Unloading', volume);
    var newLoad = this.currentLoad - volume;
    this.currentLoad = Math.max(0, newLoad);
};
Truck.prototype.getInfo = function() {
    Car.prototype.getInfo.call(this);

    console.log('Capacity:', this.capacity);
};

var ford = new Car('Ford', 'Focus', 'silver');
ford.getInfo();
ford.drive();

var kamaz = new Truck('Kamaz', '55111', 'white', 13000);
kamaz.getInfo();
kamaz.load(500);
kamaz.drive();