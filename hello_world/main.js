window.onload = function () {
    paper.install(window);
    paper.setup(document.getElementById('mycanvas'));

    const tool = new Tool();

    const r = function (x) {
        return Math.floor(Math.random() * x);
    };

    const r2 = function () {
        return Math.floor(Math.random() * 2000);
    };

    const timer = function () {
        const p = [r2(), r2()];
        const c = Shape.Circle({
            center: p,
            radius: 80,
            fillColor: 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')'
        });

        const text = new PointText({
            point: p,
            content: 'Hello world',
            fillColor: 'rgba(' + r(255) + ',' + r(255) + ',' + r(255) + ',' + Math.random() + ')',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 20,
            justification: 'center'
        });

        const text2 = new PointText({
            point: [window.innerWidth / 2, window.innerHeight / 2],
            content: 'Hello world',
            fillColor: 'black',
            fontWeight: 'bold',
            fontSize: 50,
            justification: 'center'
        });

        setTimeout(function () {
            timer();
        }, Math.floor(Math.random() * 100))
    };

    timer();
};