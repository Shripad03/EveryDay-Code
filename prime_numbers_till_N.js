
const primeNumber = (n) => {
    var counter;

    for (let i = 2; i <= n; i++) {
        counter = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                counter++;
            }
        }
        if (counter == 2) {
            console.log(i);
        }
    }
}

primeNumber(15);