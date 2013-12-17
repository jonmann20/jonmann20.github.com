function GameSave() {
    return {
        load: function (slot) {
            return localStorage["slot" + slot];
        },

        getList: function () {
            return list = [
                this.load(0),
                this.load(1),
                this.load(2)
            ];
        },

        store: function (slot, data) {
            localStorage["slot" + slot] = data;
        },


        update: function () {
            // GameSaveView
        }
    };
}
function GameEngine() {
    var wrap = document.createElement("div");
    wrap.className = "canvasWrap";
    canvas = document.createElement("canvas");
    canvas.setAttribute("width", 16*63);
    canvas.setAttribute("height", 9*63);
    wrap.appendChild(canvas);
    document.body.appendChild(wrap);

    ctx = canvas.getContext("2d");

    input = new GameInput();
    save = new GameSave();
    view = new GameView();

    function update() {
        view.update();
    }

    function render() {
        requestAnimationFrame(render);
        view.render();
    }

    return {
        start: function () {
            setInterval(update, 1000 / 60);
            requestAnimationFrame(render);
        }
    };
}
var KeyCode = Object.freeze({
    EMPTY: -1,
    ENTER: 13,
    CTRL: 17,
    SPACEBAR: 32,
    UP: 38,
    DOWN: 40,
    A: 65,
    D: 68,
    F: 70,
    H: 72,
    J: 74,
    K: 75,
    M: 77,
    O: 79,
    R: 82,
    S: 83,
    W: 87
});

var KeyCodeNames = {};
KeyCodeNames[-1] = "EMPTY";
KeyCodeNames[13] = "ENTER";
KeyCodeNames[17] = "CTRL";
KeyCodeNames[32] = "SPACEBAR";
KeyCodeNames[38] = "UP";
KeyCodeNames[40] = "DOWN";
KeyCodeNames[65] = "A";
KeyCodeNames[68] = "D";
KeyCodeNames[70] = "F";
KeyCodeNames[72] = "H";
KeyCodeNames[74] = "J";
KeyCodeNames[75] = "K";
KeyCodeNames[77] = "M";
KeyCodeNames[79] = "O";
KeyCodeNames[82] = "R";
KeyCodeNames[83] = "S";
KeyCodeNames[87] = "W";

function GameInput() {
    keysDown = {};
    lastKeyUp = KeyCode.EMPTY;

    function fixKey(key) {
        if (key === KeyCode.W)
            key = KeyCode.UP;
        else if (key === KeyCode.S)
            key = KeyCode.DOWN;

        return key;
    }

    addEventListener("keydown", function (e) {
        keysDown[fixKey(e.keyCode)] = true;
    }, true);

    addEventListener("keyup", function (e) {
        lastKeyUp = fixKey(e.keyCode);
        console.log(lastKeyUp);
        delete keysDown[lastKeyUp];
    }, false);
}

//Input.prototype = function () {

//    return {
//        update: function () {

//        }
//    };
//};
/// <reference path="commonLinker.js" />

function GameView() {
    this.state = save.load();

    if (this.state === "yup") {
        this.str = "bar";
    }
    else {
        this.str = "foo";
    }
}

GameView.prototype = (function () {

    return {
        update: function () {
            console.log(KeyCodeNames[lastKeyUp]);
            if (lastKeyUp === KeyCode.ENTER) {
                save.store("yup");
                alert("saved game");
                lastKeyUp = KeyCode.EMPTY;
            }
        },

        render: function () {
            ctx.fillStyle = "#ccc";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = "36px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText(this.str, 10, 100);
        }
    };
})();
/*! 
    Authored by Jim Riecken - released under the MIT License. 
    Modified by Jon Wiedmann
*/

/*
    A simple library for determining intersections of circles and
    polygons using the Separating Axis Theorem.

    jshint shadow:true, sub:true, forin:true, noarg:true, noempty:true, 
    eqeqeq:true, bitwise:true, strict:true, undef:true, 
    curly:true, browser:true 
*/

