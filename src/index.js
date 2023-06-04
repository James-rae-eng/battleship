// import './style.css';

function shipFactory(length, id) {
  const ship = {
    length,
    hits: 0,
    sunk: false,
    id,
    hit() {
      this.hits += 1;
    },
    isSunk() {
      if (this.hits === length) {
        this.sunk = true;
      }
      return this.sunk;
    },
  };
  return ship;
}

function gameboardFactory() {
  const gameboard = {
    board: [...Array(10)].map(() => Array(10).fill('-')),
    ships: [],
    missedAttack: [],
    // Place ship at specific coordinates on board
    placeShip(row, column, orientation, shipId, shipLength) {
      // create copy of board to allow for loop to access & change this
      const newBoard = this.board;
      if (orientation === 'h') { // If horizontal ship
        for (let i = column; i <= (column + shipLength); i += 1) {
          newBoard[row][i] = shipId;
        }
      } else { // vertical ship
        for (let i = row; i <= (row + shipLength); i += 1) {
          newBoard[i][column] = shipId;
        }
      }
      // replace board with the modified new-board with the added ship
      this.board.splice(0, this.board.length, ...newBoard);
      // Add ship object to ships array
      this.ships.push(shipFactory(shipLength, shipId));
    },
    receiveAttack(row, column) {
      if (this.board[row][column] !== '-') {
        const ship = this.ships.find((obj) => obj.id === this.board[row][column]);
        ship.hit();
        ship.isSunk();
      } else {
        this.missedAttack.push([row, column]);
      }
    },
    allShipsSunk() {
      let allSunk = false;
      if (this.ships.every((ship) => ship.sunk === true)) {
        allSunk = true;
      }
      return allSunk;
    },
  };
  return gameboard;
}

module.exports = { shipFactory, gameboardFactory };
