const ship = require('./ship')
class gameBoard{
    constructor(){
       this.cleanBoard = this.makeTheBoard()
    }
    makeTheBoard(){
        let b = []
        // let cleanRows = new Array(10)
        for(let i = 0; i<10;i++){
            let temp = []
            for(let j = 0; j < 10; j++){
                temp.push(0)
            }
            b.push(temp)    
        }
        return b
    }
    shipship(len){
        return new ship(len)
    }
    placeTheShip(yCoordinate, xCoordinate, shipLength, orientation) {
       
        if (orientation === 'X') {
            let helpCoordinate = (xCoordinate === 9) ? xCoordinate - shipLength + 1 : xCoordinate
            let helpIterator =(xCoordinate === 9) ? xCoordinate + 1 : xCoordinate + shipLength
            for (let i = helpCoordinate; i < helpIterator; i++) {
              this.cleanBoard[yCoordinate][i] = 'S';
            }
          } else if (orientation === 'Y') {
            for (let i = yCoordinate; i < yCoordinate + shipLength; i++) {
              this.cleanBoard[i][xCoordinate] = 'S';
            }
          }
          return this.cleanBoard
        }
}


module.exports = gameBoard
