paper.install(window);
paper.setup(document.getElementById('mycanvas'));

const path = new Path();
path.strokeColor = 'rgb(' + r1(255) + ',' + r1(255) + ',' + r1(255) + ')';
path.strokeWidth = 10;
path.strokeCap = 'round';
path.strokeJoin = 'round';

timer();

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

    const text2 = new PointText({
        point: view.center,
        content: 'Hello world',
        fillColor: 'white',
        fontWeight: 'bold',
        fontSize: window.innerWidth / 6,
        justification: 'center'
    });

    setTimeout(function() {
        timer();
    }, 0.1);
}