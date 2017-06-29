paper.install(window);
paper.setup(document.getElementById('mycanvas'));

const tool = new Tool();

const text = new PointText({
    point: view.center,
    justification: 'center',
    fontSize: 30,
    fillColor: 'black',
    content: 'Hello world'
});

const r = function (x) {
    return Math.floor(Math.random() * x);
};

timer();


function onFrame(event) {
    text.point = {x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight)};
};

function timer() {
    text.point = {x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight)};
    text.fillColor = 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')';
    text.fontSize = Math.random() * 100,
    setTimeout(function() {
        timer();
    }, 200);
}
