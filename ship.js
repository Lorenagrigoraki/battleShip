class ship{
    constructor(shipLength,id, demageHit, sunk){
        this.shipLength = shipLength
        this.id = id
        this.demageHit = 0
        this.sunk = false
    }
    hit(){
        this.demageHit +=1
    }
    isSunk(){
        if(this.demageHit === this.shipLength){
            this.sunk = true
            return this.sunk
        }
    }
}

module.exports = ship

