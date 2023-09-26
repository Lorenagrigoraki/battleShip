const ship = require('./ship')

test('Testing if the ship is returning an object', ()=>{
    const myShip = new ship(5)
    expect(myShip).toEqual({shipLength: 5, demageHit: 0, sunk: false})
})

test('Testing if the ship hit() method is working', ()=>{
    const myShip = new ship(7)
    myShip.hit()
    expect(myShip.demageHit).toEqual(1)
})
test('Testing if the ship isSunk() method is working', ()=>{
    const myShip = new ship(7)
    const myShipLen = myShip.shipLength
    for(let i = 0; i< myShipLen; i++){
        myShip.hit()
    } 
    expect(myShip.isSunk()).toEqual(true)
})

