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
        console.log('This ninja is named ' + this.name + ' and has ' + this.health + ' health, ' + this.speed + ' speed and ' + this.strength + ' strength.');
    }
    
    drinkSake(){
        this.health += 10;
    }
}

class sensei extends ninja{
    constructor (wisdom){
        super(wisdom);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(this.name + ' says: "My health grows from my inner strength!"');
    }
}

const ninja1 = new ninja("Hyabusa", 0);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

const superSensei = new sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();