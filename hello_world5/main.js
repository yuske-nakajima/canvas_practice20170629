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

// const text = new PointText({
//     point: view.center,
//     justification: 'center',
//     fontSize: 30,
//     fillColor: 'black',
//     content: 'Hello world'
// });
//
// const r = function (x) {
//     return Math.floor(Math.random() * x);
// };
//
// timer();
//
//
// function onFrame(event) {
//     text.point = {x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight)};
// };
//
// function timer() {
//     text.point = {x: Math.floor(Math.random() * window.innerWidth), y: Math.floor(Math.random() * window.innerHeight)};
//     text.fillColor = 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')';
//     text.fontSize = Math.random() * 100,
//     setTimeout(function() {
//         timer();
//     }, 200);
// }
