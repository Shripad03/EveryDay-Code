//Function with its lexical scope is Closure. This function no matter from where you 
//call will retain it's variable and value within their scope.

function numGenerator(b) {
    let a = 4;

    function checkNumber() {
        console.log(a * b);
    }
    checkNumber();
}

var byFour = numGenerator(4);
byFour;

var bytwo = numGenerator(2);
bytwo;

var bySix = numGenerator(6);
bySix;