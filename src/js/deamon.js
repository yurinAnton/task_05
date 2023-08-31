
export class Deamon extends Character {
    constructor(name, type, health, level) {
        super(name);
        super(type);
        super(health);
        super(level);
        this.attack = 10;
        this.defence = 40
    }
}