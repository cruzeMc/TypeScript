function getX(p) {
    return p.x;
}
var CPoint = (function () {
    function CPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return CPoint;
}());
getX(new CPoint(0, 0));
getX({ x: 0, y: 0, color: "red" }); // Extra fields Ok
getX({ x: 0 }); // Error: supplied parameter does not match
//# sourceMappingURL=4. Structural Subtyping.js.map