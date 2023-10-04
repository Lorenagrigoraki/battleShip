const ship = require('./ship')
class gameBoard {
  constructor() {
    this.cleanBoard = this.makeTheBoard()
    this.ships = []
  }
  makeTheBoard() {
    let b = []
    for (let i = 0; i < 10; i++) {
      let temp = []
      for (let j = 0; j < 10; j++) {
        temp.push(0)
      }
      b.push(temp)
    }
    return b
  }
  shipship(len) {
    let newShip = new ship(len)
    let thisShips = this.ships
    thisShips.push(newShip)
    return newShip
  }
  placeTheShip(yCoordinate, xCoordinate, shipLength, orientation) {
    if (orientation === 'X') {
      let helpCoordinate = (xCoordinate + shipLength >= 9) ? 10 - shipLength : xCoordinate
      let helpIterator = (xCoordinate + shipLength >= 9) ? 10 : xCoordinate + shipLength
      for (let i = helpCoordinate; i < helpIterator; i++) {
        this.cleanBoard[yCoordinate][i] = 'S';
      }
    } else if (orientation === 'Y') {
      let helpCoordinate = (yCoordinate + shipLength >= 9) ? 10 - shipLength : yCoordinate
      let helpIterator = (yCoordinate + shipLength >= 9) ? 10 : yCoordinate + shipLength
      for (let i = helpCoordinate; i < helpIterator; i++) {
        this.cleanBoard[i][xCoordinate] = 'S';
      }
    }
    return this.cleanBoard
  }
}


module.exports = gameBoard
