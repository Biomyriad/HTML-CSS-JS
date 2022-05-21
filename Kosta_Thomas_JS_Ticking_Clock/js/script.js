
function getSecondsSinceStartOfDay() {
    var snapshotTime = new Date();
    var localTimeSec = (snapshotTime.getTime() - snapshotTime.getTime().StartOfDayMilliseconds()) / 1000 - (snapshotTime.getTimezoneOffset() * 60);
    return localTimeSec;
}

function getSecDegrees(t) {
    return (t % 60) * 6 + 180;
}

function getMinDegrees(t) {
    return (t % 3600) / 60 * 6 + 180;
}

function getHourDegrees(t) {
    return ((t / 3600) * 30 ) + 180;
}

var secHand = document.getElementById("seconds");
var minHand = document.getElementById("minutes");
var hourHand = document.getElementById("hour");

setInterval(function () {
    var time = getSecondsSinceStartOfDay();

    secHand.style.transform = "rotate(" + getSecDegrees(time) + "deg)";
    minHand.style.transform = "rotate(" + getMinDegrees(time) + "deg)";
    hourHand.style.transform = "rotate(" + getHourDegrees(time) + "deg)";
},1);

function testBtn() {

    document.getElementById("txt").innerHTML = 2 % 5;
}

Number.prototype.StartOfDayMilliseconds = function(){
    return this - (this % (86400 * 1000));
}