
function randomiseCharts(){
    var x, i;
    x = document.querySelectorAll(".chart");
    console.log(x)
    for (i = 0; i < x.length; i++) {
        x[i].style.height = String(Math.random() * 90 + 20) + "px";
    }
}

window.addEventListener('load', function() {
    randomiseCharts()
})
