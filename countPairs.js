//count the number of pairs having same sum as given number.

function countPairs(A, B) {
  var count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] + A[j] === B) {
        count++;
      }
    }
  }
  return count;
}
var count = countPairs([1, 2, 3, 2, 3], 5);
console.log(count);
