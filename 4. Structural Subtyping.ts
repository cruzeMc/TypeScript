interface Point{
    x: number;
    y: number;
}

function getX(p: Point){
    return p.x;
}

class CPoint{
    x: number;
    y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
}

getX(new CPoint(0,0));
getX({x:0, y:0, color:"red"});// Extra fields Ok
getX({x:0});// Error: supplied parameter does not match