paper.install(window);
paper.setup(document.getElementById('mycanvas'));

var i = 0;
var timerId;
const n = 200;
const path = new Path();
path.strokeColor = 'rgb(' + r1(255) + ',' + r1(255) + ',' + r1(255) + ')';
path.strokeWidth = 8;
path.strokeCap = 'round';
path.strokeJoin = 'round';

timer();
const text = new PointText({
    point: view.center,
    content: 'Hello world',
    fillColor: 'white',
    fontWeight: 'bold',
    fontSize: window.innerWidth / 6,
    justification: 'center'
});

function r1(x) {
    return Math.floor(Math.random() * x);
}

function r2() {
    return {
        x: r1(window.innerWidth),
        y: r1(window.innerHeight)
    }
}

function timer() {
    path.add(r2());
    i++;
    timerId = setTimeout(function() {
        timer();
        if (i > n) {
            clearTimeout(timerId);
            text.fillColor = 'rgb(' + r1(255) + ',' + r1(255) + ',' + r1(255) + ')';
            text.strokeColor = 'rgb(' + r1(255) + ',' + r1(255) + ',' + r1(255) + ')';
            text.strokeWidth = 5;
            path.strokeCap = 'round';
            path.strokeJoin = 'round';
        }
    }, 15);
}
