// function ticTacToe(input) {
//     let output = [[false, false, false], [false, false, false], [false, false, false]];
//     let playerOneIsWinner = false;
//     let playerTwoIsWinner = false;
//     let firstPlayer = true;
//     let secondPlayer = false;
//     let y = 1;
//     while (checkingTrue(output)) {
//         let [x, y] = input.shift().split(' ').map(Number);
//         let areCorrectCoordinates = true;
//         if (output[x][y] === false) {
//             if (firstPlayer) {
//                 output[x][y] = 'X';
//                 firstPlayer = false;
//                 secondPlayer = true;
//             } else if (secondPlayer) {
//                 output[x][y] = 'O';
//                 firstPlayer = true;
//                 secondPlayer = false;
//             }
//         } else {
//             console.log('This place is already taken. Please choose another!');
//             areCorrectCoordinates = false;
//         }
//         if (areCorrectCoordinates) {
//             if ((output[0][0] === 'X' && output[0][1] === 'X' && output[0][2] === 'X') ||
//                 (output[1][0] === 'X' && output[1][1] === 'X' && output[1][2] === 'X') ||
//                 (output[2][0] === 'X' && output[2][1] === 'X' && output[2][2] === 'X') ||
//                 (output[0][0] === 'X' && output[1][1] === 'X' && output[2][2] === 'X') ||
//                 (output[0][0] === 'X' && output[1][0] === 'X' && output[2][0] === 'X') ||
//                 (output[0][1] === 'X' && output[1][1] === 'X' && output[2][1] === 'X') ||
//                 (output[0][2] === 'X' && output[1][2] === 'X' && output[2][2] === 'X') ||
//                 (output[0][2] === 'X' && output[1][1] === 'X' && output[2][0] === 'X')) {
//                 playerOneIsWinner = true;
//                 console.log('Player X wins!');
//                 break;
//             }
//             if ((output[0][0] === 'O' && output[0][1] === 'O' && output[0][2] === 'O') ||
//                 (output[1][0] === 'O' && output[1][1] === 'O' && output[1][2] === 'O') ||
//                 (output[2][0] === 'O' && output[2][1] === 'O' && output[2][2] === 'O') ||
//                 (output[0][0] === 'O' && output[1][1] === 'O' && output[2][2] === 'O') ||
//                 (output[0][0] === 'O' && output[1][0] === 'O' && output[2][0] === 'O') ||
//                 (output[0][1] === 'O' && output[1][1] === 'O' && output[2][1] === 'O') ||
//                 (output[0][2] === 'O' && output[1][2] === 'O' && output[2][2] === 'O') ||
//                 (output[0][2] === 'O' && output[1][1] === 'O' && output[2][0] === 'O')) {
//                 playerTwoIsWinner = true;
//                 console.log('Player O wins!');
//                 break;
//             }
//         }
//     }
//     if (!playerOneIsWinner && !playerTwoIsWinner) {
//         console.log('The game ended! Nobody wins :(');
//     }
//     output.forEach(row => {
//         console.log(row.join('\t'));
//     });

//     function checkingTrue(arr) {
//         let result = false;
//         for (let row of arr) {
//             if (row.includes(false)) {
//                 result = true;
//                 break;
//             }
//         };
//         return result
//     }
// }

function ticTacToe(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    const game = {
        firstPlayer: true,
        secondPlayer: false,
        thereIsWinner: false,
        gameEnded: true,
        checkIsPlaceFree: function (x, y, dashboard) {
            if (dashboard[x][y] !== false) {
                console.log('This place is already taken. Please choose another!')
                return 'place is taken'
            }
        },
        checkIsWinner: function (dashboard, pl) {
            if ((dashboard[0][0] === pl && dashboard[0][1] === pl && dashboard[0][2] === pl) ||
                (dashboard[1][0] === pl && dashboard[1][1] === pl && dashboard[1][2] === pl) ||
                (dashboard[2][0] === pl && dashboard[2][1] === pl && dashboard[2][2] === pl) ||
                (dashboard[0][0] === pl && dashboard[1][1] === pl && dashboard[2][2] === pl) ||
                (dashboard[0][0] === pl && dashboard[1][0] === pl && dashboard[2][0] === pl) ||
                (dashboard[0][1] === pl && dashboard[1][1] === pl && dashboard[2][1] === pl) ||
                (dashboard[0][2] === pl && dashboard[1][2] === pl && dashboard[2][2] === pl) ||
                (dashboard[0][2] === pl && dashboard[1][1] === pl && dashboard[2][0] === pl)) {
                this.thereIsWinner = true;
                console.log(`Player ${pl} wins!`);
                return true;
            }
        }
    }

    for (let indexes of input) {
        const [x, y] = indexes.split(' ').map(Number);

        if (game.firstPlayer) {
            if (game.checkIsPlaceFree(x, y, dashboard) === 'place is taken') {
                continue
            };
            dashboard[x][y] = 'X';
            game.firstPlayer = false;
            game.secondPlayer = true;
        } else if (game.secondPlayer) {
            if (game.checkIsPlaceFree(x, y, dashboard) === 'place is taken') {
                continue
            };
            dashboard[x][y] = 'O';
            game.firstPlayer = true;
            game.secondPlayer = false;
        }
        if (!dashboard.flat().includes(false)) {
            console.log('The game ended! Nobody wins :(');
            game.gameEnded = true;
            break;
        }
        if (game.checkIsWinner(dashboard, 'X') || game.checkIsWinner(dashboard, 'O')) {
            break;
        }
    }
    if (game.thereIsWinner || game.gameEnded) {
        return dashboard.map(el => el.join('\t')).join('\n');
    }
}
console.log(ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]));
console.log(ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]));
console.log(ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]));