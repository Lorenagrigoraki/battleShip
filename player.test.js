const Player = require('./player')

test('Test if the palyer class is returning an object', ()=>{
    let firstPlayer = new Player('Lorena')
    expect(firstPlayer).toEqual({
        name: 'Lorena',
        board: {
        cleanBoard: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        ships: []
    },
        turn: false,
        enemysBoard: null        
    })
})
test('Test if getEnemysBoard is returning enemys board', ()=>{
    let firstPlayer = new Player('Lorena')
    let secondPlayer = new Player('LL')
    expect(firstPlayer.getEnemysBoard(secondPlayer)).toEqual(
                    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    )
})
test('Test if getEnemysBoard is returning enemys board', ()=>{
let firstPlayer = new Player('Lorena')
expect(firstPlayer.getEnemysBoard()).toEqual('You do not have an enemy!')
})
test('Test if placeMyShips is placing a ship', ()=>{
let firstPlayer = new Player('Lorena')
firstPlayer.placeMyShips(3, 2, 2, 'X')
firstPlayer.placeMyShips(8, 1, 4, 'Y');
expect(firstPlayer.board).toEqual({
    cleanBoard: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, { shipLength: 2, id: 0, demageHit: 0, sunk: false }, { shipLength: 2, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0]],
    ships: [{ shipLength: 2, id: 0, demageHit: 0, sunk: false },
            { shipLength: 4, id: 1, demageHit: 0, sunk: false }]
})
})
test('Test if hitEnemysShip is hitting a ship', ()=>{
    let firstPlayer = new Player('Lorena')
    let secondPlayer = new Player('Lora')
    firstPlayer.placeMyShips(3, 2, 2, 'X')
    secondPlayer.placeMyShips(8, 1, 4, 'Y');
    expect(firstPlayer.hitEnemysShip(secondPlayer,8,1)).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 'ship', 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
    })
    test('Test if hitEnemysShip is hitting a ship', ()=>{
        let firstPlayer = new Player('Lorena')
        let secondPlayer = new Player('Lora')
        firstPlayer.placeMyShips(3, 2, 2, 'X')
        secondPlayer.placeMyShips(8, 1, 4, 'Y');
        firstPlayer.hitEnemysShip(secondPlayer,8,1)
        expect(secondPlayer.turn).toEqual(true)
        })