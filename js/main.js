var clock = "";

for (var i = 0; i < 360; i++) {
    clock += "<span class='dials'><div class='cutline'></div></span>";
}
clock += "<div class='dot'></div>";
clock += "<div class='mline'></div>";
clock += "<div class='hline'></div>";
clock += "<div class='tringleM'><div class='tringle'></div><div class='shadow'></div></div>";

document.querySelector('.container').innerHTML = clock;

for (var i = 1; i <= 360; i++) {
    document.querySelector('.dials:nth-child(' + i + ')').style.transform = "rotate(" + (i - 1) + "deg)";
}

/* Real Time Clock */
var hour, min, lol, lol1, lol2, second;

second = moment().second() * 6;

setInterval(function () {
    hour = moment().hours();
    min = moment().minutes() * 6;
    hour = moment().hours() % 12 / 12 * 360 + (min / 12);
    lol = document.querySelector('.mline').style.transform = "rotate(" + (180 + min) + "deg)";
    lol1 = document.querySelector('.hline').style.transform = "rotate(" + (180 + hour) + "deg)";
}, 1000);

setInterval(function () {
    second++;
    lol2 = document.querySelector('.tringleM').style.transform = "rotate(" + (180 + second) + "deg)";
    document.querySelector('.container span:nth-of-type(' + ((second - 4) % 360 + 1) + ') .cutline').classList.add('one');
    document.querySelector('.container span:nth-of-type(' + ((second - 30 + 360) % 360 + 1) + ') .cutline').classList.remove('one');
}, (60 / 360) * 1000);
