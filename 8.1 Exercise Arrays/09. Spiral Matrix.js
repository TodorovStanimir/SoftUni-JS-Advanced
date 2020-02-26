function spiralMatrix(rows, columns) {
    let result = []
    let num = rows * columns;
    for (let row = 0; row < rows; row++) {
        let row = [];
        for (let column = 0; column < columns; column++) {
            row.push(0)
        }
        result.push(row);
    }
    let y = 0;
    let x = 0;
    let step = 0;
    for (let i = 0; i < num;) {
        while (y + step < rows) {
            i++;
            result[x][y] = i;
            y++;
        }
        y--;
        x++;
        while (x + step < columns) {
            i++;
            result[x][y] = i;
            x++;
        }
        x--;
        y--;
        while (y >= step) {
            i++;
            result[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;
        while (x >= step) {
            i++;
            result[x][y] = i;
            x--;
        }
        x++;
        y++;
    }
    for (let i = 0; i < columns; i++) {
        console.log(result[i].join(' '));
    }
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);