const enum Operator{
    ADD,
    DIV,
    MUL,
    SUB
}

function compute(op:Operator, a:number, b:number){
    switch(op){
        case Operator.ADD:
            console.log(a+b);
            break;
        
        case Operator.DIV:
            console.log(a/b);
            break;
        
        case Operator.MUL:
            console.log(a*b);
            break;
        
        case Operator.SUB:
            console.log(a-b);
            break;
    }
    console.log("The operator is " + Operator[op]);
}