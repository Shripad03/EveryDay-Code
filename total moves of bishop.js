//Count the total number of squares that can be visited by Bishop in one move.

const totalMoves = (row, col) => {

    let topLeft = Math.min(row, col) - 1;

    let topRight = Math.min(row, 9 - col) - 1;

    let bottomRight = 8 - Math.max(row, col);

    let bottomLeft = 8 - Math.min(row, 9 - col);

    return topLeft + topRight + bottomLeft + bottomRight;

}

document.write(totalMoves(3, 4));