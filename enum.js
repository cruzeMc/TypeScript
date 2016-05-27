function compute(op, a, b) {
    switch (op) {
        case 0 /* ADD */:
            console.log(a + b);
            break;
        case 1 /* DIV */:
            console.log(a / b);
            break;
        case 2 /* MUL */:
            console.log(a * b);
            break;
        case 3 /* SUB */:
            console.log(a - b);
            break;
    }
    console.log("The operator is " + Operator[op]);
}
//# sourceMappingURL=enum.js.map