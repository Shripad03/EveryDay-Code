// Index Of an Extra Element.
// Given two sorted arrays of distinct elements. There is only 1 difference between the arrays.
// First array has one element extra added in between. Find the index of the extra element.

const indexOfExtra = (a, b, n) => {

    for (let i = 0; i < n; i++) {
        if (a[i] != b[i]) {
            return i;
        }
    }
}

console.log(indexOfExtra([3,5,7,9,11,13], [3,5,7,11,13], 6));