var SAT = {};
(function(SAT) {
    "use strict";
  
    /*
        Represents a vector in two dimensions.
     
        @param {?number=} x The x position.
        @param {?number=} y The y position.
        @constructor
    */
    var Vector = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    };
    SAT.Vector = Vector;

    /*
        Copy the values of another Vector into this one.
    
        @param {Vector} other The other Vector.
        @return {Vector} This for chaining.
    */
    Vector.prototype.copy = function(other) {
        this.x = other.x; 
        this.y = other.y;

        return this;
    };
    
    /*
        Rotate this vector by 90 degrees
    
        @return {Vector} This for chaining.
    */
    Vector.prototype.perp = function() {
        var x = this.x;
        this.x = this.y; 
        this.y = -x;

        return this;
    };
    
    /*
        Reverse this vector.
    
        @return {Vector} This for chaining.
    */
    Vector.prototype.reverse = function() {
        this.x = -this.x; 
        this.y = -this.y;

        return this;
    };
  
    /*
        Normalize (make unit length) this vector.
        
        @return {Vector} This for chaining.
    */
    Vector.prototype.normalize = function() {
        var d = this.len();

        if(d > 0) {
            this.x = this.x / d; 
            this.y = this.y / d;
        }

        return this;
    };
  
    /*
        Add another vector to this one.
    
        @param {Vector} other The other Vector.
        @return {Vector} This for chaining.
    */
    Vector.prototype.add = function(other) {
        this.x += other.x; 
        this.y += other.y;

        return this;
    };
  
    /*
        Subtract another vector from this one.
    
        @param {Vector} other The other Vector.
        @return {Vector} This for chaiing.
    */
    Vector.prototype.sub = function(other) {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    };
  
    /*
        Scale this vector.
    
        @param {number} x The scaling factor in the x direction.
        @param {?number=} y The scaling factor in the y direction.  If this
        is not specified, the x scaling factor will be used.
        @return {Vector} This for chaining.
    */
    Vector.prototype.scale = function(x,y) {
        this.x *= x; 
        this.y *= y || x;

        return this; 
    };
  
    /*
        Project this vector on to another vector.
    
        @param {Vector} other The vector to project onto.
        @return {Vector} This for chaining.
    */
    Vector.prototype.project = function(other) {
        var amt = this.dot(other) / other.len2();

        this.x = amt * other.x; 
        this.y = amt * other.y;

        return this;
    };
  
    /*
        Project this vector onto a vector of unit length.
    
        @param {Vector} other The unit vector to project onto.
        @return {Vector} This for chaining.
    */
    Vector.prototype.projectN = function(other) {
    var amt = this.dot(other);
    this.x = amt * other.x; 
    this.y = amt * other.y;
    return this;
    };
    Vector.prototype['projectN'] = Vector.prototype.projectN;
  
    /*
        Reflect this vector on an arbitrary axis.
    
        @param {Vector} axis The vector representing the axis.
        @return {Vector} This for chaining.
    */
    Vector.prototype.reflect = function(axis) {
        var x = this.x;
        var y = this.y;

        this.project(axis).scale(2);

        this.x -= x;
        this.y -= y;

        return this;
    };
  
    /*
        Reflect this vector on an arbitrary axis (represented by a unit vector)
    
        @param {Vector} axis The unit vector representing the axis.
        @return {Vector} This for chaining.
    */
    Vector.prototype.reflectN = function(axis) {
        var x = this.x;
        var y = this.y;

        this.projectN(axis).scale(2);

        this.x -= x;
        this.y -= y;

        return this;
    };
  
    /*
        Get the dot product of this vector against another.
     
        @param {Vector}  other The vector to dot this one against.
        @return {number} The dot product.
    */
    Vector.prototype.dot = function(other) {
        return this.x * other.x + this.y * other.y;
    };
  
    /*
        Get the length^2 of this vector.
    
        @return {number} The length^2 of this vector.
    */
    Vector.prototype.len2 = function() {
        return this.dot(this);
    };
  
    /*
        Get the length of this vector.
    
        @return {number} The length of this vector.
    */
    Vector.prototype.len = function() {
        return Math.sqrt(this.len2());
    };
  

    /*
        A circle.
    
        @param {Vector=} pos A vector representing the position of the center of the circle
        @param {?number=} r The radius of the circle
        @constructor
    */
    //var Circle = function(pos, r) {
    //    this.pos = pos || new Vector();
    //    this.r = r || 0;
    //};
    //SAT.Circle = Circle;
  

    /*
        A *convex* clockwise polygon.
    
        @param {Vector=} pos A vector representing the origin of the polygon. (all other
            points are relative to this one)
        @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
            in clockwise order.
        @constructor
    */
    var Polygon = function(pos, points) {
        this.pos = pos || new Vector();
        this.points = points || [];

        this.recalc();
    };
    SAT.Polygon = Polygon;
  
    /*
        Recalculate the edges and normals of the polygon.  This
        MUST be called if the points array is modified at all and
        the edges or normals are to be accessed.
    */
    Polygon.prototype.recalc = function() {
        var points = this.points;
        var len = points.length;

        this.edges = []; 
        this.normals = [];

        for (var i = 0; i < len; i++) {
            var p1 = points[i]; 
            var p2 = i < len - 1 ? points[i + 1] : points[0];

            var e = new Vector().copy(p2).sub(p1);
            var n = new Vector().copy(e).perp().normalize();

            this.edges.push(e);
            this.normals.push(n);
        }
    };
    
  
    /*
        An axis-aligned box, with width and height.
    
        @param {Vector=} pos A vector representing the top-left of the box.
        @param {?number=} w The width of the box.
        @param {?number=} h The height of the box.
        @constructor
    */
    var Box = function(pos, w, h) {
        this.pos = pos || new Vector();
        this.w = w || 0; 
        this.h = h || 0;
    };
    SAT.Box = Box;

    /*
        Create a polygon that is the same as this box.
    
        @return {Polygon} A new Polygon that represents this box.
    */
    Box.prototype.toPolygon = function() {
        var pos = this.pos;
        var w = this.w;
        var h = this.h;

        return new Polygon(new Vector(pos.x, pos.y), [
            new Vector(), new Vector(w, 0), 
            new Vector(w,h), new Vector(0,h)
        ]);
    };
  
    /*
        Pool of Vectors used in calculations.
    
        @type {Array.<Vector>}
    */
    var T_VECTORS = [];
    for (var i = 0; i < 10; ++i) { T_VECTORS.push(new Vector()); }

    /*
        Pool of Arrays used in calculations.
    
        @type {Array.<Array.<*>>}
    */
    var T_ARRAYS = [];
    for (var i = 0; i < 5; ++i) { T_ARRAYS.push([]); }

    /*
        An object representing the result of an intersection. Contain information about:
            - The two objects participating in the intersection
            - The vector representing the minimum change necessary to extract the first object
              from the second one.
            - Whether the first object is entirely inside the second, or vice versa.
    
        @constructor
    */  
    var Response = function() {
        this.a = null;
        this.b = null;

        this.overlapN = new Vector(); // Unit vector in the direction of overlap
        this.overlapV = new Vector(); // Subtract this from a's position to extract it from b

        this.clear();
    };
    SAT.Response = Response;

    /*
        Set some values of the response back to their defaults.  Call this between tests if 
        you are going to reuse a single Response object for multiple intersection tests (recommented)
    
        @return {Response} This for chaining
    */
    Response.prototype.clear = function() {
        this.aInB = true; // Is a fully inside b?
        this.bInA = true; // Is b fully inside a?
        this.overlap = Number.MAX_VALUE; // Amount of overlap (magnitude of overlapV). Can be 0 (if a and b are touching)

        return this;
    };
  
    /*
        Flattens the specified array of points onto a unit vector axis,
        resulting in a one dimensional range of the minimum and 
        maximum value on that axis.
    
        @param {Array.<Vector>} points The points to flatten.
        @param {Vector} normal The unit vector axis to flatten on.
        @param {Array.<number>} result An array.  After calling this function,
            result[0] will be the minimum value,
        result[1] will be the maximum value.
    */
    var flattenPointsOn = function(points, normal, result) {
        var min = Number.MAX_VALUE;
        var max = -Number.MAX_VALUE;
        var len = points.length;

        for (var i = 0; i < len; ++i ) {
            // Get the magnitude of the projection of the point onto the normal
            var dot = points[i].dot(normal);

            if (dot < min) { min = dot; }
            if (dot > max) { max = dot; }
        }

        result[0] = min;
        result[1] = max;
    };
  
    /*
        Check whether two convex clockwise polygons are separated by the specified
        axis (must be a unit vector).
    
        @param {Vector} aPos The position of the first polygon.
        @param {Vector} bPos The position of the second polygon.
        @param {Array.<Vector>} aPoints The points in the first polygon.
        @param {Array.<Vector>} bPoints The points in the second polygon.
        @param {Vector} axis The axis (unit sized) to test against.  The points of both polygons
            will be projected onto this axis.
        @param {Response=} response A Response object (optional) which will be populated
            if the axis is not a separating axis.
        @return {boolean} true if it is a separating axis, false otherwise.  If false,
            and a response is passed in, information about how much overlap and
            the direction of the overlap will be populated.
    */
    var isSeparatingAxis = function(aPos, bPos, aPoints, bPoints, axis, response) {
        var rangeA = T_ARRAYS.pop();
        var rangeB = T_ARRAYS.pop();

        // Get the magnitude of the offset between the two polygons
        var offsetV = T_VECTORS.pop().copy(bPos).sub(aPos);
        var projectedOffset = offsetV.dot(axis);

        // Project the polygons onto the axis.
        flattenPointsOn(aPoints, axis, rangeA);
        flattenPointsOn(bPoints, axis, rangeB);

        // Move B's range to its position relative to A.
        rangeB[0] += projectedOffset;
        rangeB[1] += projectedOffset;

        // Check if there is a gap. If there is, this is a separating axis and we can stop
        if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
            T_VECTORS.push(offsetV); 
            T_ARRAYS.push(rangeA); 
            T_ARRAYS.push(rangeB);

            return true;
        }

        // If we're calculating a response, calculate the overlap.
        if (response) {
            var overlap = 0;

            // A starts further left than B
            if (rangeA[0] < rangeB[0]) {
                response.aInB = false;

                // A ends before B does. We have to pull A out of B
                if (rangeA[1] < rangeB[1]) { 
                    overlap = rangeA[1] - rangeB[0];
                    response.bInA = false;
                }
                else {  // B is fully inside A.  Pick the shortest way out.
                    var option1 = rangeA[1] - rangeB[0];
                    var option2 = rangeB[1] - rangeA[0];
                    overlap = option1 < option2 ? option1 : -option2;
                }
            
            }
            else {  // B starts further left than A
                response.bInA = false;

                // B ends before A ends. We have to push A out of B
                if (rangeA[1] > rangeB[1]) { 
                    overlap = rangeA[0] - rangeB[1];
                    response.aInB = false;
                }
                else {  // A is fully inside B.  Pick the shortest way out.
                    var option1 = rangeA[1] - rangeB[0];
                    var option2 = rangeB[1] - rangeA[0];

                    overlap = option1 < option2 ? option1 : -option2;
                }
            }

            // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
            var absOverlap = Math.abs(overlap);
            if (absOverlap < response.overlap) {
                response.overlap = absOverlap;
                response.overlapN.copy(axis);

                if (overlap < 0) {
                    response.overlapN.reverse();
                }
            }      
        }

        T_VECTORS.push(offsetV); 
        T_ARRAYS.push(rangeA); 
        T_ARRAYS.push(rangeB);

        return false;
    };
  
    /*
        Calculates which Vornoi region a point is on a line segment.
        It is assumed that both the line and the point are relative to (0, 0)
    
                 |       (0)      | 
          (-1)  [0]--------------[1]  (1)
                 |       (0)      | 
     
        @param {Vector} line The line segment.
        @param {Vector} point The point.
        @return {number} LEFT_VORNOI_REGION (-1) if it is the left region, 
               MIDDLE_VORNOI_REGION (0) if it is the middle region, 
               RIGHT_VORNOI_REGION (1) if it is the right region.
    */
    var vornoiRegion = function(line, point) {
        var len2 = line.len2();
        var dp = point.dot(line);

        if (dp < 0) { return LEFT_VORNOI_REGION; }
        else if (dp > len2) { return RIGHT_VORNOI_REGION; }
        else { return MIDDLE_VORNOI_REGION; }
    };

    // @const
    var LEFT_VORNOI_REGION = -1;

    // @const
    var MIDDLE_VORNOI_REGION = 0;
    
    // @const
    var RIGHT_VORNOI_REGION = 1;
  
    /*
        Check if two circles intersect.
    
        @param {Circle} a The first circle.
        @param {Circle} b The second circle.
        @param {Response=} response Response object (optional) that will be populated if
            the circles intersect.
        @return {boolean} true if the circles intersect, false if they don't. 
    */
    //SAT.testCircleCircle = function (a, b, response) {
    //    var differenceV = T_VECTORS.pop().copy(b.pos).sub(a.pos);
    //    var totalRadius = a.r + b.r;
    //    var totalRadiusSq = totalRadius * totalRadius;
    //    var distanceSq = differenceV.len2();

    //    if (distanceSq > totalRadiusSq) {
    //        // They do not intersect 
    //        T_VECTORS.push(differenceV);
    //        return false;
    //    }

    //    // They intersect.  If we're calculating a response, calculate the overlap.
    //    if (response) {
    //        var dist = Math.sqrt(distanceSq);
    //        response.a = a;
    //        response.b = b;
    //        response.overlap = totalRadius - dist;
    //        response.overlapN.copy(differenceV.normalize());
    //        response.overlapV.copy(differenceV).scale(response.overlap);
    //        response.aInB = a.r <= b.r && dist <= b.r - a.r;
    //        response.bInA = b.r <= a.r && dist <= a.r - b.r;
    //    }

    //    T_VECTORS.push(differenceV);

    //    return true;
    //};
  
    /*
        Check if a polygon and a circle intersect.
    
        @param {Polygon} polygon The polygon.
        @param {Circle} circle The circle.
        @param {Response=} response Response object (optional) that will be populated if
            they interset.
        @return {boolean} true if they intersect, false if they don't.
    */
    //var testPolygonCircle = function(polygon, circle, response) {
    //    var circlePos = T_VECTORS.pop().copy(circle.pos).sub(polygon.pos);
    //    var radius = circle.r;
    //    var radius2 = radius * radius;
    //    var points = polygon.points;
    //    var len = points.length;
    //    var edge = T_VECTORS.pop();
    //    var point = T_VECTORS.pop();
    
    //    // For each edge in the polygon
    //    for (var i = 0; i < len; ++i) {
    //        var next = i === len - 1 ? 0 : i + 1;
    //        var prev = i === 0 ? len - 1 : i - 1;
    //        var overlap = 0;
    //        var overlapN = null;
      
    //        // Get the edge
    //        edge.copy(polygon.edges[i]);

    //        // Calculate the center of the cirble relative to the starting point of the edge
    //        point.copy(circlePos).sub(points[i]);
      
    //        // If the distance between the center of the circle and the point
    //        // is bigger than the radius, the polygon is definitely not fully in
    //        // the circle.
    //        if (response && point.len2() > radius2) {
    //            response.aInB = false;
    //        }
      
    //        // Calculate which Vornoi region the center of the circle is in.
    //        var region = vornoiRegion(edge, point);
    //        if (region === LEFT_VORNOI_REGION) { 
    //            // Need to make sure we're in the RIGHT_VORNOI_REGION of the previous edge.
    //            edge.copy(polygon.edges[prev]);
    //            // Calculate the center of the circle relative the starting point of the previous edge
    //            var point2 = T_VECTORS.pop().copy(circlePos).sub(points[prev]);
    //            region = vornoiRegion(edge, point2);
    //            if (region === RIGHT_VORNOI_REGION) {
    //                // It's in the region we want.  Check if the circle intersects the point.
    //                var dist = point.len();
    //                if (dist > radius) {
    //                    // No intersection
    //                    T_VECTORS.push(circlePos); 
    //                    T_VECTORS.push(edge);
    //                    T_VECTORS.push(point); 
    //                    T_VECTORS.push(point2);

    //                    return false;
    //                }
    //                else if (response) {
    //                    // It intersects, calculate the overlap
    //                    response.bInA = false;
    //                    overlapN = point.normalize();
    //                    overlap = radius - dist;
    //                }
    //            }

    //            T_VECTORS.push(point2);
    //        }
    //        else if (region === RIGHT_VORNOI_REGION) {
    //            // Need to make sure we're in the left region on the next edge
    //            edge.copy(polygon.edges[next]);

    //            // Calculate the center of the circle relative to the starting point of the next edge
    //            point.copy(circlePos).sub(points[next]);
    //            region = vornoiRegion(edge, point);

    //            if (region === LEFT_VORNOI_REGION) {
    //                // It's in the region we want.  Check if the circle intersects the point.
    //                var dist = point.len();
    //                if (dist > radius) {
    //                    // No intersection
    //                    T_VECTORS.push(circlePos); 
    //                    T_VECTORS.push(edge); 
    //                    T_VECTORS.push(point);

    //                    return false;              
    //                }
    //                else if (response) {
    //                    // It intersects, calculate the overlap
    //                    response.bInA = false;
    //                    overlapN = point.normalize();
    //                    overlap = radius - dist;
    //                }
    //            }
                
    //        }
    //        else {  // MIDDLE_VORNOI_REGION
    //            // Need to check if the circle is intersecting the edge,
    //            // Change the edge into its "edge normal".
    //            var normal = edge.perp().normalize();

    //            // Find the perpendicular distance between the center of the 
    //            // circle and the edge.
    //            var dist = point.dot(normal);
    //            var distAbs = Math.abs(dist);

    //            // If the circle is on the outside of the edge, there is no intersection
    //            if (dist > 0 && distAbs > radius) {
    //                T_VECTORS.push(circlePos); 
    //                T_VECTORS.push(normal); 
    //                T_VECTORS.push(point);

    //                return false;
    //            }
    //            else if (response) {
    //                // It intersects, calculate the overlap.
    //                overlapN = normal;
    //                overlap = radius - dist;

    //                // If the center of the circle is on the outside of the edge, or part of the
    //                // circle is on the outside, the circle is not fully inside the polygon.
    //                if (dist >= 0 || overlap < 2 * radius) {
    //                    response.bInA = false;
    //                }
    //            }
    //        }
      
    //        // If this is the smallest overlap we've seen, keep it. 
    //        // (overlapN may be null if the circle was in the wrong Vornoi region)
    //        if (overlapN && response && Math.abs(overlap) < Math.abs(response.overlap)) {
    //            response.overlap = overlap;
    //            response.overlapN.copy(overlapN);
    //        }
    //    }
    
    //    // Calculate the final overlap vector - based on the smallest overlap.
    //    if (response) {
    //        response.a = polygon;
    //        response.b = circle;
    //        response.overlapV.copy(response.overlapN).scale(response.overlap);
    //    }

    //    T_VECTORS.push(circlePos); 
    //    T_VECTORS.push(edge); 
    //    T_VECTORS.push(point);

    //    return true;
    //};
    //SAT.testPolygonCircle = testPolygonCircle;
  
    /*
        Check if a circle and a polygon intersect.
    
        NOTE: This runs slightly slower than polygonCircle as it just
            runs polygonCircle and reverses everything at the end.
    
        @param {Circle} circle The circle.
        @param {Polygon} polygon The polygon.
        @param {Response=} response Response object (optional) that will be populated if
            they interset.
        @return {boolean} true if they intersect, false if they don't.
    */
    //SAT.testCirclePolygon = function (circle, polygon, response) {
    //    var result = testPolygonCircle(polygon, circle, response);

    //    if (result && response) {
    //        // Swap A and B in the response.
    //        var a = response.a;
    //        var aInB = response.aInB;
    //        response.overlapN.reverse();
    //        response.overlapV.reverse();
    //        response.a = response.b;
    //        response.b = a;
    //        response.aInB = response.bInA;
    //        response.bInA = aInB;
    //    }

    //    return result;
    //};
  
    /*
        Checks whether two convex, clockwise polygons intersect.
    
        @param {Polygon} a The first polygon.
        @param {Polygon} b The second polygon.
        @param {Response=} response Response object (optional) that will be populated if
        they interset.
        @return {boolean} true if they intersect, false if they don't.
    */
    SAT.testPolygonPolygon = function (a, b, response) {
        var aPoints = a.points;
        var aLen = aPoints.length;
        var bPoints = b.points;
        var bLen = bPoints.length;

        // If any of the edge normals of A is a separating axis, no intersection.
        for (var i = 0; i < aLen; i++) {
            if (isSeparatingAxis(a.pos, b.pos, aPoints, bPoints, a.normals[i], response)) {
                return false;
            }
        }

        // If any of the edge normals of B is a separating axis, no intersection.
        for (var i = 0; i < bLen; i++) {
            if (isSeparatingAxis(a.pos, b.pos, aPoints, bPoints, b.normals[i], response)) {
                return false;
            }
        }

        // Since none of the edge normals of A or B are a separating axis, there is an intersection
        // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
        // final overlap vector.
        if (response) {
            response.a = a;
            response.b = b;
            response.overlapV.copy(response.overlapN).scale(response.overlap);
        }

        return true;
    };
}(SAT));
(function Main() {
    var game = new GameEngine();
    game.start();
})();
//# sourceMappingURL=pageVamp.js.map