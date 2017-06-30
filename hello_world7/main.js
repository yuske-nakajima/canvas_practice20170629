var start = r1();
var end = r1();
var i = 0;
var timer;

startTimer();

var text = new PointText({
    point: view.center,
    content: 'Hello world',
    fillColor: '#eeeeee',
    fontWeight: 'bold',
    fontSize: window.innerWidth / 6,
    justification: 'center'
});

function startTimer() {
    timer = setInterval(function () {
        end = r1();

        var s1 = new Segment({
            point: start,
            handleOut: r2()
        });

        var s2 = new Segment({
            point: end,
            handleOut: r2()
        });

        var p = new Path({
            segments: [s1, s2],
            strokeColor: rgb(),
            strokeWidth: r(10),
            strokeCap: 'round',
            strokeJoin: 'round'
        });

        start = end;

        i++;
        if (i === 150) {
            clearInterval(timer);
            var text = new PointText({
                point: view.center,
                content: 'Hello world',
                fillColor: rgb(),
                strokeColor: rgb(),
                strokeWidth: window.innerWidth / 400,
                fontWeight: 'bold',
                fontSize: window.innerWidth / 6,
                justification: 'center'
            });
        }
    }, 0.001);
}

function r(max) {
    return Math.floor(Math.random() * max + 1);
}

function r1() {
    return Point.random() * [window.innerWidth, window.innerHeight];
}

function r2() {
    var rand = r(4);
    var p = Point.random() * [window.innerWidth, window.innerHeight];
    if (rand === 0) {
        return p;
    } else if (rand === 1) {
        p.x = -(p.x);
        p.y = -(p.y);
        return p;
    } else if (rand === 2) {
        p.y = -(p.y);
        return p;
    } else if (rand === 3) {
        p.x = -(p.x);
        p.y = -(p.y);
        return p;
    }
}

function rgb() {
    return 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() +')';
}