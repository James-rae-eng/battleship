/* eslint-disable */

// Testing ship function
const index = require('./index');

test('create ship object with properties: length, and return the length', () => {
  expect(index.shipFactory(2).length).toBe(2);
});

test('when ship hit function is called, increase hit number', () => {
    const ship = index.shipFactory(1);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('when ship isSunk function is called, is not sunk if hits < length', () => {
    const ship = index.shipFactory(3);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
});

test('when ship isSunk function is called, is sunk if hits = length', () => {
    const ship = index.shipFactory(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});
