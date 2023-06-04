/* eslint-disable */

// Testing ship function
const index = require('./index');

test('create ship object with length property and return the length', () => {
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

test('ship can be given an id, as well as length as tested previously', () => {
    const ship = index.shipFactory(2, 'a');
    expect(ship.id).toMatch('a');
});

// Testing gameboard
test('gameboard creates a nested array board when called, filled with -, ', () => {
    const gameboard = index.gameboardFactory();
    // game.board[1][5] = 'a';
    // expect(game.board[1][5]).toMatch('a');
    expect(gameboard.board[0][3]).toMatch('-');
    expect(gameboard.board[7][8]).toMatch('-');
});

test('place ship horizontally on gameboard at coordinates given', () => {
    const ship = index.shipFactory(2, 'a');
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 5, 'h', ship.id, ship.length);
    expect(gameboard.board[1][5]).toMatch('a');
    expect(gameboard.board[1][6]).toMatch('a');
});

test('place ship vertically on gameboard at coordinates given', () => {
    const ship = index.shipFactory(2, 'a');
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 5, 'v', ship.id, ship.length);
    expect(gameboard.board[1][5]).toMatch('a');
    expect(gameboard.board[2][5]).toMatch('a');
});

test('a placed ship is added to an array of ships in the gameboard', () => {
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 5, 'v', 'a', 2);
    expect(gameboard.ships[0].length).toBe(2);
});

test('register a hit on a ship on the gameboard, when given coordinates', () => {
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 1, 'h', 'a', 2);
    gameboard.receiveAttack(1,1);
    expect(gameboard.ships[0].hits).toBe(1);
});

test('register a miss on a ship on the gameboard, when given coordinates', () => {
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 1, 'h', 'a', 2);
    gameboard.receiveAttack(3,4);
    expect(gameboard.ships[0].hits).toBe(0);
    expect(gameboard.missedAttack[0]).toEqual(expect.objectContaining([3, 4]));
});

test('return true to allShipsSunk function if all ships have been sunk', () => {
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 1, 'h', 'a', 1);
    gameboard.receiveAttack(1,1);
    expect(gameboard.allShipsSunk()).toBeTruthy();
});

test('return false to allShipsSunk function if not all ships have been sunk', () => {
    const gameboard = index.gameboardFactory();
    gameboard.placeShip(1, 1, 'h', 'a', 1);
    gameboard.receiveAttack(3,4);
    expect(gameboard.allShipsSunk()).toBeFalsy();
});