var x = 1;

a();
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var a = 100;
    console.log(a);
}