var slidetShow = 1;
showDivs(slidetShow);

function plusDivs(n) {
    showDivs(slidetShow += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    x[0].style.display = "block";
    if (n > x.length) { slidetShow = 1 }
    if (n < 1) { slidetShow = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slidetShow - 1].style.display = "block";
}
