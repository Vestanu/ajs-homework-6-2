/* eslint-disable import/extensions */
import Character from '../src/main.js';

test('Считает урон протопипа при здоровье больше 0', () => {
  const characterDamage = new Character('Natasha', 'Zombie');
  expect(characterDamage.damage(50)).toBe(70);
});

test('Не считает урон, при здоровье меньше 0', () => {
  const characterDamage = new Character('Natasha', 'Zombie');
  characterDamage.health = -10;
  expect(characterDamage.damage(50)).toBe(undefined);
});

test('Считает урон, при здоровье 0', () => {
  const characterDamage = new Character('Natasha', 'Zombie');
  characterDamage.health = 0;
  expect(characterDamage.damage(50)).toBe(-30);
});
