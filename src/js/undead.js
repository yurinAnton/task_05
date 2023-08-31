
export class Undead extends Character {
    constructor(name, type, health, level) {
        super(name);
        super(type);
        super(health);
        super(level);
        this.attack = 25;
        this.defence = 25
    }
}