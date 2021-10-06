var index = 0;
var start;
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'assets/images/badging4.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'assets/images/scale6.jpg';
imgArray[2] = new Image();
imgArray[2].src = 'assets/images/badging5.jpg';
imgArray[3] = new Image();
imgArray[3].src = 'assets/images/scale16.jpg';

function section() {
    document.getElementById('login-page').style.display = "flex";
    document.getElementById('homepage').style.display = "none";
}


function show(n) {
    clearTimeout(start);
    index = n;
    document.getElementById("current").src = imgArray[n].src;
    if (n == 0) {
        document.getElementById("before").src = imgArray[imgArray.length - 1].src;
    }
    else {
        document.getElementById("before").src = imgArray[n - 1].src;
    }
    if (n == (imgArray.length - 1)) {
        document.getElementById("after").src = imgArray[0].src;
    }
    else {
        document.getElementById("after").src = imgArray[n + 1].src;
    }
    var dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.add("md-inactive");
    }
    dots[n].classList.remove("md-inactive");
    start = setTimeout(increment, 2000);
    
}
function increment() {
    if (index==imgArray.length-1){
        index=0;
    } else {
        index++;
    }
    show(index);
}