// First Repeating Element 
// Given an array arr[] of size n, find the first repeating element.The element should occurs 
// more than once and the index of its first occurrence should be the smallest.

const repeating_element = (arr) => {

    document.write("Original Array,........", arr, "<br></br>");

    var n = arr.length;
    var elements = [];
    var count;
    var index = [];

    for (let i = 0; i < n; i++) {
        count = 0;
        for (let j = i + 1; j <= n; j++) {
            if (arr[i] == arr[j]) {
                elements.push(arr[i]);
                index.push(i);
                count++;
            }
        }
    }
    document.write('elements ', elements, "<br></br><br></br>");
    document.write('index ', index, "<br></br><br></br>");
    document.write('count ', count);

    if (elements === null) {
        return -1;
    }
    else {
        return (index[0] + 1);
    }

}

console.log(repeating_element([5, 8, 6]));