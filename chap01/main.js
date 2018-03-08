$(document).ready(function() {
    'use strict';
    // console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // TO DO
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';
    // var c;
    // for(var x=25; x<400; x+=50) {
    //     for(var y=25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'red';
    //     }
    // }
    var tool = new Tool();

    // mouse click event
    tool.onMouseDown = function(event) {
        var r = Math.random();
        var g = Math.random();
        var b = Math.random();
        console.log(r,g,b);
        var c = Shape.Circle(event.point, 20);
        c.fillColor = new Color(r, g, b);
    };

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World!';

    paper.view.draw();
});