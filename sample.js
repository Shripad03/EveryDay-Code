//Three way partitioning
// Given an array of size n and a range[a, b].The task is 
// to partition the array around the range such that array is divided into three parts.
// 1) All elements smaller than a come first.
// 2) All elements in range a to b come next.
// 3) All elements greater than b appear in the end.

const threeWayPartition = (arr, n, a, b) => {

    var arr1 = [];
    var arr2 = [];
    var arr3 = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] < a) {
            arr1.push(arr[i]);
        }
        else
            if (arr[i] > b) {
                arr3.push(arr[i]);
            }
            else {
                arr2.push(arr[i]);
            }
    }
    console.log(arr1, arr2, arr3);
}
// Driver Code
let arr = new Array(1, 9, 2, 10, 4, 3, 5, 6, 7, 8);
let n = arr.length;
let arr1 = threeWayPartition(arr, n, 3, 6);
