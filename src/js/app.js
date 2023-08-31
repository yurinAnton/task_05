// TODO: write your code here
import { Bowerman } from "./bowerman";
import { Swordman } from "./swordman";
import { Magisian } from "./magisian";
import { Deamon } from "./deamon";
import { Zombie } from "./zombie";
import { Undead } from "./undead";

class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = "";
    this.type = [
      "Bowerman",
      "Swordman",
      "Magisian",
      "Deamon",
      "Undead",
      "Zombie",
    ];
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
  levelUp(level) {
    let newLevel = level + 1;
    if (newLevel > level)
      return (
        (this.level += 1),
        (this.attack = attack * 1.2),
        (this.defence = defence * 1.2),
        (this.health = 100)
      );
  }
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}

export default Character;
