(function() {
    'use strict';

    Object.prototype.extend = function (parent) {
        if (!Object.create) {
            Object.prototype.create = function (proto) {
                var F = function() {};
                F.prototype = proto;
                return new F();
            };
        }

        this.prototype = Object.create(parent.prototype);
        this.constructor = this;
    };

    var Shapes = (function() {
        var Shape = function (x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        };


        var Circle = function (x, y, radius, color) {
            Shape.call(this, x, y, color);
            this.radius = radius;
        };


        var Rectangle = function (x, y, width, height, color) {
            Shape.call(this, x, y, color);
            this.width = width;
            this.height = height;
        };


        var Triangle = function (x1, y1, x2, y2, x3, y3, color) {
            Shape.call(this, x1, y1, color);
            this.x2 = x2;
            this.y2 = y2;
            this.x3 = x3;
            this.y3 = y3;
        };

        var Line = function (x1, y1, x2, y2, color) {
            Shape.call(this, x1, y1, color);
            this.x2 = x2;
            this.y2 = y2;
        };

        var Segment = function (x1, y1, x2, y2, color) {
            Shape.call(this, x1, y1, color);
            this.x2 = x2;
            this.y2 = y2;
        };

        Circle.extend(Shape);
        Rectangle.extend(Shape);
        Triangle.extend(Shape);
        Line.extend(Shape);
        Segment.extend(Shape);

        Shape.prototype.toString = function () {
            return 'Color: ' + this.color + '. Points: (x - ' + this.x + ', y - ' + this.y + ')';
        };

        Circle.prototype.toString = function () {
            return 'Shape: Circle. Parameters: ' + Shape.prototype.toString.call(this) + ', Radius: ' + this.radius;
        };

        Rectangle.prototype.toString = function () {
            return 'Shape: Rectangle. ' + Shape.prototype.toString.call(this) +
                ', Width: ' + this.width + ', Height: ' + this.height;
        };

        Triangle.prototype.toString = function () {
            return 'Shape: Triangle. ' + Shape.prototype.toString.call(this) +
                '. Point 2: (x: ' + this.x2 + ', y: ' + this.y2 + ')' +
                '. Point 3: (x: ' + this.x3 + ', y: ' + this.y3 + ')';
        };

        Line.prototype.toString = function () {
            return 'Shape: Line. ' + Shape.prototype.toString.call(this) +
                '. Point 2: (x: ' + this.x2 + ', y : ' + this.y2 + ')';
        };

        Segment.prototype.toString = function () {
            return 'Shape: Segment. ' + Shape.prototype.toString.call(this) +
                '. Point 2 : (x: ' + this.x2 + ', y: ' + this.y2 + ')';
        };

        return {
            Circle: Circle,
            Rectangle: Rectangle,
            Triangle: Triangle,
            Line: Line,
            Segment: Segment
        };
    }());

    console.log(new Shapes.Circle(2, 3, 1, 'red').toString());
    console.log(new Shapes.Rectangle(2, 3, 140, 70, 'green').toString());
    console.log(new Shapes.Triangle(1, 3, 2, 5, 3, 6, 'blue').toString());
    console.log(new Shapes.Line(5, 4, 2, 1, 'purple').toString());
    console.log(new Shapes.Segment(2, 3, 6, 1, 'black').toString());
}());
