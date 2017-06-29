paper.install(window);
paper.setup(document.getElementById('mycanvas'));

const tool = new Tool();

const c = Shape.Circle({
    center: view.center,
    radius: 30,
    fillColor: 'black'
});

const text = new PointText({
    point: view.center,
    content: 'PLEASE CLICK',
    fillColor: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    justification: 'center'
});

const r = function (x) {
    return Math.floor(Math.random() * x);
};

const rw = function () {
    return Math.floor(Math.random() * window.innerWidth);
};

const rh = function () {
    return Math.floor(Math.random() * window.innerHeight);
};

tool.onMouseMove = function (event) {
    c.position = event.point;
};

tool.onMouseDown = function(event) {
    c.fillColor = 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')';
};

tool.onMouseUp = function(event) {
    c.fillColor = 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')';
    textup();
};

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