const gameBoard = require('./gameBoard')
const ship = require('./ship')

test('Test if the gameboard class is returning the board', () => {
    const board = new gameBoard()
    expect(board.cleanBoard).toEqual(
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
//Rabotaet!
test('should place a ship object to the board and add a ship to this.ships', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y');
    board.placeTheShip(3, 2, 2, 'X');


    expect(board).toEqual({
        cleanBoard: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, { shipLength: 2, id: 1, demageHit: 0, sunk: false }, { shipLength: 2, id: 1, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0]],
        ships: [{ shipLength: 4, id: 0, demageHit: 0, sunk: false },
                { shipLength: 2, id: 1, demageHit: 0, sunk: false }]
    });
});
test('should return a new ship with an ID key', () => {
    const board = new gameBoard();    
    expect(board.shipship(4)).toEqual({ shipLength: 4, id: 0, demageHit: 0, sunk: false });
});

test('should determines if this ship is hit', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y')
    board.placeTheShip(3, 2, 2, 'X')
    board.receiveAttack(3,3)
    expect(board.receiveAttack(3,2)).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, { shipLength: 2, id: 1, demageHit: 2, sunk: true }, { shipLength: 2, id: 1, demageHit: 2, sunk: true }, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0]]);
});
test('should determines if this ship is hit', () => {
    const board = new gameBoard();
    board.placeTheShip(3, 2, 4, 'X')

    expect(board.placeTheShip(4, 3, 4, 'X')).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, { shipLength: 4, id: 0, demageHit: 0, sunk: false }, 0, 0, 0, 0],
        [0, 0, 0, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, { shipLength: 4, id: 1, demageHit: 0, sunk: false }, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});
test('should checks if its possible to place the ship in Y direction', () => {
    const board = new gameBoard();
    board.placeTheShip(1, 3, 3, 'X')

    expect(board.placeTheShip(1, 5, 3, 'Y')).toEqual('You can not place the ship here!');
});
test('should determines if this ship is hit', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y')
    board.placeTheShip(3, 2, 2, 'X')
    board.placeTheShip(4, 0, 3, 'X')

    board.receiveAttack(3,3)
    board.receiveAttack(3,2)
    board.receiveAttack(6,1)
    board.receiveAttack(7,1)
    board.receiveAttack(8,1)

    expect(board.receiveAttack(9,1)).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, { shipLength: 2, id: 1, demageHit: 2, sunk: true }, { shipLength: 2, id: 1, demageHit: 2, sunk: true }, 0, 0, 0, 0, 0, 0],
        [{ shipLength: 3, id: 2, demageHit: 0, sunk: false }, { shipLength: 3, id: 2, demageHit: 0, sunk: false }, { shipLength: 3, id: 2, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 4, sunk: true }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 4, sunk: true }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 4, sunk: true }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, id: 0, demageHit: 4, sunk: true }, 0, 0, 0, 0, 0, 0, 0, 0]]);
})
test('should determines if you missed a shot', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y')
    board.placeTheShip(3, 2, 2, 'X')
    board.placeTheShip(4, 0, 3, 'X')

    board.receiveAttack(3,3)
    board.receiveAttack(3,2)
    board.receiveAttack(6,1)
    board.receiveAttack(7,1)
    board.receiveAttack(8,1)

    expect(board.receiveAttack(0,0)).toEqual('You miss a shot!');
})
