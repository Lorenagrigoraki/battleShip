const gameBoard = require('./gameBoard')
class Player{
    constructor(name){
        this.name = name
        this.board = new gameBoard()
        this.turn = false
        this.enemysBoard = null
    }
    getEnemysBoard(enemy){
        if(enemy){
            let board = new gameBoard()
            this.enemysBoard = board.cleanBoard
    
            return this.enemysBoard
        }else{
            return 'You do not have an enemy!'
        }       
    }
    placeMyShips(yCoordinate, xCoordinate, shipLength, orientation){
        this.board.placeTheShip(yCoordinate, xCoordinate, shipLength, orientation)
        return this.board
    }
    hitEnemysShip(enemy, yCoordinate, xCoordinate){
        if(enemy && this.enemysBoard !== null){
            let enemysB = enemy.board
            let thisEnemysBoard =  this.enemysBoard
            enemysB.receiveAttack(yCoordinate, xCoordinate)
            thisEnemysBoard[yCoordinate][xCoordinate] = 'ship'
            enemy.turn = true
        }else if(this.enemysBoard === null){
            this.getEnemysBoard(enemy)
            this.hitEnemysShip(enemy, yCoordinate,xCoordinate)
        }else{
            return 'You do not have an enemy!'
        }
        return this.enemysBoard
    }
}
module.exports = Player