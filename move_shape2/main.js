for (var i = 0; i < 500; i++) {
    var shape = rShape();
    shape.onFrame = function (e) {
        this.rotate(rPM(r(10)));
    };
    shape.onMouseMove = function(event) {
        this.position += event.delta;
        this.size = new Size(r(200), r(200));
    };
    shape.onMouseDown = function(event) {
        this.remove();
    };
    shape.onClick = function(event) {
        this.remove();
    }
}

// function
function rShape() {
    var i = r(10);
    if (i === 0) {
        var shape = new Shape.Rectangle({
            center: rP(),
            size: rS(100),
            fillColor: 'white',
            strokeColor: rRGBA()
        });
        return shape;
    } else if(i === 1 || i === 2) {
        var shape = new Shape.Rectangle({
            center: rP(),
            size: rS(100),
            fillColor: rRGBA()
        });
        return shape;
    } else {
        var shape = new Shape.Rectangle({
            center: rP(),
            size: rS(100),
            fillColor: rRGBA(),
            strokeColor: rRGBA()
        });
        return shape;
    }
}

function rPM(n) {
    var i = r(1);
    if (i === 0) {
        return n;
    } else {
        return -n;
    }
}

function r(max) {
    return Math.floor(Math.random() * (max + 1));
}

function rP() {
    return Point.random() * [window.innerWidth, window.innerHeight];
}

function rS(max) {
    var maxSize = new Size(max, max);
    return Point.random() * maxSize;
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

function rRGBA2() {
    return 'rgb(255,255,255,' + r(1) + ')';
}