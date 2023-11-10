// TODO: write your code here

export default class Character {
  constructor(name, type) {
    this.name = "";
    this.types = [
      "Bowerman",
      "Swordman",
      "Magisian",
      "Deamon",
      "Undead",
      "Zombie",
    ];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('Неизвестное существо');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (health === 0) {
      throw new Error('Нельзя повысить уровень мертвецу');
    } else {
      return (
        (this.level += 1),
        (this.attack = attack * 1.2),
        (this.defence = defence * 1.2),
        (this.health = 100)
      );
    }

  }
  damage(points) {
    if (health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
// console.log("Hello app");
