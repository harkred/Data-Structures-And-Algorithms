const boardGenerator = (board, n) => {
    for (let i = 0; i < n; i++) {
        const row = [];

        for (let j = 0; j < n; j++) {
            row.push('.');
        }

        board.push(row);
    }
}

const validBoard = (board) => {
    for (let i = 0; i < n; i++) {
        if (!board[i].some((ele) => ele == 'Q')) {
            return false
        }
    }
    return true;
}

const copyBoard = (res, board) => {
    const copy = [];

    for (let i = 0; i < n; i++) {
        const row = [];

        for (let j = 0; j < n; j++) {
            row.push(board[i][j]);
        }

        copy.push(row);
    }

    res.push(copy);
}

const validState = (row, col) => {
    if ([...cols].some((ele) => ele == col)) {
        return false;
    }
    if ([...posDiags].some((ele) => ele == row + col)) {
        return false;
    }
    if ([...negDiags].some((ele) => ele == row - col)) {
        return false;
    }
    return true;
} 

const queenPlacer = (row) => {
    if (row == n) {
        if(validBoard(board)) {
            copyBoard(res, board);
        }       
        return;
    }

    for (let col = 0; col < n; col++) {
        if (validState(row, col)) {
            board[row][col] = 'Q';

            cols.add(col);
            posDiags.add(row + col);
            negDiags.add(row - col);

            queenPlacer(row + 1);

            cols.delete(col);
            posDiags.delete(row + col);
            negDiags.delete(row - col);
            board[row][col] = '.';
        }
    }
}

const n = 4;

if (n < 4) {
    return [];
}

const res = [];

const cols = new Set([]);
const posDiags = new Set([]);
const negDiags = new Set([]);

const board = [];

boardGenerator(board, n);
queenPlacer(0);

console.log(res);