import Character from "../app";
import { Bowerman } from "./bowerman";
import { Swordman } from "./swordman";
import { Magisian } from "./magisian";
import { Deamon } from "./deamon";
import { Zombie } from "./zombie";
import { Undead } from "./undead";

test("check levelUp", () => {
  const result = Bowerman.levelUp(1);

  expect(result).toBe();
});

test("check demage", () => {
  const result = Bowerman.demage(4);
  expect(result).toBe(3);
});
