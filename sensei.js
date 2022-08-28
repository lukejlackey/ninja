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

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Be the change you want to see in the world.")
    }
}
const superSensei = new Sensei("Gnome Child");
superSensei.speakWisdom();
superSensei.showStats();