//Last digit K count

//Find the number of integers in range [A, B] with last digit C.

const lastDigitCount = (A, B, C) => {
    var count = 0;

    for (let i = A; i < B; i++) {
        if (i % C == 0) {
            count++;
        }
    }
    document.write(count);
}

lastDigitCount(535238952, 803473116, 3);