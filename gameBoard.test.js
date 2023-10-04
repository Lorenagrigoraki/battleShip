const gameBoard = require('./gameBoard')

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
test('Test if the shipship method is returning a ship', () => {
    const board = new gameBoard()
    expect(board.shipship(3)).toEqual(
        {
            "shipLength": 3,
            "demageHit": 0,
            "sunk": false
        })
})

// test('should place a ship of length 3 horizontally at coordinates (0, 5)', () => {
//     const board = new gameBoard();
//     board.placeTheShip(0, 5, 3, 'X');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 'S', 'S', 'S', 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//         ])
// });

// test('should place a ship of length 3 vertically at coordinates (3,2)', () => {
//     const board = new gameBoard();
//     board.placeTheShip(3, 2, 3, 'Y');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 'S', 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 'S', 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 'S', 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
// });
// test('should place a ship of length 3 horizontally to the end of the row', () => {
//     const board = new gameBoard();
//     board.placeTheShip(1, 9, 3, 'X');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 'S', 'S', 'S'],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
// });
// test('should place a ship of length 2 vertically to the end of the column', () => {
//     const board = new gameBoard();
//     board.placeTheShip(9, 3, 2, 'Y');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 'S', 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 'S', 0, 0, 0, 0, 0, 0]]);
// });
// test('should place 2 different ships', () => {
//     const board = new gameBoard();
//     board.placeTheShip(9, 3, 2, 'Y');
//     board.placeTheShip(2, 3, 4, 'X');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 'S', 'S', 'S', 'S', 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 'S', 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 'S', 0, 0, 0, 0, 0, 0]]);
// });
// test('should place a ship that goes beyond the gameboard X orientation', () => {
//     const board = new gameBoard();
//     board.placeTheShip(2, 7, 4, 'X');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 'S', 'S', 'S', 'S'],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
// });
// test('should place a ship that goes beyond the gameboard Y orientation', () => {
//     const board = new gameBoard();
//     board.placeTheShip(8, 1, 4, 'Y');

//     expect(board.cleanBoard).toEqual(
//         [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0]]);
// });
test('should add a ship to the ships array', () => {
    const board = new gameBoard();
    board.shipship(4);

    expect(board.ships).toEqual([{ shipLength: 4, demageHit: 0, sunk: false }])
})
// test('should place a ship and add a ship to this.ships', () => {
//     const board = new gameBoard();
//     board.placeTheShip(8, 1, 4, 'Y');

//     expect(board).toEqual({

//         'cleanBoard': [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 'S', 0, 0, 0, 0, 0, 0, 0, 0]],
//         ships: [{ shipLength: 4, demageHit: 0, sunk: false }]
//     });
// });
test('should place a ship object to the board and add a ship to this.ships', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y');

    expect(board).toEqual({
        cleanBoard: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, { shipLength: 4, demageHit: 0, sunk: false }, 0, 0, 0, 0, 0, 0, 0, 0]],
        ships: [{ shipLength: 4, demageHit: 0, sunk: false }]
    });
});
// test('should determines if this ship is hit', () => {
//     const board = new gameBoard();
//     board.placeTheShip(8, 1, 4, 'Y')
//     expect(board.receiveAttack(8,1)).toEqual('The ship is hit!');
// });
test('should determines if this ship is hit', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y')
    expect(board.receiveAttack(8,1)).toEqual({ shipLength: 4, demageHit: 0, sunk: false });
});
test('should determines if it is a missed shot', () => {
    const board = new gameBoard();
    board.placeTheShip(8, 1, 4, 'Y')
    expect(board.receiveAttack(8,2)).toEqual('You mised your shot!');
});