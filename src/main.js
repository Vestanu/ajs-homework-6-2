/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */

function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  if (this.health >= 0) {
    return this.health -= points * (1 - this.defence / 100);
  }
};

export default Character;
