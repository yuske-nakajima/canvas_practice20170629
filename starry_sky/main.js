var n = 1500;
var kn = 100;
var g = [];
for (var i = 0; i < n/3; i++) {
    var s = new Shape.Circle({
        center: rP(),
        radius: rR(3),
        fillColor: rRGBA()
    });

    var e = new Shape.Ellipse({
        point: rP(),
        size: rS(3),
        fillColor: rRGBA()
    });

    var rect = new Shape.Rectangle(rP(), rS(3));
    rect.fillColor = rRGBA();
    g.push(s);
    g.push(rect);
    g.push(e);
}

timer();

function timer() {
    for (var i = 0; i < kn; i++) {
        g[rR(n)].fillColor = rRGBA();
    }
    setTimeout(function () {
        timer();
    }, rR(200) / rR(5))
}




// function

function r(max) {
    return Math.floor(Math.random() * (max + 1));
}

function rP() {
    return Point.random() * [window.innerWidth, window.innerHeight];
}

function rS(max) {
    var maxSize = new Size(max, max);
    return Size.random() * maxSize;
}

function rR(max) {
    return Math.floor(Math.random() * max);
}

function rRGB() {
    return 'rgb(' + r(255) + ',' + r(255) + ',' + r(255) + ')';
}

function rRGBA() {
    return 'rgb(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + r(1) + ')';
}