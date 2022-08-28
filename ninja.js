class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        for(const stat of Object.keys(this)) console.log(stat + ": " + this[stat]);
    }

    drinkSake() {
        this.health += 10;
    }
}

var ninja = new Ninja("Jeff");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();