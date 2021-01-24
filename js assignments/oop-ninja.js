class ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log('This ninja is named ' + this.name + ' and has ' + this.health + ' health, ' + this.speed + ' speed and ' + this.strength + ' strength');
    }
    
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new ninja("Hyabusa", 0);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();