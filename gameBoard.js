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
    let thisShips = this.ships
    let newIdForNewShip = thisShips.length 
    let newShip = new ship(len, newIdForNewShip)
    thisShips.push(newShip)
    return newShip
  }
  placeTheShip(yCoordinate, xCoordinate, shipLength, orientation) {
    let thisNewShip = this.shipship(shipLength)
    if (orientation === 'X') {
      let helpCoordinate = (xCoordinate + shipLength >= 9) ? 10 - shipLength : xCoordinate
      let helpIterator = (xCoordinate + shipLength >= 9) ? 10 : xCoordinate + shipLength
      let subArray = this.cleanBoard[yCoordinate].splice(helpCoordinate, helpIterator - helpCoordinate)
      for (let i = helpCoordinate; i < helpIterator; i++) {
        this.cleanBoard[yCoordinate][i] = thisNewShip;
      }
    } else if (orientation === 'Y') {
      let helpCoordinate = (yCoordinate + shipLength >= 9) ? 10 - shipLength : yCoordinate
      let helpIterator = (yCoordinate + shipLength >= 9) ? 10 : yCoordinate + shipLength
      for (let i = helpCoordinate; i < helpIterator; i++) {
        this.cleanBoard[i][xCoordinate] = thisNewShip;
      }
    }
    // return this.cleanBoard
    return subArray
  }
  receiveAttack(yCoordinate, xCoordinate){
    let board = this.cleanBoard
    if(board[yCoordinate][xCoordinate] !== 0){
      const idOfShip = board[yCoordinate][xCoordinate].id
      const hitShip = this.ships[idOfShip]
      hitShip.hit()
      return board
    }else{
      return 'You miss a shot!'
    }
  }
}

let b = new gameBoard()
b.placeTheShip(8, 1, 4, 'Y');
b.placeTheShip(3, 2, 2, 'X');
console.log(b.cleanBoard[3][2])

module.exports = gameBoard
