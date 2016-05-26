const enum Operator{
    ADD,
    DIV,
    MUL,
    SUB
}

function compute(op:Operator, a:number, b:number){
    console.log("The operator is " + Operator[op]);
}