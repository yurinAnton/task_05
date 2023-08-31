
export class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name);
        super(type);
        super(health);
        super(level);
        this.attack = 40;
        this.defence = 10
    }
}