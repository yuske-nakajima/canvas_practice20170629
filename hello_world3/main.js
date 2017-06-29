paper.install(window);
paper.setup(document.getElementById('mycanvas'));

const tool = new Tool();

const r = function (x) {
    return Math.floor(Math.random() * x);
};

const rw = function () {
    return Math.floor(Math.random() * window.innerWidth);
};

const rh = function () {
    return Math.floor(Math.random() * window.innerHeight);
};

timer();

function textup() {
    const p = [rw(), rh()];
    const text = new PointText({
        point: p,
        content: 'Hello world',
        fillColor: 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')',
        fontSize: Math.floor(Math.random() * 50),
        justification: 'center'
    });
};

function timer() {
    textup();
    setTimeout(function () {
        timer();
    }, Math.floor(Math.random() * 100))
}
