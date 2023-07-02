var a = 0;
var b = 0;
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var submit = document.getElementById("submit");
var ana = document.getElementById("ana");
var ioi = document.getElementById("ioi");
var rating = document.getElementById("rating");

button1.addEventListener('click', function () {
    a = 1;
    console.log(a);
})
button2.addEventListener('click', function () {
    a = 2;
    console.log(a);
})
button3.addEventListener('click', function () {
    a = 3;
    console.log(a);
})
button4.addEventListener('click', function () {
    a = 4;
    console.log(a);
})
button5.addEventListener('click', function () {
    a = 5;
    console.log(a);
})

submit.addEventListener('click', function (event) {
    if (a != 0) {
        rating.innerHTML = a;
        a = 6;
        console.log(a);
    }
    if (a == 6) {
        ana.style.display = 'none';
        ioi.style.display = 'block';
    }
})