//Stickler Thief

const sticklerThief = (houses, n) => {
    if (n == 0) {
        return 0;
    }

    let value1 = houses[0];
    if (n == 1) {
        return value1;
    }

    let value2 = Math.max(houses[0], houses[1]);
    if (n == 2) {
        return value2;
    }

    let max_val = 0;

    for (let i = 2; i < n; i++) {
        max_val = Math.max(houses[i] + value1, value2);

        value1 = value2;
        value2 = max_val;
    }
    return max_val;
}

let houses = [6, 7, 1, 3, 8, 2, 4];
let n = houses.length;
document.write("Maximum loot value : " + sticklerThief(houses, n));