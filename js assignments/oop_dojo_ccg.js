class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost,power,res);
        this.power = power;
        this.res = res;
    }

    attack (target){
        target.res -= this.power;
        console.log(this.name + " has attacked " + target.name + " and dealt " + this.power + " damage to it's resistance.")
    }
}

class Effect extends Card{
    constructor(name,cost,reseffect,poweffect){
        super(name,cost,reseffect,poweffect);
        this.reseffect = reseffect;
        this.poweffect = poweffect;
    }

    actUpon (effecttarget){
        effecttarget.res += this.reseffect;
        effecttarget.power += this.poweffect;
        console.log(this.name + " has been played and done " + this.reseffect + " resistance effect and " + this.poweffect + " power effect to " + effecttarget.name + ".");
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, 3, 0);
const unhandPR = new Effect("Unhandled Promise Rejection", 1, -2, 0);
const pairProg = new Effect("Pair Programming", 3, 0, 2);

console.log(redBeltNinja.name + " has entered play with " + redBeltNinja.power + " power and " + redBeltNinja.res +" resistance.");
hardAlgo.actUpon(redBeltNinja);
console.log(blackBeltNinja.name + " has entered play with " + blackBeltNinja.power + " power and " + blackBeltNinja.res +" resistance.");
unhandPR.actUpon(redBeltNinja);
pairProg.actUpon(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);