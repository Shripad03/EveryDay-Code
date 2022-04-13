


//Given an array nums[] of size n, construct a Product Array P 
//(of same size n) such that P[i] is equal to the product of all the
// elements of nums except nums[i].


const productArray = (nums) => {
    var productArr = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j != i) {
                product *= nums[j];
            }
        }
        productArr.push(product);
    }
    console.log(productArr);
}

productArray([10, 3, 5, 6, 2]);